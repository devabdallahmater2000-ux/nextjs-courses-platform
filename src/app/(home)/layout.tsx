import Navbar2 from "@/component/Navbar2";
import Footer from "@/component/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar2 />
      {children}
      <Footer />
    </div>
  );
}
