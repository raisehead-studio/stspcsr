"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";

export default function TSGD4and8() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>T-SDG 4、8</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/en/photo1.png"}
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
          <strong>T-SDG 4、8</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/zh/photo1.png"}
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
