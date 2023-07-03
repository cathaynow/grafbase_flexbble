import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
        </main>
        {children}
        <Footer />
      </body>
    </html>
  );
}
