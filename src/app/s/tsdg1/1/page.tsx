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
              Assist manufacturers with R&D and innovation, foster startup
              teams, and accumulate the momentum for technical innovation in the
              park
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.The Start-up Workshop</h4>
              <p>
                STSPB has set up the Start-up Workshop and introduced a one-stop
                matchmaking platform for entrepreneurial resources, providing
                start-up teams with a field for entrepreneurial development,
                coupled with the cooperation with the manufacturers and industry
                experts, basic prototype trial production equipment and
                resources, exclusive guardian and application for project
                grants, enabling these start-up teams to successfully start
                their own business under the assistance of STSPB.
              </p>
              <p>
                To assist start-ups to obtain start-up capital, STSP Start-up
                Workshop and National Cheng Kung University joined hands to
                facilitate the matchmaking of these start-ups with Headwater
                Capital, Smart Capital, Excellent Water Appraisal Intelligence
                (EWAi) and other venture capital institutions and angel
                investors. On May 27, 2022, the Start-ups Matching Exhibition
                was held to serve as a bridge between the start-up teams and the
                venture capital institutions. By gathering the potential teams
                cultivated by STSPB together, we made a strong pitch to obtain
                opportunities for fundraising matchmaking.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                STSP Start-up Workshop was also linked with the 5 colleges and
                universities of the GLORIA 2.0 X South Platform and joined the
                BIO Asia–Taiwan held between July 28-21, 2022, and a total of 8
                STSP start-up teams participated in this event.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                The Start-up Workshop cooperates with MOST’s From IP to IPO
                Program (FITI) to bridge the gap between innovation and
                entrepreneurship, implement the goal of promoting innovation
                economics and tech transformation, and actively coach and train
                start-up teams to participate in FITI program. In 2022, STSPB
                coached 5 teams to win the Startup Potential Award (Mag
                Technology, Charcoal Incredible), Alloytek, High Voltage
                Electrostatic Field (HVEF)System for the Fresh Fruits and
                Vegetables, and Liggle, with a total ofNTD1.9 million as the
                start-up funds, and the range of tutoring and coaching extended
                to colleges and universities all around Taiwan.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link: </p>
              <Link href="https://exp.stpi.narl.org.tw/project/FITI/index">
                From IP to IPO Program (FITI)
              </Link>
            </div>
            <div className="page_description">
              <h4>2.AI_ROBOT Base at STSP</h4>
              <p>
                With the advantages of the smart machinery in STSP, combined
                with the park manufacturers and surrounding scientific research
                institutions, STSP’s AI_ROBOT Base focuses on AI, robotics, and
                other related technologies, using the self-production field and
                facilities to assist with development. With the concept of
                sharing resources, the well-constructed sites and multiple
                equipment instruments are shared with manufacturers in need, and
                tutoring and coaching are provided to start-up companies to
                cooperate with enterprises for the co-creation to facilitate
                growth and creation. We encourage start-up companies to become
                science business to keep the roots of technology in the science
                park.
              </p>
              <p>
                (1) STSP’s AI_ROBOT Base joined hands with Start-up Workshop to
                guide the development of scientific start-ups
              </p>
              <p>
                STSP’s AI_ROBOT Base and the Start-up Workshop jointly held the
                “STSP’s AI_ROBOT Base Resources Application Results Sharing x
                Matchmaking Meeting” on October 25, 2022, and resources
                matchmaking was carried with the themes of smart manufacturing
                and smart medicine (eHealth) to provide multiple software and
                hardware resources to the start-up teams while at the same time
                publicized STSP’s overall resources for innovation and
                start-ups, increasing the exposure of STSP’s service platform of
                innovation and start-ups services.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                {" "}
                (2) Building a 5G Field to Assist Industrial Technology
                Innovation
              </p>
              <p>
                {" "}
                STSP’s AI_ROBOT Base continues the achievements of the 5G AIoT
                field demonstration project promoted previously and conducted
                the value-added integration of the innovative technology in
                smart manufacturing, including AR maintenance and repair
                technology, Vibration sensing technology, and the base’s
                information security and real-time monitoring technology to
                create a 5G AIoT total solution. Special counseling is provided
                to manufacturers to solve problems of remote after-sales
                services of equipment, risks of business trips due to the
                pandemic, and inability to effectively monitor machines, and so
                on. The successful model was extended and applied in Startup
                Terrace Kaohsiung. STSP’s AI_ROBOT Base led the Lean Smart
                Automation System Co., Ltd, and Cavern Treasury Tech
                Innovation., Ltd. to participate in the 2022 Meet Greater South
                X 5G AIoT Expo held by the Kaohsiung City Government on August
                26-27 to share the experience cooperating with start-up
                companies and proposed solutions for the shortage of workers and
                talent gaps in the fastener-related industries, including
                solutions through AI data analysis and introduction of AR
                technology. STSP’s AI_ROBOT Base will continue to expand its 5G
                technology application services and introduce the actual
                industrial application end so as to facilitate industrial
                upgrading and transformation while supporting start-up
                companies.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.facebook.com/stsp.airobot/">
                AI_ROBOT Base
              </Link>
            </div>
            <div className="page_description">
              <h4>3.STSP’s TAIRA Accelerator</h4>
              <p>
                The TAIRA Accelerator uses the cooperation mode of large-scale
                businesses working with small scale corporations and the
                provision of R&D subsidies and business cooperation
                opportunities attract high-quality start-ups to Southern Taiwan
                for co-creation of innovation with businesses, linkage with
                international resources to access to the international
                cooperation network, assisting these entrepreneurs with rapid
                growth in the most direct way.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/1/en/photo7.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg1/1/en/photo8.png"}
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
            src={"/images/s/tsdg1/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.南科創業工坊</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局設立「創業工坊」(Start-up
              Workshop)，導入一站式創業資源媒合平台，提供創業團隊創業發展場域、配合廠商與業師、基本原型試作設備與資源、專屬保母與申請專案計畫補助等，讓創業團隊可以在南科管理局協助之下，成功創業。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為協助新創企業能獲得創業資金，南科創業工坊與成功大學合力牽線水源資本、識富天使會、若水鑑價等多家創投機構與天使投資人，於2022年5月27日舉行「新創x創投媒合展示會」，幫助團隊建立與創投之間的橋樑，集結近年南科培育的潛力團隊同台Pitch，媒合募資機會。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科創業工坊也鏈結大南方科研產業化平台學校之5所大專院校，2022年7月28至31日於亞洲生技大展BIO
              Asia–Taiwan亮相，共推出8組南科新創參加。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;此外，配合國家科學及技術委員會「創新創業激勵計畫」(From
              IP To IPO,
              FITI)銜接「創新」和「創業」間斷層及落實推動創新經濟與科技轉型之目標，積極輔導與培訓新創團隊參與FITI計畫。2022年共輔導五組團隊獲得創業潛力獎殊榮(美格科技、炭不可思議、Alloytek、強電保鮮、Linggle)，合計190萬元創業基金，輔導量能擴及全台北、中、南地區大專院校。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://exp.stpi.narl.org.tw/project/FITI/index">
              創新創業激勵計畫
            </Link>
          </div>
          <div className="page_description">
            <h4>2.南科AI_ROBOT自造基地</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;藉由南部科學園區智慧機械產業優勢，結合園區廠商及周邊科研機構，南科自造基地聚焦AI、機器人等相關技術，運用自造場域及設施協助開發，以共享資源的概念把建構完善的場地及多元設備儀器分享給更多有需求之廠商，並輔導新創公司與企業合作共創，促使成長與創新，鼓勵新創公司成為科學事業，使技術根留園區。
            </p>
            <p>
              (1) 南科AI_ROBOT自造基地與創業工坊攜手合作，共同輔導科研新創發展
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科AI_ROBOT自造基地與創業工坊於2022年10月25日合作辦理「南科AI_ROBOT自造基地資源應用成果分享ｘ媒合會」，分別以智慧製造、智慧醫療領域為主題進行資源媒合，以提供多元軟硬體資源給新創團隊，同時進行南科創新創業整體資源之宣傳，增加南科創新創業服務平台曝光度。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p> (2) 建置5G場域協助產業技術創新</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科AI_ROBOT自造基地延續過去推動5G
              AIoT場域實證專案之成果，將智慧製造之新創技術「AR維護檢修技術」、「震動感測技術」與基地自有之「資安與即時監診技術」進行加值整合，打造5G
              AIoT整體解決方案，專案輔導廠商解決設備遠程售後服務、疫情出差風險、無法有效監看機台等問題。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年複製模式延伸推廣至高雄亞灣，南科自造基地帶領精智動系統與惇凰科技參與高雄市政府於8月26至27日舉辦「亞灣創新X新創大南方」創新創業展會，分享與新創公司合作的經驗。南科AI_ROBOT自造基地將持續擴大5G技術應用服務，導入實際產業應用端，在扶植新創公司發展的同時，也促進產業升級轉型。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo6.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://www.facebook.com/stsp.airobot/">
              南科AI_ROBOT自造基地
            </Link>
          </div>
          <div className="page_description">
            <h4>3.南科TAIRA加速器</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科TAIRA加速器運用以大帶小合作模式，提供研發補助、商業合作機會等，吸引優質新創到南臺灣與企業共同創新，鏈結國際資源使新創踏入國際合作網絡，以最直接的方式協助創業家高速成長。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/1/zh/photo7.png"}
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
