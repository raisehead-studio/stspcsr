"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG11() {
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
            <strong>
              Promote Technological Upgrading and Expand Industrial Clusters
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/2/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>
                1. Precision Health Industrial Cluster Promotion Project in
                Southern Taiwan
              </h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;There are currently around 90
                manufacturers stationed in the biomedical cluster in STSP, which
                is one of the domestic biomedical clusters for key development.
                During the past decade of development, the biomedical
                manufacturers at STSP have been successively assisted to pass
                the verification of Taiwan Food and Drug Administration (TFDA)
                and Medical Device Quality Management System (QMS), and also
                obtained the FDA and CE certification. In order to support
                manufacturers to continue to take root locally and grow
                steadily, and to lead the medical material cluster to step
                toward the international stage, it is imperative to assist
                manufacturers to break through the marketing difficulties.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/2/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;The Precision Health Industry Cluster
                creates more than NTD10 billion in the output value every year
                (the turnover in 2021 was NTD 13.4 billion and 12.7 billion in
                2022). To promote the cluster development, STSPB continues to
                promote MIT medical materials through the Precision Health
                Industrial Cluster Promotion Service Platform in Southern
                Taiwan, and has established 12 experimental diagnosis lines in 8
                medical institutions, and an education and training center in 7
                medical schools. In addition, the park biomedical manufacturers
                were also led to participate in Healthcare Expo Taiwan, Bio
                Asia-Taiwan Exhibition, Dental Show Announcement, and MEDICA and
                other domestic and foreign trade fairs. In addition, the
                overseas operation base of the Southern Taiwan Science Park
                Medical Device Promotion and Operation Center was established in
                Malaysia, contributing to the signing of Memorandum of
                Cooperation among Metal Industries Research & Development
                Centre, Denway, Kuala Lumpur International Dental Centre
                (KLIDC), and Formosa Association for the Promotion of Oral
                Biotechnology and Medical Devices (TAPO). In the future, we will
                continue to connect resources from different parties to
                strengthen Taiwan’s medical material industry so as to align
                with international standards. At the same time, the STSP Digital
                Dental Demonstration Clinic was established in Taipei Denway
                Clinic in northern Taiwan and Tungs’ Taichung MetroHarbor
                Hospital in central Taiwan. Under the influence of the COVID-19
                epidemic, STSPB assisted manufacturers with promoting products
                via multiple marketing modes online and off-line. Moreover, to
                install the Smart Care Medical Fields” and “Smart Animal Medical
                Fields” in Chiayi and Pingtung Science Parks, services such as
                clinical trials and technology R&D are provided to manufacturers
                in a field-first manner to accelerate the launch of products,
                facilitating the formation of a cluster while extending the
                Biomedical Industrial Corridor in southern Taiwan.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;STSP Industry-Academia-Medical Exchange
                Platform
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;STSPB and the Medical Device Innovation
                Center, NCKU jointly established the STSP
                Industry-Academic-Medical Exchange Platform. The first
                biomedical exchange and matchmaking event was held on March 31,
                with doctors and nurses from National Cheng Kung University
                Hospital and representatives from outstanding biomedical
                manufacturers at STSP, such as AcuSense BioMedical Technology
                Corp., Hung Chun Bio-S Tech, Healthconn, TAICEND TECHNOLOGY,
                Tung Sin Biomedical, and Hwa Meei Optical.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;STSP Industry-Academic-Medical Exchange
                Platform is the first exchange and matchmaking platform with the
                biomedical manufacturers in STSP and the medical team of
                National Cheng Kung University Hospital, connecting the fields
                in the industry, academic, and the medicine. The purpose is to
                enhance the familiarity with and trust in medical material
                products manufactured at STSP for future physicians, forming a
                smooth product trial channels for the access to the hospital
                procurement system, enabling future physicians to understand the
                medical materials made domestically for the promotion of the
                localization of medical materials.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/2/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>2. Science Park Emerging Technology Application Project</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;To implement the main axis of the high
                economic efficiency and industrial innovation policy to
                encourage scientific businesses to form alliances with different
                industries or the academic circles to jointly engage in the R&D
                of emerging technologies, STSPB started the promotion of Science
                Park Emerging Technology Application Project in 2021 to
                introduce the energy from academic and research institutes while
                forming industry alliances based on industrial needs to
                facilitate the joint engagement in the development of industrial
                integration and key technologies. The aim is to promote talent
                cultivation for innovative technology, solve market problems,
                nurture start-ups and create talent value to achieve the win-win
                situation for innovative transformation of industries and the
                synergy of derivative industries.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;The final decision was made to approve
                subsidies to the 2022 R&D projects of 8 manufacturers in
                biotechnology, optoelectronics and precision machinery, with a
                total subsidy amount of NTD 26.98 million.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/2/en/photo4.png"}
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
          <strong>推動技術升級，壯大產業聚落</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/s/tsdg4&8/2/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.南部精準健康產業聚落推動計畫</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科生醫產業聚落目前共計有近90家進駐廠商，為國內重點發展的生醫產業聚落之一，歷經10年發展，陸續協助南科生醫廠商產品通過衛福部食品藥物管理署(TFDA)與醫療器材品質管理系統(QMS)驗證，並取得美國食品藥物管理局(FDA)及歐洲合格認證(CE)等認證，而為了扶植廠商持續在地紮根、穩健成長，並帶領醫材聚落朝向國際化的舞臺邁進，協助廠商突破行銷困境成為勢在必行的策略。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/2/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/s/tsdg4&8/2/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南部精準健康產業聚落每年創造超過百億元產值(2021年營業額為134億元、2022年營業額為127億元)，為提升聚落發展，本局持續透過南部精準健康產業推動服務平臺致力推廣MIT醫材，已於8家醫療機構建置12條體驗診線，7所醫學院設置教育訓練中心，且帶領園區生醫廠商參加台灣醫療科技展、亞洲生技展、牙醫師公會展覽及德國Medica等國內外展會；並在馬來西亞設立「南科醫療器材產品營運中心」海外營運據點，促成金屬工業研究發展中心、德威國際口腔醫療體系、馬來西亞KLIDC國際牙科中心、台灣口腔生物科技暨醫療器材產業發展促進協會簽署營運合作備忘錄，未來將持續串接各方資源，強化臺灣醫材產業與國際接軌合作。同時，分別於臺北德威牙醫醫院、臺中童綜合醫院建置北區及中區「南科數位牙科示範診間」，南科於COVID-19疫情下，透過線上及實體推廣多元化行銷模式協助廠商推廣產品；此外，為布局嘉義及屏東科學園區，建置「智慧照護醫療場域」及「智慧動物醫療場域」，以場域先行的方式，提供廠商臨床試驗、技術研究開發等服務，加速產品上市，促進聚落成形，延伸南臺灣生醫產業廊帶。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;南科產學醫交流平臺</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局與成功大學前瞻醫療器材科技中心合作成立「南科產學醫交流平臺」，3月31日辦理首場生醫交流媒合活動，現場集結成大醫護及南科優秀生醫廠商翔安、鴻君、康聚、泰陞、東昕及華美光學等單位代表共襄盛舉。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;「南科產學醫交流平臺」是南科首個橫跨南科生醫廠商及成大醫護團隊，串聯產學醫三大領域交
              流媒合平臺，目的在養成未來醫師對南科醫材產品熟悉度與信賴度，暢通產品試用管道進入醫院採購系統，並使在學的未來醫師，先了解國產醫療器材產品，以推動醫材國產化。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/2/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.科學園區新興科技應用計畫</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為落實高經濟效益及產業創新之政策主軸，激勵科學事業結盟異業或學術界力量，共同從事新興技術研究發展，南科管理局自2021年起推動「科學園區新興科技應用計畫」，引進學研各界力量，同時以產業需求為導向進行產業結盟，鼓勵產學共同投入「產業整合與關鍵技術」開發，促進創新技術人才培育、解決市場難題、培育新創公司及創造人才價值，以達成產業創新轉型與衍生產業群聚綜效的雙贏局面。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年核定補助生物技術、光電、精密機械、積通電等領域共計8家園區廠商之研發計畫，總補助金額為新台幣2,698萬元。
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
