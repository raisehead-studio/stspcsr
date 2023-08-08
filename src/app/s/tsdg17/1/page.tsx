"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG171() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title: "Stabilizing STSP Resources for Sustainable Operations",
      path: "/s",
      sub: [
        {
          title: "T-SDG1",
          path: "/s/tsdg1",
          sub: [
            {
              title:
                "Assist manufacturers with R&D and innovation, foster startup teams, and accumulate the momentum for technical innovation in the park",
              path: "/s/tsdg1/1",
            },
            {
              title:
                "Expansion of the Park Area, Driving Urban Transformation, and Promoting Local Employment",
              path: "/s/tsdg1/2",
            },
          ],
        },
        {
          title: "T-SDG 4、8",
          path: "/s/tsdg4&8",
          sub: [
            {
              title:
                "Key cultivation to reduce the gap between the industry and the academia",
              path: "/s/tsdg4&8/1",
            },
            {
              title:
                "Promote Technological Upgrading and Expand Industrial Clusters",
              path: "/s/tsdg4&8/2",
            },
            {
              title:
                "Construction of a Safe and Friendly Workplace Environment",
              path: "/s/tsdg4&8/3",
            },
          ],
        },
        {
          title: "T-SDG17",
          path: "/s/tsdg17",
          sub: [
            {
              title: "Implementation content and promotion results",
              path: "/s/tsdg17/1",
            },
            {
              title: "Joint Participation in International Exhibitions",
              path: "/s/tsdg17/2",
            },
          ],
        },
      ],
    },
  ];

  const menu_zh = [
    {
      title: "開創園區動能，壯大產業聚落",
      path: "/s",
      sub: [
        {
          title: "T-SDG1",
          path: "/s/tsdg1",
          sub: [
            {
              title: "協助推動廠商研發創新，扶植新創團隊，積蓄園區技術創新動能",
              path: "/s/tsdg1/1",
            },
            {
              title: "擴大園區領域，帶動城市轉型，促進地方就業",
              path: "/s/tsdg1/2",
            },
          ],
        },
        {
          title: "T-SDG 4、8",
          path: "/s/tsdg4&8",
          sub: [
            {
              title: "關鍵培育，降低產學落差",
              path: "/s/tsdg4&8/1",
            },
            {
              title: "推動技術升級，壯大產業聚落",
              path: "/s/tsdg4&8/2",
            },
            {
              title: "建構安全且友善的職場環境",
              path: "/s/tsdg4&8/3",
            },
          ],
        },
        {
          title: "T-SDG17",
          path: "/s/tsdg17",
          sub: [
            {
              title: "國內外交流與產業連結",
              path: "/s/tsdg17/1",
            },
            {
              title: "攜手參與國際大展",
              path: "/s/tsdg17/2",
            },
          ],
        },
      ],
    },
  ];

  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>Implementation content and promotion results</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="page_description">
              <p>
                As the condition of COVID-19 epidemic eased, STSPB faced a peak
                of visitors at the end of 2022. The semiconductor and
                biomedicine industries in the park continued to show strong
                development momentum, attracting many visiting groups to STSP
                for exchange. According to statistics, a total of 48 groups with
                951 visitors visited STSP in 2022 alone, an increase of 30%
                compared with the previous year. This also demonstrated the
                importance and influence of STSP in the industry. STSPB will
                continue to strengthen cooperation and exchanges with all
                parties to promote the innovative development and upgrading of
                the park.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg17/1/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg17/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg17/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
          </div>
        </div>
        <div className="page_sidemenu">
          <SideMenu menu={menu_en} />
        </div>
      </div>
    );
  }

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>國內外交流與產業連結</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;隨著疫情趨緩，南科管理局在2022年底迎來了一波訪客高峰。園區內的半導體及生醫等產業持續展現強勁的發展動能，吸引了來自國內外多個訪團前來參訪交流。據統計，全年共有48團、951人次的訪客到訪南科，較前一年增加了三成，顯示出南科在產業界的重要地位和影響力。南科管理局將繼續加強與各方的合作交流，推動園區的創新發展和升級。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg17/1/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/s/tsdg17/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
