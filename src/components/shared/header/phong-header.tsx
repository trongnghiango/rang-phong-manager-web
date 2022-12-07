import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const initTabs = [
  {
    id: "0",
    title: "Home",
    active: true,
    route: "/",
  },
  {
    id: "1",
    title: "Patients",
    active: false,
    route: "/patients",
  },
  {
    id: "2",
    title: "Prospects",
    active: false,
    route: "/test",
  },
  {
    id: "3",
    title: "Account",
    active: false,
    route: "/test-2",
  },
  {
    id: "4",
    title: "Education",
    active: false,
    route: "/add-new-patient",
  },
  {
    id: "5",
    title: "Support",
    active: false,
    route: "/support",
  },
  {
    id: "6",
    title: "Virtual Care",
    active: false,
    route: "/table",
  },
];
export const Header = () => {
  const [tabs, setTabs] = useState(initTabs);
  const router = useRouter();
  console.log(router.pathname);

  const selectTabHandler = (selected_id: string) => {
    const temps = [...tabs];
    //temps[selected_id]?.active = true;
    temps.forEach((ite) => {
      ite.active = false;
      if (ite.id === selected_id) {
      }
    });
    setTabs(temps);
  };
  return (
    <div className="bg-[#3D3935] text-[#575659]">
      <div className="relative">
        <div className="flex h-[74px] items-center px-4">
          {/* button menu for mobile */}
          <div className="absolute top-0 right-0 mr-4 translate-y-full transform-gpu lg:hidden">
            <button type="button" className="sideNavbarToggle text-white">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/*Logok*/}
          <div className="flex w-full items-center">
            <Link href={"/"} passHref>
              <button className="header-left relative z-50 h-[74px] w-[223px] cursor-pointer">
                <Image
                  src="/images/invisalign-logo.svg"
                  alt="logo"
                  layout="fill"
                  priority
                />
              </button>
            </Link>
          </div>
        </div>
        {/* navbar right   */}
        <div className="navBarRight absolute top-0 bottom-0 right-0 left-0 flex items-center justify-end">
          <div className="flex-end text-white ">
            <ul className="">
              <li className="dropdown">
                <a className="flex items-center gap-2 text-lg">
                  <span className="header-greeting-text">Hello,</span>
                  <span className="doctorName">Dr. Nguyen Quoc</span>
                  <span className="header-profile-picture">
                    <button
                      className="text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                      type="button"
                    >
                      <img
                        src="images/invisalign-logo.svg"
                        width={25}
                        height={25}
                      />
                    </button>
                  </span>
                  <span className="header-drop-down-icon"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center">
        <ul className="flex h-full items-center gap-8 text-base font-bold text-[#9d9d9d]">
          {tabs.map((item, idx) => (
            <li
              key={idx}
              className={`${router.pathname === item.route ? "item-menu-tab_active" : ""
                } item-menu-tab h-full py-[10px] leading-6`}
            >
              <Link href={item.route ?? "/"} passHref>
                <a
                  //onClick={() => selectTabHandler(item.id)}
                  className="h-full"
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};