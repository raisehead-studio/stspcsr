"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function CSRCompanyListPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>
              Complete the park functions to create a LOHAS art and culture in
              STSP
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/2/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>
                1. Introduction of industrial and commercial life service
                industries
              </h4>
              <p>
                The Bureau provides park manufacturers with faster and more
                convenient services. The 12 categories of industrial and
                commercial services in the science park include banking and
                finance, post office, securities, travel agency, accounting,
                law, equipment service providers, electronic material agency and
                sales, consultancy, telecommunications, inspection and
                verification and customs clearance services to address the needs
                of park manufacturers. STSP Bureau aims at creating a
                high-quality environment with high efficiency, safety, health,
                and comfort to attract industries and talents. Life service
                industries such as catering, shopping, exercise, leisure,
                childcare, and after-school classes are introduced. Please check
                the official website of STSP Bureau for detailed information.
              </p>
            </div>
            <div className="photo_row_container">
              <div className="photo_container">
                <Image
                  src={"/images/e/tsdg11/2/en/photo2.png"}
                  fill={true}
                  alt="profile photo"
                />
                <div>
                  <p>
                    Opening of New Business Circle at Management 1 Zone at the
                    KSP that offers more convenient life amenities
                  </p>
                </div>
              </div>
              <div className="photo_container">
                <Image
                  src={"/images/e/tsdg11/2/en/photo3.png"}
                  fill={true}
                  alt="profile photo"
                />
                <div>
                  <p>Owin 1 Fitness Center</p>
                </div>
              </div>
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.stsp.gov.tw/web/indexGroups?frontTarget=DEFAULT">
                STSP Official Website
              </Link>
            </div>
            <div className="page_description">
              <h4>2.Art and culture events and good-neighborly activities</h4>
              <p>
                STSP Bureau actively accumulates the soft power of art and
                culture, and is devoted to the promotion of art and culture
                events and concerts and organizing art exhibitions to provide
                rich and diverse cultural experience in the park. At the same
                time, good-neighborly activities are also an important part in
                the science park. Through various activities, the bond between
                people can be enhanced. By combining the art and culture events
                and the good-neighborly activities, the interaction and bond
                with the residents can be promoted, which can further improve
                the quality of life in the park area, creating a vibrant and
                charming STSP.
              </p>
              <h4>Exhibitions in Hsing-Kuang Hsier Local Culture Hall</h4>
              <p>
                Hsing-Kuang Hsier Local Culture Hall is a structure with the
                combination of religion and culture, with the second floor being
                the temple and the first floor being the Culture Hall for the
                exhibition of artworks from local individual artists (Xinshi,
                Shanhua and Anding Districts and the surrounding areas), joint
                exhibition of art society members, and works for art class at
                schools.
              </p>
              <p>
                As the epidemic condition eased in 2022, the Xingan Community
                Culture Museum started to resume holding the opening tea party
                of the exhibitions under the premise of cooperating with the
                government’s epidemic prevention policy. A total of 7
                exhibitions and performances were held, attracting many art
                lovers and families to visit and have exchanges. This is
                especially a place suitable for parents and children to travel
                together, making STSP not only a high-tech park but also a park
                with rich culture and natural ecology, namely a place with
                balanced development of technology and humanities.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>Sports Events in the STSP</h4>
              <p>
                STSPB promotes exercise in the science park. In 2022, the Bureau
                continued to organize the Exercise at STSP, the sports events
                include the Thousand People Fitness Walking, online hiking, STSP
                CUP ball games and so on, once again setting off a trend of
                exercise in the science park. Among them, the fitness walking
                event invited the professional badminton player, Tai Tzu-Ying to
                be the spokesperson for the fifth time. The ball games were
                participated by 3,289 players from 166 manufacturers, showing
                the health and vitality of STSP.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div className="page_description">
                <h4>STSP Late Spring Art Event</h4>
                <p>
                  Every March and April when spring comes and flowers bloom,
                  STSPB will organize concerts combined with art and culture
                  element for 4 weekends, allowing park employees to relieve
                  their stress of daily life, improve the quality of life at
                  STSP, and enhancing the exchanges and bond among employees in
                  an interactive, fun, and musical way.
                </p>
                <div className="photo_container">
                  <Image
                    src={"/images/e/tsdg11/2/en/photo6.png"}
                    fill={true}
                    alt="profile photo"
                  />
                </div>
              </div>
              <div className="page_description">
                <h4>Christmas at STSP</h4>
                <p>
                  To embrace the coming of Christmas and New Year, STSPB held a
                  Christmas Party & Holiday Lighting Ceremony with the theme of
                  “2022 Christmas at STSP” at Puxin Park on the evening of Dec.
                  23. At the end of the year, 17 park manufacturers including
                  TSMC and UMC were invited to put up decoration lights at
                  important intersections in the park area. The Bureau sincerely
                  wished every member of the STSP big family a bright and happy
                  new year, embracing a happy 2023 when everyone can realize
                  their dreams!
                </p>
                <div className="photo_container">
                  <Image
                    src={"/images/e/tsdg11/2/en/photo7.png"}
                    fill={true}
                    alt="profile photo"
                  />
                </div>
              </div>
            </div>

            <div className="photo_row_container"></div>
            <div className="page_description">
              <h4>Love Never Stops</h4>
              <p>
                Since 2015, STSPB has worked with Rotary Club Nanke and World
                Vision Taiwan to raise funds and jointly promote the STSP
                Charity Month with the purpose of “Care for the Locals, Let Love
                Grow Roots” to gather love and care at STSP and bring hopes to
                the disadvantaged for emergency medical care and other needs in
                the surrounding areas of Tainan and Kaohsiung Science Parks.
                STSP Charity Month has been implemented for eight years, and the
                cumulative funds raised so far totaled NTD 19.17 million.
              </p>
              <p>
                As of the end of 2022, the cumulative funds of NTD 15.20 million
                have been distributed to 4,089 people from 1,279 disadvantaged
                households in Xinshi, Shanhua and Anding Districts where Tainan
                Science Park is located and Luzhu, Gangshan and Yongan Districts
                where Kaohsiung Science Park is located.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/en/photo8.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3.A Visit to Museum of Archaeology</h4>
              <p>
                Museum of Archaeology, Tainan Branch (STSP Museum of
                Archaeology) has an area of 2.44 hectares and is located next to
                the Administration Building of STSP Bureau. STSP Museum of
                Archaeology has a unique exterior design, and it contains more
                than 8 million cultural and archaeological relics, all were
                unearthed with the development of STSP, reflecting the profound
                context of craft and cultural life of this land. We organize
                various activities, promote education and special exhibitions to
                show the unique contemporary prehistoric scenery of STSP and
                invite the public to come to know and cherish this rare cultural
                park area.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/en/photo9.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
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
          <strong>健全園區機能，樂活藝文南科</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg11/2/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.引進工商生活服務業</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為提供園區廠商更迅速及便捷的服務，園區內工商服務業計有銀行金融、郵局、證券、旅行社、會計、法律、設備服務商、電子材料代理及販售、顧問業、電信、檢測驗證及通關服務等12種不同業別，提供園區廠商完善的服務，期許將科學園區打造為高效率、安全、健康、舒適、吸引產業及人才的優質環境，並引進飲食、購物、運動、休閒、托育、安親等生活服務業，詳細資訊可至南科管理局官網查看。
            </p>
          </div>
          <div className="photo_row_container">
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/zh/photo2.png"}
                fill={true}
                alt="profile photo"
              />
              <div className="link_container">
                <p>相關連結:</p>
                <Link href="https://www.stsp.gov.tw/web/indexGroups?frontTarget=DEFAULT">
                  南部科學園區全球資訊網
                </Link>
              </div>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/zh/photo3.png"}
                fill={true}
                alt="profile photo"
              />
              <div>
                <p>南科健康生活館健身房</p>
              </div>
            </div>
          </div>

          <div className="page_description">
            <h4>2.藝術文化與敦親活動</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局積極蓄積園區藝文軟實力，並致力於推動藝文活動和音樂會，舉辦藝術展覽，為園區提供豐富多元的文化體驗。同時，敦親活動也是園區重要的一部分，透過各種活動，增進人與人之間的感情。透過藝術文化和敦親活動的結合，促進居民的互動和融合，增進園區生活品質，打造一個充滿活力和魅力的南科園區。
            </p>
            <h4>南科新港社地方文化館展演</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科新港社地方文化館是一棟宗教與文化合璧的建築組合，2樓為廟宇，1樓為文化館，以展示臺南市在地(新市、善化、安定區及周邊鄰近地區)個人藝術家、藝術學會會員聯展、學校美術班成果作品為主。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年疫情逐漸解封，文化館在配合政府防疫政策前提下開始恢復舉辦展覽之開幕茶會活動，提供觀賞者安心的觀展環境，共計舉辦7場展演，吸引眾多藝術愛好者闔家參觀與交流，十分適合親子同遊，使南科不僅為高科技園區，亦為一蘊含豐沛文化、自然生態、平衡科技與人文發展的園區。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/2/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>運動在南科</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局鼓勵園區運動風氣，2022年持續辦理「運動在南科」系列活動，包含千人健走、線上健走、南科盃球類競賽等活動，再次為園區掀起一股運動風潮。其中千人健走五度邀請羽球天后戴資穎擔任代言人；球類競賽辦理共計3,289名球員、166家廠商一同參與，展現出南科的健康活力。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/2/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>暮春藝文季</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;每年約3、4月春暖花開時，本局辦理4場周末音樂藝文演出，以「互動、有趣、玩音樂」的方式，紓緩日常生活壓力，提升南科生活素質，並增進園區從業人員情感交流。
            </p>
          </div>
          <div className="page_description">
            <h4>2022耶誕在南科</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為迎接耶誕節及新年的來臨，南科管理局於12月23日晚上在璞馨公園舉辦「2022耶誕在南科」耶誕晚會活動。而園區歲末年終燈飾亦邀請台積電、聯電等17家廠商，共同於園區各個重要路口一起參與佈置。期許南科大家庭的每一份子在新的一年裡都能心想事成、迎向幸福2023！
            </p>
          </div>
          <div className="photo_row_container">
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/zh/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/2/zh/photo7.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
          </div>
          <div className="page_description">
            <h4>愛心不中斷</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局自2015年底起攜手南科扶輪社、台灣世界展望會，募集愛心捐款，共同推動「南科愛心月」活動，以「在地關懷，讓愛紮根」為宗旨，匯聚南科人的愛心，為周邊地區弱勢家庭提供急難醫療等協助。迄今所舉辦八屆的愛心月活動，累計募得款項共計約新臺幣1,917萬元。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;截至2022年底止，計有臺南園區所處之新市、善化、安定三區及高雄園區所在之路竹、岡山、永安三區周邊以及大臺南地區逾1,279戶弱勢家庭、4,089人次受惠，發放愛心捐款金額累計逾1,520萬元。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/2/zh/photo8.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.同遊史前館</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;國立臺灣史前文化博物館南科考古館(簡稱南科考古館)位於南科管理局行政大樓旁，獨特的建物外觀，蘊藏800多萬件考古文物，均是隨著南科園區開展至今所發掘出的先人遺跡，體現出這片土地蘊涵深厚的人文工藝生活脈絡，舉辦各式活動、推廣教育及特展等，讓大家看見南科與眾不同的當代史前風景，一同來認識並珍惜難得的人文園區。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/2/zh/photo9.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
