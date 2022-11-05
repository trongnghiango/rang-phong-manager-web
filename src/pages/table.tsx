import Image from "next/image";
import MainLayout from "../layouts/layout";

const tData = [
  {
    name: "Thinh",
    image:
      "https://cdn.dribbble.com/users/2364329/screenshots/4759681/dribbble-11.jpg",
    email: "thinh@yahoo.com",
    job: "Ciquan",
    team: "Bodo",
    manager: "Manager",
  },
];
const tableData = [
  {
    name: "Laura Bran",
    image:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Violet",
    image:
      "https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
];

const Table = () => {
  return (
    <div className="container mx-auto">
      <table className="table-users">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Job Title</th>
            <th>Team</th>
            <th>Manager</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.name}>
              <td>
                <div className="flex items-center gap-x-3">
                  <div className="relative h-[50px] w-[50px] flex-shrink-0 object-contain">
                    <Image src={item.image} alt={"avt"} layout={"fill"} />
                  </div>
                  <span>{item.name}</span>
                </div>
              </td>
              <td>{item.job}</td>
              <td>{item.team}</td>
              <td>{item.manager}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
