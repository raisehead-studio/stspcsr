"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG111() {
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
              Construction of a stable and convenient transportation system
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. STSP E-shuttle bus</h4>
              <p>
                In addition to providing different lines of shuttle buses for
                commuting passengers and those taking to and from trips between
                TRA Nanke Station or HSR Tainan Station.
              </p>
              <p>
                To better meet the users’ demand, the STSP Shuttle Bus Green
                line (HSR Line) even combines the Demand Responsive
                Tranportation System (DRTS) to receive reservation one hour
                before departure and picks up passengers at the shuttle bus
                stops in all plants in addition to the fixed bus schedules and
                station rides.It is recommended to download the APP, Science
                Park Action Wizard 2.0, and click on STSP for the real-time
                information of the STSP shuttle bus and other related riding
                information.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://play.google.com/store/apps/details?id=tw.gov.nsc.mobileApp.NSCApp_ns&pli=1">
                Science Park Action Wizard 2.0 Android
              </Link>
              <p>&nbsp;, </p>
              <Link href="https://apps.apple.com/tw/app/%E7%A7%91%E5%AD%B8%E5%9C%92%E5%8D%80%E8%A1%8C%E5%8B%95%E7%B2%BE%E9%9D%88-2-0/id829425910">
                Science Park Action Wizard 2.0 ios
              </Link>
              <p>&nbsp;,</p>
              <Link href="https://notofficialtainancitybus.weebly.com/stsp_green_line.html">
                Timetable of STSP Shuttle Bus
              </Link>
            </div>
            <div className="page_description">
              <p>
                To respond to the large number of employees for the development
                in the northwest side, the frequency of the existing timetable
                of the North Park Line (Purple Line) can no longer meet the
                needs of the public. To effectively improve this problem, the
                North-West Line and the North Park Line have been merged into
                the North Line (Orange Line). To meet the demands of the
                original North-West Line passengers, an additional Innolux P5
                Stop has been added and the route of the original North-West
                Line is given priority to detour, so that the passengers of the
                original line will not be influenced.
              </p>
              <p>
                The North Line has 19 runs around the park area every day,
                meeting the needs in the northwest side and also bringing
                convenience for the general public.
              </p>
              <p>
                In 2022, the average daily number of passengers was about 1,097,
                the daily milage of diesel vehicles was about 576.5 km/day, and
                that of the e-shuttle bus was about 740.6 km (the e-bus can
                averagely reduce the diesel consumption by about 185.16 liters
                every day (the milage of e-bus/1 liter of gasoline can run 4km),
                reducing approximately 482.53 kgCO2e. The overall carbon
                reduction was 761.19 tonnes.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>2. STSP Cloud Traffic Control Center</h4>
              <p>
                STSP has established the Cloud Traffic Control Center, and the
                AI dynamic signs installation and operation have been completed.
                Through the intersection image recognition camera, the real-time
                traffic flow is collected, the travel time of the GVP road
                sections can be collected to grasp the real-time traffic
                condition. The multiple data are used as the basis for
                decision-making, real-time download of the time-based plans that
                meet the characteristics of the real-time traffic conditions to
                enable the relief efficiency of main roads in the park area.
                According to the analysis results, the average travel time can
                be reduced by 7% where the dynamic signs are installed, which is
                equivalent to saving about 42,270 liters of fuel consumption
                every year after conversion, reducing the carbon emission by
                95.66 tonnes/year (equivalent to planting 9,566 trees). In
                addition, the traffic characteristics investigation and timing
                system adjustments were carried out for the main roads, and the
                travel speed of the whole line increased by 1.9%-12.9%. The fuel
                consumption saved was approximately 24,437 liters/year, reducing
                carbon emission by 55.30 tonnes (equivalent to planting 5,530
                trees).
              </p>
              <p>
                The Cloud Traffic Control Center also strengthened the APP of
                Science Park Action Wizard 2.0, enabling the release real-time
                information and push notification of accidents or incidents
                observed, effectively releasing information as early as possible
                for road users to divert their routes. According to 2022
                statistics, there were 17 accident information released by the
                center, and the time saved by diverting traffic to reduce
                traffic congestion reached 4.25 hours (255 minutes).
              </p>
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
          <strong>建構穩定且便捷的交通系統</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg11/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.電能巡迴巴士</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科巡迴巴士各線除供上下班通勤旅客使用，亦提供由臺鐵南科站或高鐵臺南站至南科的商務旅客服務。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科巡巴高鐵線為更貼近使用者需求，結合「需求反應運輸系統(DRTS)」，除了固定班次時間及站位乘車外，亦可於各班次發車前1小時以電話預約欲搭乘時段，建議下載「科學園區行動精靈2.0」APP並點選「南部科學園區」，以隨時掌握南科巡巴即時動態資訊及相關乘車資訊。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://play.google.com/store/apps/details?id=tw.gov.nsc.mobileApp.NSCApp_ns&pli=1">
              科學園區行動精靈2.0 Android
            </Link>
            <p>&nbsp;、</p>
            <Link href="https://apps.apple.com/tw/app/%E7%A7%91%E5%AD%B8%E5%9C%92%E5%8D%80%E8%A1%8C%E5%8B%95%E7%B2%BE%E9%9D%88-2-0/id829425910">
              科學園區行動精靈2.0 ios
            </Link>
            <p>&nbsp;、</p>
            <Link href="https://notofficialtainancitybus.weebly.com/stsp_green_line.html">
              巡巴高鐵線時刻表
            </Link>
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;因應西北區廠商大量人員進駐，大眾運輸接駁需求也日益增加，既有「北園線」班次時刻已無法滿足民眾搭乘需求，為解決該問題，「北環西線」及「北園線」路線整併為「北環線」，並維持原「北環西線」搭乘需求，新增「群創五廠」站點及以「北環西線」路線優先繞駛，原搭乘「北環西線」路線之乘客將不受影響。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;「北環線」經整併「北園線」及「北環西線」班次後，每日共19班次繞駛園區，整併後之班次時刻除可滿足西北區廠商搭乘需求外，亦能提升民眾搭乘之便利性！
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年合計平均每日搭乘人數約為1,097人次，柴油車平均每日行駛里程數約576.5公里、電動車平均每日行駛里程數約740.6公里(電動車平均每日可減少柴油使用量約185.16公升(電動車行駛里程/每公升汽油可跑4公里)、約減少482.53公斤CO2e排放量)；整體減碳量為761.19公噸CO2e。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/1/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.雲端交控中心</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科園區建置園區雲端交控中心，本期完成AI動態號誌建置及運作，透過路口影像辨識攝影機蒐集即時車流量，並蒐集GVP路段旅行時間掌握即時路況，以多元資料做為決策依據，即時下傳符合現場交通特性之時制計畫，使園區主要道路增加紓解效率，有效節省民眾進離園區之旅行時間，依據分析結果顯示，車流行駛於動態號誌路段平均可減少7%之旅行時間，換算油耗等於節省約莫42,270公升之油耗/年，相當於減少了95.66公噸之碳排放量/年(等同種植9,566棵樹)；另針對園區主要進出路口進行交通特性調查及定時時制調整，調整後全線旅行速率較事前提升1.9%~12.9%，換算油耗等於節省約莫24,437公升之油耗/年，相當於減少了55.30公噸之碳排放量/年(等同種植5,530棵樹)。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;交控中心另針對APP科學園區行動精靈2.0推播系統進行強化，可將觀察到的事故或其他交通事件即時發佈至APP推播訊息，有效將事件訊息提早發佈給民眾改道通行。依2022年之統計，經由本中心發布之園區內事故資訊計有17件，因改道通行減少壅塞所節省時間達4.25小時(255分鐘)。
            </p>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
