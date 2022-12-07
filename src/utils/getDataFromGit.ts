import { IOrthodontics, IStep } from "state/interfaces/teeth.interface";

export const getNumKeyFromNameString = (str: string): string => {
  const a = str.split(".")[0];
  const pieces = a.split("-");
  const last = pieces[pieces.length - 1];
  return last;
};

export const getDataFromGit = async () => {
  const res1 = await fetch(
    `https://api.github.com/repos/trongnghiango/rang-phong/contents/assets`
  );
  if (res1) {
    const result = await res1.json();
    // console.log('RESULT', result);
    // const a = await forLoop(result);
    const dsync = syncDataFromGithub(result);

    return dsync;
  }
  //console.log(res1.json())
  return null;
};
const syncDataFromGithub = (files: any): any => {
  let obj: any = {};
  // let keys: string[] = [];
  if (Array.isArray(files)) {
    files.forEach((file) => {
      //handle ..
      const key = getNumKeyFromNameString(file.name);

      if (key) {
        const maxillary =
          file.name.includes(".obj") && file.name.includes("Maxillary")
            ? `${file.download_url}`
            : undefined;
        const mandibular =
          file.name.includes(".obj") && file.name.includes("Mandibular")
            ? `${file.download_url}`
            : undefined;

        if (maxillary) {
          obj = {
            ...obj,
            [key]: { ...obj[key], maxillary },
          };
        }

        if (mandibular) {
          obj = {
            ...obj,
            [key]: { ...obj[key], mandibular },
          };
        }
      }
    });
  }
  return obj;
};

const forLoop = async (
  data: any
): Promise<{ links: any; test: any; mandibular: any; maxillary: any }> => {
  console.log("Start");
  const maxillary = {}; // Ham tren
  const mandibular = {}; // Ham duoi
  const links: string[] = [];
  for (let index = 0; index < data.length; index++) {
    const { typeKey, step } = getItemKey(data[index].name);
    //console.log(data[index])
    const link = data[index].download_url;
    //const item = await getFile(data[index].download_url);
    console.log("Finished::", data[index].name);
    //if (item === null) break;
    if (typeKey === "Maxillary") {
      maxillary[step] = link;
    } else if (typeKey === "Mandibular") {
      mandibular[step] = link;
    }
  }

  let temp;
  if (links.length > 0) temp = await getFile(links[0]);

  return { maxillary, mandibular, links, test: temp };
};

async function getFile(link: string) {
  const response = await fetch(link);
  if (response && response.status === 200) {
    const result = await response.blob();
    return URL.createObjectURL(result);
  }
  return null;
}

//parse ten file va lay stt lam key
export function getItemKey(str: string) {
  const a = str.split(".")[0];
  const pieces = a.split("-");
  const first = pieces[0];
  const last = pieces[pieces.length - 1];

  return { typeKey: first, step: parseInt(last) };
}

export const fetchFileData = async (arr: string[]) => {
  try {
    const res = await Promise.all(arr.map((val) => fetch(val)));
    const data = await Promise.all(
      res.map((r) => {
        console.log("X");
        return r.blob();
      })
    );
    return data;
  } catch (err) {
    console.log(err);
    //throw Error("Promise failed", err);
  }
};
