"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import Link from "next/link";
import Image from "next/image";

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
          title: "小遊戲(維護中)",
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
          title: "Game(under maintenance)",
          path: "/",
        },
        {
          title: "Good Links",
          path: "/links",
        },
      ],
    },
  ];

  if (lang === "en") {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>Report Download</strong>
            <Breadcrumb />
          </div>
          <div className="download_section">
            {[
              {
                name: "2022",
                image: "2022.png",
                reader_link: "",
                pdf_link:
                  "https://drive.google.com/file/d/1w-uWimfXF337lU_LOeB5VfnIG0k771Ft/view?usp=drive_link",
                video_link: "",
              },
              {
                name: "2021",
                image: "2021.png",
                reader_link: "",
                pdf_link:
                  "https://drive.google.com/file/d/1w-uWimfXF337lU_LOeB5VfnIG0k771Ft/view?usp=drive_link",
                video_link: "",
              },
              {
                name: "2020",
                image: "2020.png",
                reader_link: "",
                pdf_link:
                  "https://drive.google.com/file/d/1sPdrgDrwSL8roM--UjmANdfU4-hfj9Yv/view?usp=drive_link",
                video_link: "",
              },
              {
                name: "2019",
                image: "2019.png",
                reader_link: "",
                pdf_link:
                  "https://drive.google.com/file/d/13XdRKO8V_Uu4njfsoUv944rO8Ax0xnDI/view?usp=drive_link",
                video_link: "",
              },
            ].map((i) => (
              <div className="download_section_item" key={i.name}>
                <div className="download_section_item_image_container">
                  <Image
                    src={`/images/report_download/en/${i.image}`}
                    fill={true}
                    alt={`${i.name} cover photo`}
                  />
                </div>
                <div>
                  <h3>{i.name} STSP Corporate Sustainability Report</h3>
                </div>
                <div className="download_section_item_button_container">
                  {i.reader_link && (
                    <Link href={i.reader_link} target="_blank">
                      <div style={{ color: "#32b4c2" }}>
                        <TabletAndroidIcon />
                        <p>線上閱讀</p>
                      </div>
                    </Link>
                  )}
                  {i.pdf_link && (
                    <Link href={i.pdf_link} target="_blank">
                      <div style={{ color: "#cf4038" }}>
                        <PictureAsPdfIcon />
                        <p>PDF</p>
                      </div>
                    </Link>
                  )}
                  {i.video_link && (
                    <Link href={i.video_link} target="_blank">
                      <div style={{ color: "#0f8441" }}>
                        <SmartDisplayIcon />
                        <p>播放檔</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="page_sidemenu">
          <SideMenu menu={menu_zh} />
        </div>
      </div>
    );
  }

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>報告書下載</strong>
          <Breadcrumb />
        </div>
        <div className="download_section">
          {[
            {
              name: "2022",
              image: "2022.png",
              reader_link: "",
              pdf_link:
                "https://drive.google.com/file/d/1gp2KOXNAk6y-Fn86HiiKcwhqXNxSyQyn/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2021",
              image: "2021.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/16a0SQztj0UnyYzjuBPRmUtSBMifACBA7/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2020",
              image: "2020.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1af4smJXDLvLRJIboKl8zgxGM6OheuuY9/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2019",
              image: "2019.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1yZeLFN4iwei2h64vj0OVWO_fnyYotntC/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2018",
              image: "2018.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1XOIcn06z0WUcyIyiwBB9keq2dOzBldaX/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2017",
              image: "2017.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1Opjkz2QgQZ-YWwQZ-o5C6CldgYrUksVZ/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2016",
              image: "2016.png",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1rQiC-iwrl0R9LqVnRJlOf6Fn_Kr7k0Xc/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2015",
              image: "2015.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/18Wft_iXY1iV4NrSCKzMk_agLrJhXinsT/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2014",
              image: "2014.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1z-OOuqGFy7wZrMGZr675b7Ai4Jwt_0dj/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "2013",
              image: "2013.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1p2VRAke2pHPZZc_kybfmes4c0XGQjjsr/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "101",
              image: "101.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/12LQblrPZc8l37NOg1vJH7pWqNVvqfl-R/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "100",
              image: "100.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1wRkldmcNulO3QMYHh8GOyzhaAzUc0ngX/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "99",
              image: "99.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/1tOpfYg1vAnJ9h8StnbEOMJ4lcpvcFi3a/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "98",
              image: "98.jpg",
              reader_link: "xxx",
              pdf_link:
                "https://drive.google.com/file/d/17tlE9hnUEaDs6wYEuA_rKOaiKzVI5kF_/view?usp=drive_link",
              video_link: "xxx",
            },
            {
              name: "97",
              image: "97.jpg",
              reader_link: "",
              pdf_link:
                "https://drive.google.com/file/d/1dXRbXVEfSZPYutmXLVsyo_k-zoZ6P6Vb/view?usp=drive_link",
              video_link: "",
            },
          ].map((i) => (
            <div className="download_section_item" key={i.name}>
              <div className="download_section_item_image_container">
                <Image
                  src={`/images/report_download/zh/${i.image}`}
                  fill={true}
                  alt={`${i.name} cover photo`}
                />
              </div>
              <div>
                <h3>{i.name}年科技部南部科學園區管理局永續報告書</h3>
              </div>
              <div className="download_section_item_button_container">
                {i.reader_link && (
                  <Link href={i.reader_link} target="_blank">
                    <div style={{ color: "#32b4c2" }}>
                      <TabletAndroidIcon />
                      <p>線上閱讀</p>
                    </div>
                  </Link>
                )}
                {i.pdf_link && (
                  <Link href={i.pdf_link} target="_blank">
                    <div style={{ color: "#cf4038" }}>
                      <PictureAsPdfIcon />
                      <p>PDF</p>
                    </div>
                  </Link>
                )}
                {i.video_link && (
                  <Link href={i.video_link} target="_blank">
                    <div style={{ color: "#0f8441" }}>
                      <SmartDisplayIcon />
                      <p>播放檔</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
