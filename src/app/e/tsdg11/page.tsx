"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function CSRCompanyListPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>T-SDG 11</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="about_stsp_photo_container">
              <Image
                src={"/images/e/tsdg11/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
          </div>
        </div>
        <div className="page_sidemenu">
          <SideMenu />
        </div>
      </div>
    );
  }

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>T-SDG 11</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="about_stsp_photo_container">
            <Image
              src={"/images/e/tsdg11/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
