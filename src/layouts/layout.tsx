import Footer from "../components/footer";
import { Header } from "../components/header";

// MainLayout.tsx (Prop interface omitted if using JS)
interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  console.log("test");
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
