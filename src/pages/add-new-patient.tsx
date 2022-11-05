import MainLayout from "../layouts/layout";

const AddNewPatient = () => {
  return (
    <div className="flex">
      <div className="container mx-auto">
        <p className="my-8 text-3xl">AddNewPatient</p>
        <div>
          <div className="flex flex-col border-[1.3px] border-black bg-white p-4 shadow md:flex-row">
            {/*sec1*/}
            <div className="flex-1 p-4 text-base">
              <div className="flex flex-col">
                <h3 className="px-4 pb-2">Patient name</h3>
                <div className="mb-2 px-4">
                  <input
                    type={"text"}
                    className="w-full border border-[#555] px-[10px] py-[5px]"
                    placeholder="Last name"
                  />
                </div>
                <div className="mb-2 px-4">
                  <input
                    type={"text"}
                    className="w-full border border-[#555] px-[10px] py-[5px]"
                    placeholder="First name"
                  />
                </div>
                <div className="mb-2 px-4">
                  <input
                    type={"text"}
                    className="w-[130px] border border-[#555] px-[10px] py-[5px]"
                    placeholder="MI"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="px-4 pb-2">Patient gender</h3>
                <div className="item-center mb-2 flex gap-8 pl-[55px]">
                  <span>Male</span>
                  <span>Female</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="px-4 pb-2">Date of birth</h3>

                <div className="mb-2 flex items-center gap-3 px-4">
                  <input
                    type={"text"}
                    className="w-16 border border-[#555] px-[10px] py-[5px]"
                    placeholder="DD"
                  />
                  <input
                    type={"text"}
                    className="w-16 border border-[#555] px-[10px] py-[5px]"
                    placeholder="MM"
                  />
                  <input
                    type={"text"}
                    className="w-[130px] border border-[#555] px-[10px] py-[5px]"
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>
            {/* sec2 */}
            <div className="h-32 flex-1 p-4">
              <div className="flex flex-col">
                <h3 className="px-4 pb-2">Patient gender</h3>
                <div className="item-center mb-2 flex gap-8 pl-[55px]">
                  <span className="text-base">
                    <label>DR Nguyen Quoc Tuan(# 1322543), </label>
                    <label className="block" htmlFor="">
                      WestWay Dental, Crescent Mall, Tang B1, 101 Ton Dat Tien,
                      Tan Phu, Quan 7
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <OutlineButton label="Back" />
              <OutlineButton label="Cancel" />
            </div>
            <KButton label={"Next"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const KButton = ({ label }: any) => {
  return (
    <button className="bg-[#009ace] px-8 py-2 text-base text-white">
      {label}
    </button>
  );
};

const OutlineButton = ({ label }: { label: string }) => {
  return <button className="border border-gray-800 px-8 py-2">{label}</button>;
};

export default AddNewPatient;

AddNewPatient.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
