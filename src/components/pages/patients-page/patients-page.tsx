import Link from "next/link";
import PatientsTable from "./patients-table";

export default function PatientsPage() {
  const addNewPatientHandler = () => {
    //go to page create new patient
    console.log("add new patient");
  };
  return (
    <div className="flex flex-col">
      {/*button add patient */}
      <div className="flex">
        <Link href={"/patients/add"}>
          <a className="my-4 bg-[#009ace] py-[15px] pl-[12px] pr-[45px] text-white">
            <span className="text-[17.5px] font-bold ">Add new patient</span>
          </a>
        </Link>
      </div>
      <PatientsTable />
    </div>
  );
}

