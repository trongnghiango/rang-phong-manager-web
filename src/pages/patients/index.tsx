import PatientsPage from "components/pages/patients-page/patients-page";
import DashLayout from "components/shared/layouts/dash-layout";
import MainLayout from "components/shared/layouts/main-layout";

export default function Patients() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto">
          <PatientsPage />
        </div>
      </main>
    </>
  );
}

Patients.getLayout = function getLayout(page: React.ReactElement) {
  return <DashLayout>{page}</DashLayout>;
  // return <MainLayout>{page}</MainLayout>;
};