import { useRouter } from "next/router";
import MainLayout from "../../layouts/layout";

export default function PatientEditor() {
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query);
  return <>Hello {name}</>;
}

PatientEditor.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
