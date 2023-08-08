"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSGD132() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title:
        "A Sustainable Environment for Industry, Living, Life, and Ecology",
      path: "/e",
      sub: [
        {
          title: "T-SDG11",
          path: "/e/tsdg11",
          sub: [
            {
              title:
                "Construction of a stable and convenient transportation system",
              path: "/e/tsdg11/1",
            },
            {
              title:
                "Complete the park functions to create a LOHAS art and culture in STSP",
              path: "/e/tsdg11/2",
            },
            {
              title:
                "Low-carbon ecological communities and buildings for environmental symbiosis and mutual benefit",
              path: "/e/tsdg11/3",
            },
            {
              title: "Spreading awareness of ecological protection",
              path: "/e/tsdg11/4",
            },
          ],
        },
        {
          title: "T-SDG13",
          path: "/e/tsdg13",
          sub: [
            {
              title:
                "Intelligent disaster prevention response system to improve the resilience of the park area",
              path: "/e/tsdg13/1",
            },
            {
              title: " GHG Management",
              path: "/e/tsdg13/2",
            },
          ],
        },
      ],
    },
  ];

  const menu_zh = [
    {
      title: "營造友善環境，重視四生價值",
      path: "/e",
      sub: [
        {
          title: "T-SDG11",
          path: "/e/tsdg11",
          sub: [
            {
              title: "建構穩定且便捷的交通系統",
              path: "/e/tsdg11/1",
            },
            {
              title: "健全園區機能，樂活藝文南科",
              path: "/e/tsdg11/2",
            },
            {
              title: "低碳生態社區，建築與環境共生共利",
              path: "/e/tsdg11/3",
            },
            {
              title: "生態保護意識擴散",
              path: "/e/tsdg11/4",
            },
          ],
        },
        {
          title: "T-SDG13",
          path: "/e/tsdg13",
          sub: [
            {
              title: "智慧防災應變體系，提高園區韌性",
              path: "/e/tsdg13/1",
            },
            {
              title: "溫室氣體管理",
              path: "/e/tsdg13/2",
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
            <strong>GHG Management</strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/2/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.Greenhouse Gas Inventory</h4>
              <p>
                STSPB continues to conduct annual GHG inventory, and the
                organizational boundaries of the inventory include Tainan
                Science Park and Kaohsiung Science Park. The expansion of the
                factories of business units continues while the park is in
                operation. To grasp the GHG emissions in the science park, the
                2021 GHG inventory was conducted in 2022, and the total
                emissions of Scop 1+2 in 2021 amounted to8,511,072.78 tonCO2e,
                and the GHG emission intensity dropped by 15.42% compared with
                2020. Scope 3 was also included, with the emission of
                1,179,472.24 tonCO2e. STSPB actively conducted energy
                conservation counseling and measures while the park
                manufacturers also take carbon reduction actions in an attempt
                to reduce the environmental burden.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/2/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>
                2.Counseling of Energy Conservation for Park Manufacturers
              </h4>
              <p>
                We handled energy conservation counseling for 6 park business
                units in 2022 and have completed counseling for 68 park business
                units so far since the implementation of the counseling service.
                In terms of the actual results of the energy conservation
                measures, the total power saved was approximately 10,536.1
                million kWh annually, equivalent to the reduction of 53,628.7
                tons of carbon dioxide emissions in a year.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/2/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3. Briefing Session Related to Environmental Protection</h4>
              <p>
                For the park manufacturers to understand the development trend
                of national environmental protection control direction and
                environmental regulation management systems, 2 sessions of
                environmental related seminars, briefings or observation
                sessions were held based on the characteristics of the park or
                the needs of the manufacturers. The content of the meeting
                included filling in the application form for the permit,
                explanation of environmental laws & regulations and
                environmental issues, and observation of manufacturers with
                excellent environmental performance. STSPB hopes to improve the
                park manufacturers’ familiarity of the regulations and grasp the
                trend of changes in the regulation before enforcement for early
                response. In addition, after the enforcement of the regulations,
                the manufacturers can have clear understanding of the content of
                the regulation for compliance.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/2/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>
                Stepping toward Net Zero Emissions, the collective effort among
                the industry, government, academia, and STSP
              </h4>
              <p>
                To respond to the climate change and the trend of net zero
                emissions, it has become an important issue for STSP to maintain
                the existing development of the science park, actively promote
                new construction and expansion of the science park while taking
                environmental sustainability into account. To this end, STSPB
                held a symposium on November 5 and specially invited EPA
                Minister Tzi-Chin Chang and relevant representatives from the
                industry, government, and academia to the symposium to give
                guidance.{" "}
              </p>
              <p>
                During the symposium, Minister Chang gave a keynote speech on
                the country’s strategies and practices in response to climate
                change. STSPB put forward relevant plans for carbon reduction
                and resource recycling in the park. On the other hand,
                representatives of park industries also raised issues of concern
                in the industry from the perspectives of enterprises, such as
                policy promotion, carbon rights, renewable energy, negative
                emission technologies, etc. Through the symposium, the
                industries can understand the goals and strategies for promoting
                net zero transition domestically in the future and the
                government departments can also refer to the views and pragmatic
                suggestions of enterprises when planning carbon reduction
                strategies and practical plans to jointly move toward the goal
                of net zero emissions by 2050.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/2/en/photo5.png"}
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
          <strong>溫室氣體管理</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg13/2/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.溫室氣體盤查</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局持續每年進行溫室氣體盤查，盤查組織邊界分別為臺南園區及高雄園區。園區營運的同時，持續有事業單位進行擴廠，為掌握園區溫室氣體排放，於2022年進行2021年之盤查，2021年範疇1+2排放量總計為8,511,072.78公噸CO2e，溫室氣體排放強度較2020年下降15.42%；並納入範疇3部分項目，範疇3排放量為1,179,472.24公噸CO2e。南科管理局積極展開節能輔導措施，同時園區廠商亦進行減碳相關作為，期望能夠減輕環境負擔。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/2/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.廠商節能輔導</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年辦理6家園區事業單位節能輔導，輔導推動至今已完成68家，依2022年實際節能成果調查，累計節電成效約為10,536.1萬度，相當於一年減少53,628.70公噸CO2e。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/2/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.環保相關說明會</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為使園區廠商瞭解國家環保管制方向發展趨勢及環保法規管理制度，依照園區特性及廠商需求舉辦2場次環保相關之研習會、說明會或觀摩會。會議內容包括許可申請表格填寫講習、環保法規說明、環保關注議題說明、環保績優廠商觀摩等。南科管理局期望藉此提升園區廠商法規熟悉度，於法規施行前可掌握法規變化之趨勢，以即早因應；於法規施行後可清楚法規內容，以符合法令規範。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/2/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>邁向淨零排放 產官學南科齊聚</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為因應氣候變遷及淨零碳排趨勢，如何在維持既有園區發展、積極推動新設及擴建園區同時，能夠兼顧環境永續，成為南科當前的重要課題。為此，南科管理局於11月5日舉辦座談會，特邀行政院環保署署長張子敬及相關產官學界代表蒞臨指導。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;會中張署長就我國因應氣候變遷的策略與作法進行專題演講，南科管理局則提出園區減碳及資源循環的相關規劃，園區產業代表則從企業的角度提出業界關切議題，如政策推動、碳權、再生能源、負碳技術等。透過座談會，除了讓產業界瞭解未來國內淨零轉型推動目標及策略作法外，政府部門在規劃減碳策略與方案時，亦可參考企業之觀點與實務建議，共同朝向2050淨零碳排的目標前進。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/2/zh/photo5.png"}
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
