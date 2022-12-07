import AddNewPatient from "components/pages/patients-page/add-new-patient";
import NoneLayout from "components/shared/layouts/none-layout";
import { useRouter } from "next/router";

export default function Editor() {
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query);
  return <>
    <AddNewPatient />
  </>;
}


