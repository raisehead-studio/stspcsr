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
              Construction of a Safe and Friendly Workplace Environment
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.Advocacy on Gender Equality in Employment</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; The number of employees in STSP has
                reached 92,601 in 2022, including 57,999 males and 34,602
                females, with the ratio of male to female at about 6:4. To
                promote gender equality at work and establish a more stable
                working conditions and environment, the park manufacturers’
                knowledge and understanding of the Act of Gender Equality in
                Employment and the prohibition of employment discrimination are
                strengthened. In addition to making gender equality promotion
                short films, STSPB also organized workshops inviting
                professionals to have lectures on the Act of Gender Equality in
                Employment and Case Study of Sexual Harassment in the Workplace
                and Employment Discrimination. These workshops can be useful for
                HR personnel to handle related issues in the future. The
                publicity was also strengthened in large-scale events with
                promotional posters and publicity materials provided. Business
                units were also encouraged to actively participate in publicity
                briefings to further assist them to build a friendly workplace
                and facilitate labor-management harmony.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; (1) Slogans and messages concerning
                gender equality in employment are shown on the electronic
                bulletin board in the science park from time to time, and
                relevant propaganda and materials about gender equality in
                employment and a friendly workplace are posted on Facebook
                Fanpage and published in the Southern Taiwan Science Park
                Newsletter.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;(2) Materials are made for the promotion
                of gender equality cases (including propaganda short film) to
                provide HR staff in the science park with materials for law
                propaganda targeting at labors and basic-level management for
                them to abide by the laws and regulations. In 2021, 8 sessions
                of playing the propaganda short film on gender equality before
                the movies were arranged on STSP Movie Night, and the contents
                of the short film included parental leave without pay, childcare
                allowance and CEDAW promotion to strengthen the promotion of the
                gender equality concept.
              </p>
              <p>
                (3) In 2021, the Cheering Station for Gender Equality in
                Employment was established in 3 sessions of large-scale
                events(1/16、3/26、7/2), and questionnaire was designed to
                interact with the public on the spot, coupled with explanations
                of laws and regulations concerning gender equality in employment
                and employment discrimination (approximately 465 copies of
                questionnaire were completed in total).
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; (4) We planned a “Workplace Equality
                Zone” in large-scale talent recruitment events to introduce the
                winners of park manufacturers implementing workplace equality,
                sharing various friendly measures and practical experiences to
                enhance the corporate image of the manufacturers.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; (5) We organized 2 sessions of
                “Workplace Equality and Sexual Harassment Prevention Seminar” in
                Tainan Science Park and Kaohsiung Science Park each on June 15
                and October 21 respectively, with 56 representatives from 46
                manufacturers participating. Attorneys and judges were invited
                to have lectures on relevant laws and sexual harassment
                prevention through case study, hoping to enhance these business
                personnel’s professional knowledge and facilitate equality in
                the workplace.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg4&8/3/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Promotion of Recognition of Workplace
                Equality in the Science Park
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;To safeguard labor rights, promote a
                friendly working environment, facilitate harmony between labor
                and management to reduce labor disputes, and to commend park
                employees for their contribution to the construction and
                economic development of STSP, the Bureau organizes the
                Award-Giving for Promotion of Work Equality in the Workplace for
                excellent business units and Excellent Employees in Southern
                Taiwan Science Park to encourage enterprises to actively
                implement labor laws and regulations and construct a harmonious
                working environment. In 2022, a total of 68 excellent employees
                and 4 manufacturers promoting work equality in the workplace won
                the awards.
              </p>
            </div>
            <div className="page_description">
              <h4>2. Family Care and Support</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; The Bureau also provides counseling for
                the park business units to provide childcare measures and
                breastfeeding rooms to implement a friendly workplace. A total
                of 30 park manufacturers received the counseling in 2022. In
                addition, subsidies for childcare facilities and measures are
                also budgeted every year to assist business units to handle
                these measures, encouraging them to create a safe workplace and
                family life for the workers at STSP. As of December, 2022, a
                total of 73 business units with 100 employees and more have
                provided childcar
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg4&8/3/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/s/tsdg4&8/3/en/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Park manufacturers also have their own
                kindergartens and cooperate with the National Experimental High
                School that provides high-quality education environment for
                employees’ children aged 6-18. In the future, it is also planned
                to open kindergartens and experimental high schools in newly
                established science parks so that the talents can work with
                peace of mind in the science park for their development while
                their needs for living and for children’s education can also be
                met.
              </p>
            </div>
            <div className="page_description">
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;3. A Safe and Healthy Park</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;STSPB is devoted to creating a safe and
                healthy science park and developing high-quality labor force to
                enhance the employees’ attention to and efforts for a safe and
                healthy working environment in the workplace. In terms of the
                occupational safety and health, STSPB focuses on creating a
                sustainable working environment of a healthy and safe smart
                park.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Increase health care penetration rate
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; The Employee Clinic of Southern Taiwan
                Science Park is the first medical service team from private
                medical center to be introduced among government-developed
                industrial zone and science parks, providing medical services
                and health consultation for employees of park manufacturers and
                the neighboring residents. In addition, in accordance with
                Article 22 of the Occupational Safety and Health Act, we focus
                on whether the manufacturers that should hire or employ contract
                medical personnel have allocated medical personnel as prescribed
                by law and whether they have handled labor health protection
                matters such as conducting labor health management, prevention
                of occupational diseases and handling health promotion. STSP
                Bureau organizes the workplace health promotion counseling and
                established the STSP Safety and Health Guidance Group whose
                member includes doctors from park clinics, senior nurses from
                park manufacturers, and experts in the academia to provide
                on-site counseling on the management and protection of workers’
                physical and mental health in the manufacturing and construction
                industries in the park.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo7.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; In addition, according to the
                statistics of the Labor Health and Protection Management
                Reporting Information System of the Health Administration of
                Occupational Safety and Health Administration of Ministry of
                Labor (as of the end of December, 2022), the overall health
                service rate of the science parks within STSP has reached 100％
                (the number of manufacturers that should employ or contract
                medical personnel was 117 to serve a total of 88,920 employees.
                Among them, 117 manufacturers completed system filing, serving
                88,920 employees. The service rate was 88,920/88,920＝100％).
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; Improvement of the Safety of Working
                Environment through On-site Counseling In response to the high
                frequency of occupational disaster in places with high risks,
                such as Class A and C dangerous workplaces and the construction
                sites in the park, we started to promote the “On-site Counseling
                of Occupational Safety and Health” by integrating resources in
                the industry, government and academia to form an Industrial
                Safety Counseling Team to assist with the implementation of
                self-management of occupational safety and health at high-risk
                places so as to reduce the occurrence of occupational disasters.
                In 2022, a total of 80 sessions of counseling were conducted,
                which included:
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;1. 1 sessions of on-site counseling of
                occupational safety and health in Class A and C dangerous
                workplaces.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;2. 10 sessions of on-site counseling for
                physical and mental health management and protection.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;3. 16 sessions of on-site counseling of
                occupational safety and health in the manufacturing industry.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;4. 53 sessions of on-site counseling of
                occupational safety and health in the construction industry.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo8.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; A total of 3 sessions of propaganda
                meetings were held, focusing on not only the explanation of the
                key points of on-site counseling but also the education and
                training concerning the scaffolding construction standards and
                operation safety, open excavation work safety, regulations for
                anoxic work in confined spaces that often occur in the
                construction sites, explanation of labor health protection
                regulation amendment, matters to be noted in practical
                promotion, recommendation and guidelines for the disclosure of
                SDGs of sustainable health and safety in the workplace, etc.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo9.png"}
                fill={true}
                alt="profile photo"
              />
            </div>

            <div className="page_description">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Excellent Industrial Safety Unit
                (Personnel)
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Award To publicly commend the business
                units and employees with excellent occupational safety and heath
                management to encourage the improvement of workplace safety
                standards and promote labor health and safety so as to carry
                forward the diligent and sociable spirit and the excellent
                tradition of moral character, we commend excellent employees and
                business units every year. In 2022, 4 manufacturers and 10
                employees in the science park won the award.
              </p>
            </div>
            <div className="page_description">
              <h4>
                4. Maintaining the death rate per million workers in major
                occupational disasters at 20 and lower (reaching Japanese
                standards)
              </h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; We have been devoted to the promotion
                of various disaster reduction plans and investigations to have
                thorough grasp of the high-risk places in the science park and
                advocate the importance of occupational disease prevention. To
                ensure the occupational safety of the workers, we further help
                the construction sites implement the establishment of
                self-management, which effectively reduces the potential
                disasters in the park while on the other hand improves the
                industrial safety standards in the science park. In 2022, a
                total of 986 labor inspections were completed (including 896
                sessions of occupational safety and health inspections and 90
                sessions of labor condition inspections), The occupational
                disaster rate per thousand people in the science park in 2022
                was 1.33‰.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo10.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>5. Advanced Disaster Education and Training Center</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;To enhance the workers’ occupational
                safety and health knowledge and the ability to identify hazards,
                the Occupational Safety and Health Administration of Ministry of
                Labor and STSPB jointly promote the “Occupational Safety and
                Health Multi-somatosensory Extended Reality (XR), Disaster
                Prevention Simulation Training Field Project”. The existing
                buildings of Kaohsiung temporary storage site was used and
                refurbished. After 3 years of installation of relevant hardware
                and software equipment, the first-class domestic Occupational
                Safety and Health Multi-somatosensory Extended Reality (XR),
                Disaster Prevention Simulation Training Field was established.
                Through the high technology of VR, AR, MR, AIoT, high-risk
                operations in places like the roofs, construction frames,
                high-altitude operation vehicles, chemicals, forklifts, confined
                spaces, and hanging cages can be simulated for learners to
                receive the interactive and immersive training in a safe
                environment. It is hoped that the trainees can work safely in
                their workplace after the training. A total of 77 sessions of
                education and training were organized in 2022, and the
                cumulative number of trainees was 1,583. There were 22 sessions
                of visits from schools and government agencies, with a total of
                659 visitors. The XR field will continue to develop courses for
                the Occupational Safety and Health Multi-somatosensory Extended
                Reality (XR) Simulation Training and continue to promote the
                cooperation among the industry, government, academia and
                cross-ministerial collaboration to create a safe, healthy and
                sustainable high-tech industrial corridor in Southern Taiwan.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg4&8/3/en/photo11.png"}
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
          <strong>建構安全且友善的職場環境</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/s/tsdg4&8/3/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.性別工作平等宣導</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科園區2022年就業人數已達92,601人，男性57,999人、女性34,602人，男女從業人員的比例大約是6：4，為促進性別工作平權，建立更安穩的勞動條件及環境，加強園區事業單位對於性別工作平等法及就業歧視禁止之認識與瞭解，除製作性平等宣導短片，南科管理局舉辦研習會，邀請專業人士講授性別工作平等法及職場性騷擾案例分析、就業歧視實務案例分析等課程，希望對於人資夥伴們將來在處理相關議題時能有所幫助；於辦理大型活動時加強宣導，提供文宣海報及宣導品，鼓勵事業單位積極參加宣導會，進一步協助事業單位建構友善職場、促進勞資和諧。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; (1)
              於園區電子看板不定時刊登性別工作平等宣傳標語；於「臉書粉絲專頁」、「南科簡訊」刊登性別工作平權友善職場的相關宣導。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; (2)
              製作性別平等宣導案例教材(含宣導短片)，提供園區人資針對勞工及基層主管做法令宣導，使其符合法令規定。2022年辦理8場次於南科電影院播映前播放性平宣導短片，包括育嬰留職停薪、育嬰津貼及消除對婦女一切形式歧視公約(CEDAW)宣導，以加強宣導性別平等。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(3)
              2022年辦理於大型活動時設置「性別工作平等加油站」3場次(1/16、3/26、7/2)，設計問卷與現場民眾互動，並當場提供性別工作平等、就業歧視等相關法令規定說明(共完成約470份問卷)。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(4)
              規劃於大型徵才活動設置「南科管理局職場平權專區」，介紹園區職場平權獲獎廠商，分享廠內各項友善措施及實務經驗，推廣廠商企業形象。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;(5)
              辦理2場次「職場平權暨性騷擾防治研習會」，6月15日於臺南園區、10月21日於高雄園區各舉辦1場，合計46家廠商代表參加，共56位與會。會中邀請律師及法官透過實務案例分析講授相關法令、性騷擾之防治，俾增進廠商業務人員專業知能與促進職場平權。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;推動園區職場平權表揚</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為保障勞工工作權益，提升職場之友善工作環境，促進勞資和諧，減少勞資糾紛，並表揚園區從業人員對南科園區建設及經濟發展的貢獻，南科管理局特辦理「推動職場工作平權」優良事業單位」及「南部科學園區優良從業人員」選拔活動，以鼓勵企業積極落實勞動法令，建構和諧工作環境。2022年共有68位「111年度南部科學園區優良從業人員」及4家「111年度推動職場工作平權優良事業單位」獲獎。
            </p>
          </div>
          <div className="page_description">
            <h4>2.家庭關懷與支持</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局輔導園區事業單位提供企業員工子女托兒措施、哺(集)乳室，以落實友善之職場環境，2022年共計輔導30家廠商，且每年編列托兒設施措施補助經費，協助事業單位辦理托兒設施措施，鼓勵其為勞工打造安心的職場及家庭生活。而園區僱用受僱者100人以上之73家(統計至2022年12月)事業單位皆已依法提供哺(集)乳室及托兒措施。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;以及廠商也設有自辦的幼兒園，並配合實驗中學提供6-18歲員工子女優質的教育環境。未來，新設園區亦規劃開辦幼兒園及實驗中學等，讓科技人才不但能到此安心上班及發展，同時滿足其居住與孩子安心就學之需求。
            </p>
          </div>
          <div className="page_description">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;3.安全健康園區</h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;提升健康照護普及率</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;於園區設置南科聯合診所，為政府開發之工業區與科學園區中，第一個引入民營醫學中心之醫療服務團隊入區，提供園區廠商員工及鄰近居民提供醫療服務及健康諮詢。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;更進一步，依據職安法第22條，著重於依法應雇用或特約醫護人員的廠商，是否已經確實配置並辦理勞工健康管理、職業並預防及健康促進等勞工健康保護事項。南科管理局辦理職場健康促進輔導，成立南科安全衛生輔導團，成員包括園區診所醫師、園區廠商資深護理師與學界專家等，針對園區製造業與營造業之勞工身心健康管理及保護進行臨場輔導。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              另依據勞動部職業安全衛生署勞工健康保護管理報備資訊系統統計（2022年12月底），南科所屬園區之整體健康服務率已達100％（應設置醫護人員之廠商家數117家，人數為88,920人，完成系統報備家數117家，人數為88,920人，88,920/88,920＝100％）。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;臨場輔導提升作業環境安全</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;針對園區職業災害頻率偏高、甲、丙類工作場所及全區之營造工程等高風險場所，整合產學官學界資源成立工安輔導團，推動「職場安全衛生臨場輔導」，協助高風險場所落實職業安全衛生自主管理，以降低職災發生。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;2022年已完成臨場輔導80場其中包含：</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;1.
              甲、丙類危險性工作場所臨場輔導安全衛生輔導1場次。
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;2. 身心健康及保護臨場輔導10場次。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;3. 製造業臨場輔導安全衛生輔導16場次。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;4. 營造業臨場輔導53場次。</p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo6.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo7.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container"></div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;辦理相關宣導說明會共3場次，除針對臨場輔導重點做說明外，針對營造場易發生之施工架組立標準及作業安全露天開挖作業安全、局限空間缺氧作業規定及勞工健康保護規則修正說明及實務推動注意事項與職場永續健康與安全SDGs揭露實務建議指南等課程。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo8.png"}
              fill={true}
              alt="profile photo"
            />
          </div>

          <div className="page_description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;優良工安單位(人員)獲獎</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局為公開表彰園區內推行職場安全衛生管理成效優良之事業單位及人員，鼓勵提升園區職場安全水準及促進勞工安全與健康，並發揚敬業樂群的精神及優良傳統的品德，每年表揚園區表現優良之從業人員及事業單位。2022年共4家園區廠商獲獎，10位園區從業人員獲獎。
            </p>
          </div>
          <div className="page_description">
            <h4>4.重大職災死亡百萬人率維持在20以下(達日本之水準)</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局致力於推動各項減災方案及調查，徹底掌握園區高風險場所，宣導職業病預防之重要性；為保障勞工的工作安全，更協助營造工地落實自主管理之建置，有效降低園區潛在災害及全面提升園區工安水準。2022年共完成986場次勞動檢查(職業安全衛生檢查896場，勞動條件檢查90場)。2022年園區的職災千人率為1.33‰。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo9.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo10.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>5.先進防災教育訓練中心</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為增進勞工職業安全衛生知能及提升危害辨識能力，勞動部職業安全衛生署及南科管理局跨領域共同合作推動的「職業安全衛生多體感延伸實境(XR)防災模擬訓練場域」，從高雄廢棄物暫存場，利用既有建築物修繕拉皮、歷經3年建置相關軟硬設備，打造國內首屈一指職業安全衛生多體感延伸實境的教育訓練場館，藉由高科技的輔助，透過VR、AR、MR、AIoT模擬屋頂、施工架、高空工作車、化學品、堆高機、局限空間、吊籠等高風險作業，學員便能夠在安全的環境下接受互動及沉浸式的訓練，並期許受訓過學員都能在職場上能安全就業。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年辦理77場次教育訓練，累計受訓1,583人次；另有學校、公務機關團體參訪22場次，累計參訪659人次，XR本場域未來將持續發展職業安全衛生多體感延伸實境（XR）防災模擬之訓練課程及持續推動產、官、學及跨部會合作，打造安全衛生永續的南台灣高科技產業廊帶。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg4&8/3/zh/photo11.png"}
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
