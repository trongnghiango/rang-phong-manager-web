import { Footer } from "../footer/Footer";
import PhongFooter from "../footer/phong-footer";
import { MainNavigation } from "../main-navigation/MainNavigation";

// MainLayout.tsx (Prop interface omitted if using JS)
interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  console.log("test");
  return (
    <>
      <div className="flex flex-col">
        <header className="">
          <MainNavigation />
        </header>
        <main className="flex-1 bg-gray-600">{children}</main>
        <footer className="">
          <PhongFooter />
        </footer>
      </div>
    </>
  );
}