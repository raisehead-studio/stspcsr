"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import "../layout.scss";

export default function G() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>Future Outlook</strong>
            <Breadcrumb />
          </div>
          <div className="page_description">
            <h4>
              Construct a technology corridor in southern Taiwan and create high
              quality net-zero life
            </h4>
            <p>
              Looking into the future, STSP will continue to promote innovative
              industrial development and grasp the world trends of digital
              intelligence, actively introduce academic and research
              technologies, enrich the R&D capacity of the park, and use of the
              spillover effect of the advantages of the mature ICT industry in
              Tainan Science Park to combine the third-phase expansion project
              of Tainan Science Park with the characteristics of local
              industries in Ciaotou, Chiayi Science Parks, and Pingtung Science
              Park for the development of emerging technologies, including
              semiconductors, smart machinery, smart vehicles, smart
              agriculture, precision health, smart agriculture and medicine,
              green materials, space technology and industrial innovation and
              other diversified industries, making the science park a hub for
              digital transition to boost the value adding of green transition,
              completing the technology corridor in southern Taiwan that is
              embedded in the global industrial value chain.
            </p>
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
          <strong>未來展望</strong>
          <Breadcrumb />
        </div>
        <div className="page_description">
          <h4>建構南臺灣科技廊帶，打造永續淨零優生活</h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;展望未來，南科將持續推動產業創新發展並掌握數位智慧化之世界趨勢，積極導入學研技術，厚植園區研發量能，並外溢臺南園區成熟產業ICT優勢，結合臺南三期擴建、橋頭、嘉義及屏東新設園區之在地特色產業發展新興科技，包括半導體、智慧機械、智慧載具、智慧農業、精準健康、智慧農醫、綠色材料、太空科技及產業創新等精緻多元產業，讓園區成為數位轉型的樞紐，帶動南臺灣產業數位轉型綠色加值，完善南臺灣科技廊帶，鑲嵌入全球產業價值鏈。
            南科除提供優質的工作機會，將持續與地方政府強化生活及教育機能，設立實驗中學完善教育機能，啟動全功能住商複合服務，融合在地藝術文化及舉辦敦親睦鄰活動，深化地方文化及民眾教育推廣，共享園區開發成果；另以邁向2050
            淨零永續為目標，高標生態復育、擴增多元水源及引導園區廠商使用再生水，導入節能、儲能、創能新科技，以綠色科技驅動循環經濟，並整合園區交通、永續、治理等智慧服務能量，打造兼具科技與環境永續的「生活、生產、生態、生命」四生一體新世代園區，落實國科會2030「創新、包容、永續」願景。
          </p>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
