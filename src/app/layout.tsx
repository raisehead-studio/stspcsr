"use client";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "./layout.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
