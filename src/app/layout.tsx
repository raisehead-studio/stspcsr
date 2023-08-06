"use client";
import Image from "next/image";
import Link from "next/link";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
