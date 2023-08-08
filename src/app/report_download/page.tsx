"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function ReportDownload() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_zh = [
    {
      title: "互動專區",
      sub: [
        {
          title: "影音專區",
          path: "/video",
        },
        {
          title: "報告書下載",
          path: "/report_download",
        },
        {
          title: "小遊戲",
          path: "/",
        },
        {
          title: "好站相連",
          path: "/links",
        },
      ],
    },
  ];

  const menu_en = [
    {
      title: "Interactive",
      sub: [
        {
          title: "Video",
          path: "/video",
        },
        {
          title: "Report Download",
          path: "/report_download",
        },
        {
          title: "Game",
          path: "",
        },
        {
          title: "Good Links",
          path: "/links",
        },
      ],
    },
  ];

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>報告書下載</strong>
          <Breadcrumb />
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
