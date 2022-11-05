import AltHeader from "../components/atl-header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

// AltLayout.tsx
interface Props {
  children: React.ReactNode;
}

export default function AltLayout({ children }: Props) {
  return (
    <body>
      <AltHeader />
      <main>
        <Sidebar />
        {children}
      </main>
      <Footer />
    </body>
  );
}
