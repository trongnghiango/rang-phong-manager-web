import Patients from "../../components/pages/patients";
import MainLayout from "../../layouts/layout";

export default function KPatients() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto">
          <Patients />
        </div>
      </main>
    </>
  );
}

KPatients.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
