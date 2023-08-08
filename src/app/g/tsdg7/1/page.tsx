"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import "@/app/layout.scss";

export default function TSDG71() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title:
        "A Sustainable Environment for Industry, Living, Life, and Ecology",
      path: "/g",
      sub: [
        {
          title: "T-SDG6、12",
          path: "/g/tsdg6&12",
          sub: [
            {
              title:
                "Implement environmental reviews and 100% of wastewater and sewage is included in sewage pipeline",
              path: "/g/tsdg6&12/1",
            },
            {
              title:
                "Reduce water intensity in the park and improve stability of water supply",

              path: "/g/tsdg6&12/2",
            },
            {
              title: "Proper Treatment of Waste",
              path: "/g/tsdg6&12/3",
            },
          ],
        },
        {
          title: "T-SDG7",
          path: "/g/tsdg7",
          sub: [
            {
              title:
                "Installation of Renewable Energy Systems to stabilize power supply in the park",
              path: "/g/tsdg7/1",
            },
          ],
        },
      ],
    },
  ];

  const menu_zh = [
    {
      title: "精實優質服務，確保永續營運",
      path: "/g",
      sub: [
        {
          title: "T-SDG6、12",
          path: "/g/tsdg6&12",
          sub: [
            {
              title: "實施環保審查，廢污水100%納管處理",
              path: "/g/tsdg6&12/1",
            },
            {
              title: "降低園區用水強度，提升供水穩定",
              path: "/g/tsdg6&12/2",
            },
            {
              title: "廢棄物妥善處理",
              path: "/g/tsdg6&12/3",
            },
          ],
        },
        {
          title: "T-SDG7",
          path: "/g/tsdg7",
          sub: [
            {
              title: "建置再生能源系統，穩定園區供電",
              path: "/g/tsdg7/1",
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
            <strong>
              Installation of Renewable Energy Systems to stabilize power supply
              in the park
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg7/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. Installation of roof-type renewable energy system</h4>
              <p>
                STSPB has actively installed solar panels in the science park
                (on the roofs of NNKIEH, Administration Building of the Bureau,
                Police Building, STSP Commercial Center, flood control pumping
                station, wastewater treatment plant, Resource Recycling Center,
                and standard factories in the science park). Statistics are in
                the table below. In 2022, the solar panels installed in the
                science park generate 4.29MW of electricity, with the cumulative
                power generation of 63.68 MW, reducing41,404 tonnes of
                CO2e/year. The capacity of renewable power generation and carbon
                reduction increase year by year to achieve the effect of
                environmental protection.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg7/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/g/tsdg7/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>2. Strengthen the power network</h4>
              <p>
                STSPB continues to work closely with Taiwan Power Company.
                Currently, the expansion of the ultra-high voltage substation is
                ongoing to meet the overall power supply needs in the science
                park. In 2022, due to the expansion of factories, the power
                consumption increased, and the annual turnover of the park
                businesses also increased significantly, leading to the 14% drop
                in the power intensity compared with 2021, showing a downward
                trend in several consecutive years.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg7/1/en/photo4.png"}
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
          <strong>建置再生能源系統，穩定園區供電</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/g/tsdg7/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.建置屋頂型再生能源系統</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              本局積極推動園區內設置太陽能板，包含園區內公有建物(南科實中、本局行政大樓、警察大樓、商務會館、防洪抽水站、污水處理廠、資源再生中心、標準廠房等屋頂)、公有設施(園區配水池、西拉雅公園停車場、立體停車場等空間)及園區廠商廠房設置太陽能板，統計資料如下表。2022年園區內設置太陽能板發電量4.29
              MW，累積63.68
              MW，減少41,404公噸CO2e/年，發電量及減碳量逐年增加，以達到環境保護之效果。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg7/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.強化電力網路</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              南科管理局持續與台電密切合作，目前刻正辦理超高壓變電所擴建中，以滿足園區整體供電需求。2022年因園區廠商擴廠，故電力使用量增加，而園區事業年營業額亦大幅成長，能源強度較2021年下降14%，連年下降。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg7/1/zh/photo3.png"}
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
