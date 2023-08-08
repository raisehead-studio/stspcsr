"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import "../layout.scss";
import "./styles.scss";

export default function MessageDirectorPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title: "Message from the Director-General",
      path: "/message_director",
    },
    {
      title: "Introduction to STSP",
      path: "/about_stsp",
    },
    {
      title: "Vision and Roadmap",
      path: "/vision_and_blueprint",
    },
    {
      title: "Communication with Stakeholders",
      path: "/stakeholder_communication",
    },
    {
      title: "2022 Sustainability Management Performance",
      path: "/performance",
    },
  ];

  const menu_zh = [
    {
      title: "局長的話",
      path: "/message_director",
    },
    {
      title: "南科管理局簡介",
      path: "/about_stsp",
    },
    {
      title: "願景與藍圖",
      path: "/vision_and_blueprint",
    },
    {
      title: "利害關係人溝通",
      path: "/stakeholder_communication",
    },
    {
      title: "2022永續管理績效",
      path: "/performance",
    },
  ];

  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>Message from the Director-General</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="page_description">
              <p>
                In 2022, Southern Taiwan Science Park Bureau (STSP) once again
                demonstrated its strength and resilience that impressed all.
                Boosted by the strong performance of the semiconductor industry,
                the turnover reached NTD 1483.374 billion, with an increase of
                35.48%, and the number of employees was 92,601, an increase of
                8,551 compared with 2021. The semiconductor cluster in Southern
                Taiwan continues to grow and thrive, and the major international
                manufacturers keep increasing their investment. A complete
                advanced semiconductor cluster has been constructed, which plays
                a role of the locomotive of the high-tech industries in Southern
                Taiwan and drives the economic revitalization of the surrounding
                areas.
              </p>
              <p>
                To reserve industrial land and spread the effect of the mature
                industrial cluster of STSP, the Chiayi Science Park and Pingtung
                Science Park Preparatory Projects were approved in January, 2022
                by the Executive Yuan. With Tainan and Kaohsiung as the core,
                Chiayi in the north, and Pingtung in the south, the entire
                cluster assists with the value-adding of the local industries,
                promoting the cross-domain innovation, driving the talent
                circulation and investment attraction, constructing a science
                and technology corridor in Southern Taiwan and strengthening the
                regional economic resilience.
              </p>
              <p>
                STSP is committed to high-standard sustainable actions. In 2022,
                STSP took the lead in introducing reclaimed water into the
                science park. With the first reclaimed water plant of the
                semiconductor industry (TSMC Southern Taiwan Science Park
                Reclaimed Water Plant) and the Anping, Yongkang, and Rende
                Reclaimed Water Plants, expected in 2030, the final daily water
                supply can reach more than 93,000 tons per day, accounting for
                about 30% of the total water use in Tainan Science Park. In the
                future, diverse water sources will continue to be promoted to
                strengthen the stability of water use.
              </p>
              <p>
                In addition to the high-quality workplace and a sustainable
                environment, high-quality life is also needed. In 2022, a
                non-profit preschool was opened in STSP, and there were as many
                as 50 couples in total, the highest number ever, held their
                group wedding at STSP. Gender-friendliness, workplace equality,
                and optimization of the working environment are also actively
                promoted in STSP. Moreover, various arts and cultural events,
                sports events, and other activities are also organized to help
                the employees strike a balance between work and life for their
                physical and mental health.
              </p>
              <p>
                Looking into the future, STSP will continue to introduce
                academic research technologies to enrich the R&D capacity of the
                science park and create a new-generation science park that is
                exquisite, diverse, high-quality, energy-saving and sustainable
                so as to consolidate the competitive advantage of Taiwan’s
                semiconductor industry. We aim at completing the new park
                expansion projects as scheduled with quality to gradually
                implement the 2023 technology vision of “innovation,
                inclusiveness, and sustainability” and the Net Zero Emissions
                Policy by 2050.
              </p>
            </div>
            <div className="message_director_photo_container">
              <div className="director_profile">
                <Image
                  src={"/images/message_director/photo1.jpg"}
                  fill={true}
                  alt="profile photo"
                />
              </div>
              <div className="director_profile">
                <Image
                  src={"/images/message_director/photo2.png"}
                  fill={true}
                  alt="profile photo"
                />
              </div>
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
          <strong>局長的話</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年南科再次展現出傲人的實力與韌性，在半導體產業領航帶動下，營業額達1兆4,833.74億元，成長35.48%，就業人數為92,601人，較2021年底增加8,551人。南臺灣半導體產業聚落持續壯大，國際大廠持續加碼，已建構完整的先進半導體產業聚落。充分扮演了南臺灣高科技產業火車頭，帶動活化周邊經濟。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為儲備產業用地，擴散南科的成熟產業聚落效應，南科嘉義/屏東園區籌設計畫於2022年1月奉行政院核復同意推動，以臺南、高雄為核心，北達嘉義、南至屏東，協助在地產業軟硬加值，推升跨域創新，帶動人才流通及吸引投資，建構南臺灣科技廊帶並強化區域經濟韌性。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科致力於高標永續作為，2022年成為優先導入再生水的科學園區，並有首座科學園區再生水廠(台積電南科再生水廠)，加上永康、安平、仁德再生水廠，預計2030年每日供水可達9.3萬噸以上，約占臺南園區總用水3成，未來持續推廣多元水源，強化用水穩定。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;有優質工作與永續環境，同時也要有高品質生活，2022年南科開辦非營利幼兒園，集團結婚更有創新紀錄的百位佳偶，在南科結成連理。南科亦積極推動性別友善及職場平權、優化勞動環境，並舉辦多項藝文、運動、聯歡等活動，平衡工作與生活，保障同仁的身心健康。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;展望未來，南科將持續導入學研技術厚植園區研發量能、建構精緻多元、優生活、節能永續的新世代園區，鞏固臺灣半導體競爭優勢，如期如質完成各項新增及擴建園區，逐步落實「創新、包容、永續」的2023科技願景與2050淨零政策。
            </p>
          </div>
          <div className="message_director_photo_container">
            <div className="director_profile">
              <Image
                src={"/images/message_director/photo1.jpg"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="director_profile">
              <Image
                src={"/images/message_director/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
