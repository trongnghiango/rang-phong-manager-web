
import AddNewPatient from "components/pages/patients-page/add-new-patient";
import MainLayout from "components/shared/layouts/main-layout";
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
Editor.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

