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
              Key cultivation to reduce the gap between the industry and the
              academia
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. Science Park Talent Cultivation Subsidy Program</h4>
              <p>
                To encourage the sustainable innovation and R&D of the
                manufacturers and assist the cultivation of high-tech
                professionals, STSPB encourages the colleges and universities
                near the science park to organize professional module courses
                that are in line with high-tech industries to enhance the
                professional skills of the graduates-to-be. Furthermore,
                theoretical teaching and practical experience are combined
                through internships to shorten the gap between learning and
                application among talents in the technology industry to
                establish an effective industry-academia matching mechanism for
                the park manufacturers.
              </p>
              <p>
                This program facilitates exchange opportunities between
                schoolteachers and the industry in teaching and researching
                through industry-university collaboration projects, which
                further increases the employment opportunities for students. In
                2022, STSPB has confirmed 12 projects, with a total subsidy of
                NTD 7.92 million. A total of 8 schools actually implemented the
                talent cultivation projects, providing 12 module courses and
                corporate internship courses, cultivating 894 people. In
                addition, the cultivation results included 4 competitions, 4
                categories of certification, 96 certificates in total, 4 session
                of results presentation and 3 industry-university collaboration
                projects.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://training.scipark.tw/">
                Science Park Talent Cultivation Subsidy Program
              </Link>
            </div>
            <div className="page_description">
              <h4>2. Professional and Technical Talent Training Program</h4>
              <p>
                To improve the professional and technical knowledge and
                capabilities of the park employees and to reserve the capacity
                of talents for the future advancement of the park, multiple
                professional courses in the fields of semiconductor,
                optoelectronics, precision machinery, information communication,
                and management that are needed for park employees and the
                exchange and matchmaking events were held to reserve all kinds
                of talents needed by the park industries and enhance the park
                employees’ competitiveness, the innovative management thinking,
                and the R&D capacity. Through the construction of an exchange
                platform for industry-academia services at STSP, various
                resources of industry, government, academia, and research
                institutes can be more effectively utilized and integrated to
                give full play to the maximum benefit of resource sharing to
                serve the park.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;(1) A total of 330 hours of courses were
                provided in 2 professional modules, semiconductors and smart
                manufacturing, with a total of 22 public classes and 21
                corporate customized classes, with 1,162 trainees in total.
                Nearly 65% of the participants were the employees in the science
                park, and the lecturers from the industries accounted for 60%.
                The courses linked 21 enterprises and legal persons to provide
                services for the talents and meet the training needs at STSP
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;(2) STSPB organized 3 comprehensive and
                2 large-scale matchmaking activities and themed forums, with a
                total of 480 participants from 17 schools around Taiwan, more
                than 20 enterprises in the science park and surrounding areas.
                Through the sharing of a female leader in the high-tech
                industry, cross-university talent matchmaking, sharing of senior
                fellows, demonstrating academic and research capacities and
                achievement and other diverse activities, we assist enterprises
                to grasp the talents in multiple schools and R&D capabilities in
                various fields.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;(3) We organized a symposium for
                exchanges between HR and senior executives. A total of 58 HR and
                business executives attended the meeting. The unveiling of the
                self-driving car field was arranged to let the manufacturers
                understand how much the talent issues are paid attention to and
                how we subsidize resources at STSP. In addition, the TTA South
                Team was introduced for the exchanges with the park
                manufacturers. It is hoped that through the dialogue and
                interaction during the event, the enterprises’ needs can be
                grasped while at the same time, the relationship and bond can be
                established.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3. Take Roots Downward in Education</h4>
              <p>
                To provide a high-quality education environment for the STSP
                employees’ children and to lay an educational foundation for the
                local development, STSPB has actively preparing the experimental
                high schools which include the senior high school department,
                junior high school department, primary school department,
                bilingual department, and kindergarten. This is a rare system in
                Taiwan, and the curriculum focuses on the 12-year continuity,
                combining the park and social resources with the adaptation of
                innovative teaching model for the development of a
                forward-looking and internationalized benchmark school focusing
                on science education based on humanistic foundation, attracting
                international talents through the establishment of the bilingual
                department. In addition, we cooperate with the national
                bilingual plan, deepening bilingualism and internationalization
                to enhance student’s international competitiveness.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;The experimental high schools in
                Pingtung and Chiayi Technology Corridor Belt for the Nurturing
                of Talents
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;To cope with the development of the
                science park, the newly constructed Pingtung Science Park and
                Chiayi Science Park will attract investment, and a large number
                of technology talents at home and abroad will be attracted to
                the science parks, promoting the sustainable development of
                high-tech industry and the science parks, facilitating the
                prosperous development of local industries, which will greatly
                increase the demands for living functions and at the same time
                cultivate high-tech talents of the country for the future. STSPB
                included the promotion of the experimental high schools within
                (or outside) the newly constructed science park to create a
                sustainable living and educational environment. The plan for the
                establishment of the National Experimental High School At
                Pingtung Science Park & National Experimental High School At
                Chiayi Science Park was approved by the Ministry of Education on
                December 29, 2021, and it was agreed to establish the
                Preparatory Offices for the two experimental high schools on
                January 26, 2021. The selection of the director of the
                Preparatory Offices was scheduled to be held on February 25 and
                the directors would take office on March 1. The preparatory work
                was conducted actively and rapidly.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;The planning of the experimental high
                schools and the construction of the school buildings are
                expected to be tendered and constructed in 2023. The first phase
                school buildings are expected to be completed in 2025, and the
                whole schools are expected to be completed in 2026. It is
                planned to start enrollment in 2024, and the schools are
                expected to start in September, 2024.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/1/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;FIRST Robotics Competition</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;NNKIEH participated in the 2022 RFC
                (FIRST Robotics Competition) in Houston, USA from April 20-22,
                and stood out from the 454 top teams from all over the world and
                won the Quality Award. Before the world competition, Minister
                Tsung-Tsong Wu of National Science and Technology Council, the
                Director-General of the STSPB, Chen-Kang Su and the
                representative team were summoned by the president on April 12,
                and the vice president Ching-Te Lai presented NNKIEH with the
                flag and encouraged the students to keep working hard and
                continue to become Taiwan’s pride with technology and
                cooperation. NNKIEH’s FRC6998 Team was the only winning team
                from Taiwan in this world competition. When the teachers and
                students at NNKIEH learned the news of winning an award, they
                were all excited by the great results in the world competition.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/1/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;In the second half of the year, the
                advancement and FRC-related training continued. A 5-day STSP FRC
                Summer Training Camp led by two NNKIEH teachers, Wen-Hung Tai
                and Yun-Shan Liu and co-planned by Dr. Ching-Tsai Wu of the
                Metal Industries Research & Development Center was held from
                August 8-12.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/1/en/photo6.png"}
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
          <strong>關鍵培育，降低產學落差</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/s/tsdg4&8/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.科學園區人才培育補助計畫</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為鼓勵園區廠商永續創新研發，協助高科技專業人才養成，南科管理局透過人才培育補助計畫鼓勵園區周邊大專校院開辦與高科技產業接軌之專業相關模組課程，提升準畢業生專業技能，並以企業實習方式調和理論教學與實務經驗，藉以縮短科技產業人才學用落差，建立有效之園區廠商產學媒合機制。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;本計畫促成學校老師與業界進行教學上及研究上產學合作之交流機會，進而增加學生就業之機會。2022年獲南科管理局補助之計畫共計12件，補助金額合計792.1萬元，實際執行培育學校共8間學校，12件模組課程與企業實習課程，預計培育894人次，另培育成果包含辦理參與競賽共計4場、考取證照類別共計4類別、考取證照張數共計96張、成果發表會共計3場、產學合作4件。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://training.scipark.tw/">
              科學園區人才培育補助計畫
            </Link>
          </div>
          <div className="page_description">
            <h4>2.專業及技術人才培訓計畫</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為提升園區從業人員之專業技術知識能力以及儲備未來前進園區人才量能，辦理園區事業員工所需半導體、光電、精密機械、資通訊、管理類等多元學習專業課程及產學交流媒合會，以儲備園區產業所需之各式人才，增進園區從業人員競爭力、創新管理思維與研發量能。透過建構南科園區產學服務的交流平臺，將產官學研各項資源作更有效的利用及整合，以發揮資源共享之最大效益服務園區。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(1)
              共開設330小時課程，含半導體及智慧製造共2門專業模組課程，22門公開班、21門企業客製包班，共培訓1,162人次。區內從業人員佔總人數近6成5，法人產業師資約達6成，鏈結企業及法人共21個單位，為南科的人才及培訓需求提供服務。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(2)
              辦理3場次綜合型及2場次大型媒合活動及主題式論壇合，總計480人次參與，分別來自全臺北中南各地等17校學生、科學園區及周邊企業超過20家以上。透過女性科技領導人分享、跨校院所人才技術媒合、學長姐給問、學研量能成果展現等多元化活動辦理模式，協助企業掌握多校的人才及各領域研發量能。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(3)
              辦理1場次HR及高階主管交流座談聯誼會，共有58位人資及企業主管與會，安排自駕車場域開箱，讓廠商瞭解南科對園區人才議題的重視與補助資源外，亦安排TTA
              South進駐團隊介紹並與園區企業交流，並希望藉由活動中的對談與互動探知企業深層的需求，同時建立關係與情誼。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.教育向下紮根</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為提供科學園區員工子女優質的教育環境及南科與地方發展奠定教育基礎。南科管理局積極籌設成立實驗中學，包括高中部、國中部、國小部、雙語部、幼兒園，為國內鮮有的體制，課程強調12年一貫的延續性，結合園區與社會資源，採用創新的教學模式，發展成為以科學教育為重點，人文情懷為根基，以及透過雙語部建置，吸引國際人才，配合雙語國家政策，深耕雙語接軌國際，提升學生未來國際競爭力，成為具前瞻性且國際化的標竿學校。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;屏、嘉科技廊帶實驗中學孕育人才</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;因應園區發展，屏東及嘉義新設科學園區將招商引資，會吸引大批國內、外科技菁英進駐，推動高科技產業及園區永續發展，促進地方產業蓬勃，對於生活機能需求亦會大幅提升，同時培養未來國家高科技人才，南科管理局於屏東、嘉義科學園區規劃中納入推動新設園區內(或外)之實驗中學，營造永續的生活與教育環境，規劃之「屏科實驗中學及嘉科實驗中學設校計畫」於2021年12月29日獲教育部核定，2022年1月26日教育部同意二實中籌備處自3月1日成立，籌備處主任遴選訂於2月25日舉行並在3月1日到任，籌設行動風風火火。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;實驗中學設校及校舍新建規劃時程預計於2023年新建工程招標及施工，2025年第一期校舍完工，2026年校舍全部竣工。規劃於2024年開始對外招生，並於2024年9月開學。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;FIRST機器人競賽</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科實中於4月20日至22日前往美國休士頓參加2022
              FRC世界機器人競賽，在來自全世界454支頂尖隊伍中脫穎而出，勇奪機器人最佳品質獎Quality
              Award。世界賽前，代表隊在國科會主委吳政忠、南科管理局局長蘇振綱陪同下，4月12日獲總統召見，並由副總統賴清德對南科實中進行嘉勉授旗，期勉學生們持續用心學習，用科技力及合作力持續讓臺灣發光發熱。南科實中FRC6998團隊在世界賽中是臺灣唯一獲獎隊伍，海外競賽佳績傳回，令師生振奮不已。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;下半年持續精進及積極投入FRC相關培訓工作，南科實中由蔡汶鴻老師、劉昀姍老師帶領，並與金屬工業研究發展中心吳慶財博士共同籌劃，於8月8日至12日舉辦為期5天的「111年度南科FRC暑期訓練營」。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/1/zh/photo6.png"}
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
