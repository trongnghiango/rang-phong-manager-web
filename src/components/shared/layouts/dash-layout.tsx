import { Footer } from "../footer/Footer";
import PhongFooter from "../footer/phong-footer";
import { Header } from "../header/phong-header";
import { MainNavigation } from "../main-navigation/MainNavigation";

// MainLayout.tsx (Prop interface omitted if using JS)
interface Props {
  children: React.ReactNode;
}

export default function DashLayout({ children }: Props) {

  return (
    <>
      <div className="flex flex-col">
        <header className="">
          {/* <MainNavigation /> */}
        </header>
        <div className="flex flex-col">
          <Header />
          <main>{children}</main>
          <PhongFooter />
        </div>
      </div>
    </>
  );
}