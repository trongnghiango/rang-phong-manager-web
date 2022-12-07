import { Footer } from "../footer/Footer";
import { MainNavigation } from "../main-navigation/MainNavigation";

// MainLayout.tsx (Prop interface omitted if using JS)
interface Props {
  children: React.ReactNode;
}

export default function NoneLayout({ children }: Props) {
  console.log("NONE LAYOUT");
  return (
    <>

      <main>{children}</main>

    </>
  );
}