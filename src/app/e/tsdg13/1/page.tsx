"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSGD131() {
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
            <strong>
              Intelligent disaster prevention response system to improve the
              resilience of the park area
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.Response systems in the park area</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;STSPB implements various emergency
                response systems and plans as well as the intelligent management
                of the park to stabilize the energy materials and respond to
                possible risks of disasters for sustainable development.
              </p>
            </div>
            <div className="page_description">
              <h4>Utilities Response System</h4>
              <p>
                The establishment of the emergency notification mechanism of the
                Utilities Response System can effectively improve the
                communication efficiency of abnormal water supply and power
                supply, enabling the STSPB to grasp the loss situation of the
                manufacturers in the shortest time possible and the park
                manufacturers to understand the cause of the abnormal water and
                electricity supply, facilitating the follow-up contingency
                treatment. Since the establishment of the Line Group for Water,
                Power and Gas Supply Committee in 2017, manufacturers can be
                notified immediately of the abnormalities through instant
                messaging so as to notify the repair unit to handle the
                situation and grasp the repair and restoration status, improving
                the efficiency of water and electricity emergency response.
              </p>
            </div>
            <div className="page_description">
              <h4>Disaster Response System</h4>
              <p>
                To achieve the purpose of immediate notification, rescue
                (treatment) and aftermath handling, the existing disaster
                prevention and response resources in the public and private
                sectors in the science park are integrated to plan a simple,
                feasible, unified and highly efficient disaster prevention and
                relief system. The “Implementation Plan for the Construction of
                a Joint Prevention and Response System at STSP” is formulated to
                promote the disaster prevention and relief system in the science
                park and establish a joint prevention and response organization
                and radio system. In addition, various technologies and
                experiences at home and abroad are also referred to for the
                development of Emergency Response Support System that is
                incorporated with mobile devices, seismograph monitoring
                signals, flood control monitoring system and geographic
                information system. Main information of the villages within 3 km
                outside the science park is also included so that if the scope
                of disaster is likely to affect the surrounding residents,
                village information can be learned through diffusion simulation
                and the graphical interface so that immediate notification can
                be made to the liaison office of the village chief to ensure
                that disaster prevention and response procedure can be completed
                immediately.
              </p>
            </div>
            <div className="page_description">
              <h4>Flood Prevention and Response System</h4>
              <p>
                To ensure smooth water drainage within and around Tainan and
                Kaohsiung Science Parks and to reduce possible floods and
                disasters as early as possible during flood season, personnel
                would be assigned for 24-hour monitoring. During the flood
                season between May 1 and Nov. 30 every year, when the Central
                Weather Bureau issues a land warning or torrential rain in the
                area where the science park is located, the flood prevention
                team is immediately established. There are three levels of
                alert, and resident personnel at all levels (maintenance
                manufacturers, flood control team members, deputy
                director-general) are required to be stationed for 24-hour
                monitoring in shifts within an hour after receiving
                notification.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>
                Earthquake Early Warning and Smart Disaster Prevention System
              </h4>
              <p>
                To improve and integrate the park’s disaster relief response
                capabilities to meet the needs of smart disaster prevention and
                relief, the Earthquake Early Warning and Smart Disaster
                Prevention System was established in 2017, combining various
                systems in the smart science park (chemical registration system,
                environmental monitoring information system, traffic control
                center database, smart building group database, portable
                disaster relief equipment, and flood prevention system), coupled
                with the risk assessment and disaster simulation calculations,
                the 3D visual disaster prevention and relief command system
                based on GIS (Geographic Information System) is established to
                rapidly provide integrated intelligence for the commander to
                make decisions. A total of 283 manufacturers and 10,773 chemical
                records have been registered in the Earthquake Early Warning and
                Smart Disaster Prevention System, and 2 domestic Utility Patents
                and 3 Invention Patents were obtained.
              </p>
              <p>
                A total of 10 sessions were held in 2022. It is hoped that park
                business units can join the operation of the system to reduce
                the occurrence of occupational disasters.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>2.Emergency response drills</h4>
              <p>
                There are diverse types of industries in STSP, and if not
                careful, accidents and emergencise like occupational disasters,
                earthquakes, fires, natural disasters and others are likely to
                cause major property losses and casualties. Therefore, various
                firefighting training should be organized continuously and
                should also be well-planned. We organize firefighting training
                with Industrial Safety and Environmental Protection Month
                activities to help park manufacturers strengthen the awareness
                and training of fire safety so that their employees can be
                familiar with fire disaster relief and equipped with emergency
                preparedness capabilities. Finally, we will continue to improve
                the overall firefighting capabilities in the science park
                through public emergency response drills.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/1/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>

            <div className="photo_container">
              <Image
                src={"/images/e/tsdg13/1/en/photo5.png"}
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
          <strong>
            協助推動廠商研發創新，扶植新創團隊，積蓄園區技術創新動能
          </strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg13/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.園區應變體系</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局透過各項應變體系計畫及園區智慧化管理之實施，以穩定園區能資源及因應災害發生可能之風險，落實永續發展。
            </p>
          </div>
          <div className="page_description">
            <h4>水電應變體系</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;水電應變體系之緊急聯絡通報機制建立，可有效提升供水供電異常之聯絡效率，透過該機制，除可使南科管理局於最短時間內掌握廠商損失情形，並可使園區廠商迅速了解水電供應異常之原因，俾利後續之應變處理。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科自2017年起，以通訊軟體建立「水電氣委員會群組」，透過即時通訊方式，可立即獲知廠商異常訊息，通知修復單位前往處置，及掌握修復或復歸狀態，提高水電應變處理效率。
            </p>
          </div>
          <div className="page_description">
            <h4>災害應變體系</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為達到重大災害立即通報、搶救（處理）與善後等目的，特整合園區官方與民間既有之防災應變資源，規劃建構南科簡單可行、一元化及高效能之災害防救體系，訂定「建構臺南科學工業園區聯防應變體系實施計畫」，著手推動園區災害防救體系，成立聯防應變組織與建構無線電系統，並參考國內外各種技術與經驗，開發了可整合行動裝置、地震儀監控訊號、防洪監控系統、地理資訊系統的「緊急應變決策支援專家系統」。若災害範圍擴大有影響周邊居民之虞，亦可透過擴散模擬及圖形介面得知村里資訊，立即通知相關村里長聯絡處，確保於第一時間完成防災應變處理程序。
            </p>
          </div>
          <div className="page_description">
            <h4>防汛應變體系</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為確保臺南及高雄園區內及週邊之雨水排放通暢，儘早因應以降低洪汛期間可能之水患及災害，平時設置24小時都有人員輪值監控。於每年5月1日起至11月30日之洪汛實施期間，當中央氣象局發布陸上颱風警報或園區所在地豪雨特報，立即成立防汛小組，分三級警戒，並要求各級輪值之進駐人員(維護廠商、防汛組員、副局長)，各員需於接獲通知後一小時內進駐且24小時輪值監控。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>地震預警暨智慧防救災系統</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為提升並整合園區災救應變能力達到智慧防救災需求，2017年建置南科園區「地震預警暨智慧防救災系統」，結合智慧園區各系統(化學品登錄系統，環境監測資訊系統、交控中心系統資料庫、智慧樓群資料庫、可攜式救災設備、防汛系統等)，並依據風險評估及災害模擬演算，建置以地理資訊系統為基礎之三維視覺擬真防救災指揮系統，災害時可快速整合情資並提供決策建議予應變指揮官，迅速提供有效情資及決策建議。「地震預警暨智慧防救災系統」已登錄園區283家廠商，10,773筆化學品資料，獲得國內2項新型專利，3項發明專利。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;同時，南科管理局辦理智慧防救災系統之相關教育訓練，2022年共辦理10場次，希望園區事業單位一同加入系統之運作，以減低職業災害的發生。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/1/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>地震預警暨智慧防救災系統</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為提升並整合園區災救應變能力達到智慧防救災需求，2017年建置南科園區「地震預警暨智慧防救災系統」，結合智慧園區各系統(化學品登錄系統，環境監測資訊系統、交控中心系統資料庫、智慧樓群資料庫、可攜式救災設備、防汛系統等)，並依據風險評估及災害模擬演算，建置以地理資訊系統為基礎之三維視覺擬真防救災指揮系統，災害時可快速整合情資並提供決策建議予應變指揮官，迅速提供有效情資及決策建議。「地震預警暨智慧防救災系統」已登錄園區283家廠商，10,773筆化學品資料，獲得國內2項新型專利，3項發明專利。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;同時，南科管理局辦理智慧防救災系統之相關教育訓練，2022年共辦理10場次，希望園區事業單位一同加入系統之運作，以減低職業災害的發生。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/1/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.緊急應變演練</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;由於南科園區內進駐產業型態多元，面對職業災害、地震、火災、天然災害及其他類型災害等緊急事件若有不慎極易發生重大財產損失及人命傷害等事件，因此持續的、有計畫性的辦理各種消防訓練，並配合工安環保月活動舉辦，協助園區廠商強化消防安全意識與訓練，讓廠商員工熟悉消防救災與緊急應變能力，最後再透過公開的應變演練來不斷完善園區整體的消防應變能力。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg13/1/zh/photo5.png"}
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
