"use client";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "./layout.scss";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        {pathname === "/performance" && <div className="stat"></div>}
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
