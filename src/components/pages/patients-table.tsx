import Image from "next/image";

const tData = [
  {
    name: "Thinh",
    image:
      "https://cdn.dribbble.com/users/2364329/screenshots/4759681/dribbble-11.jpg",
    start_date: "thinh@yahoo.com",
    treatment_option: "Ciquan",
    status: "Bodo",
    notes: "Manager",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
  {
    id: "15626940",
    name: "Doan Ngan K",
    image: "",
    start_date: "18/11/2021",
    treatment_option: "Comprehensive Package",
    status: "",
    notes: "Q2",
  },
];

const PatientsTable = () => {
  return (
    <div className="container mx-auto">
      <table className="table-users">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Start Date</th>
            <th>Treatment option</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tData.map((item) => (
            <tr key={item.name}>
              <td>
                <div className="flex items-center gap-x-3">
                  <div className="relative h-[50px] w-[50px] flex-shrink-0 object-contain">
                    {item.image && (
                      <Image src={item.image} alt={"avt"} layout={"fill"} />
                    )}
                  </div>
                  <span>{item.name}</span>
                </div>
              </td>
              <td>{item.start_date}</td>
              <td>{item.treatment_option}</td>
              <td>{item.status}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
