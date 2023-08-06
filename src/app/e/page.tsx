"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "../layout.scss";
import "./styles.scss";

export default function CSRCompanyListPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>
              E: A Sustainable Environment for Industry, Living, Life, and
              Ecology
            </strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="photo_container">
              <Image
                src={"/images/e/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/en/photo2.png"}
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
          <strong>E 營造友善環境，重視四生價值</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="photo_container">
            <Image
              src={"/images/e/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/zh/photo2.png"}
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
