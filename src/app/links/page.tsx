"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import LinkIcon from "@mui/icons-material/Link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function Links() {
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
          <strong>好站相連</strong>
          <Breadcrumb />
        </div>
        <div className="links_container">
          {[
            {
              title: "南科環安網",
              path: "https://stspesh.tw/",
            },

            {
              title: "GRI企業永續發展協會",
              path: "https://www.globalreporting.org/",
            },
            {
              title: "財團法人台灣永續能源研究基金會",
              path: "https://taise.org.tw/",
            },
            {
              title: "聯合國永續發展目標SDGs",
              path: "https://www.un.org/sustainabledevelopment/",
            },
            {
              title: "臺灣永續發展目標",
              path: "https://nsdn.epa.gov.tw/about/aims",
            },
            {
              title: "ESG(環境、社會、公司治理)",
              path: "https://www.sustainalytics.com/",
            },
            {
              title: "氣候變遷相關財務揭露TCFD",
              path: "https://www.fsb-tcfd.org/",
            },
            {
              title: "可持續發展會計準則委員會SASB",
              path: "https://www.sasb.org/",
            },
            {
              title: "職業安全衛生法",
              path: "https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=N0060001",
            },
            {
              title: "臺南市政府勞工局",
              path: "https://web.tainan.gov.tw/labor/Default.aspx",
            },
          ].map((i) => (
            <Link
              key={i.title}
              href={i.path}
              target="blank_"
              className="links_container_item">
              <LinkIcon />
              {i.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
