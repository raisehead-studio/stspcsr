"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG114() {
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
            <strong> Spreading awareness of ecological protection</strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.Ecological settlement</h4>
              <p>
                Due to the geographic location of the science park, it has a
                unique plain farming ecology. To make this fertile land of STSP
                a home for the aboriginals and passing visitors, the Bureau has
                specially planned a 30-hactare land for ecological protection to
                conserve bird habitats, due to the geographic location of the
                science park, it has a unique plain farming ecology. After years
                of efforts and planning, the Bureau has finally created abundant
                ecological resources in the science park today, including
                grassland, shrubs, detention ponds (for flood prevention),
                ditches and so on, covering the diverse habitats of the plain
                and attracting diverse creatures that forms aggregation in the
                science park and it has become the best demonstration of
                symbiosis between development and ecological conservation. The
                Bureau entrusts an ecological survey team to carry out regular
                ecological survey to analyze the changes in the number of the
                population. Observation and recording of the reproduction of
                protected species of birds were particularly carried out, which
                has also formed a unique ecological characteristic at STSP.
              </p>
              <p>
                Among the birds observed, 7 species and 8 species are the
                protected bird announced by Council of Agriculture (not in the
                IUCN Red List) in Tainan Science Park and Kaohsiung Science Park
                respectively.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/4/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/4/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/4/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=131">
                Biological corridor
              </Link>
            </div>
            <div className="page_description">
              <h4>2.Environmental Education</h4>
              <p>
                STSPB continues to organize environmental education and related
                activities that incorporate issues of water pollution control,
                waste reduction, natural environment exploration and disaster
                and flood prevention. Nanke Environment Education Park developed
                4 courses, namely Source of Life- Water, Garbage Magician,
                Nature Explorer, and Rain and Me. In 2022, 4 sessions of Source
                of Life- Water Course were organized, with a total of 101
                participants; 3 sessions of Garbage Magician were attended by
                100 people in total; 6 sessions of Nature Explorer were provided
                to 171 participants; 1 session of Rain and Me was attended by 33
                participants. Overall, a total of 14 sessions of environmental
                education courses were organized, and the total number of
                participants amounted to 405. We introduced more environmentally
                friendly concepts and measures to create a green science park
                with sustainable development. In response to the epidemic,
                measures such as disinfection and temperature measurement were
                implemented for physical classes. In 2022, two sessions of trial
                online course on “Origin of Life-Water” were held in 2022, with
                a total of 143 participants.
              </p>
            </div>
            <div className="photo_grid">
              <div className="photo_container container1">
                <Image
                  src={"/images/e/tsdg11/4/en/photo5.png"}
                  fill={true}
                  alt="profile photo"
                />
              </div>
              <div className="container2">
                <div className="photo_container">
                  <Image
                    src={"/images/e/tsdg11/4/en/photo6.png"}
                    fill={true}
                    alt="profile photo"
                  />
                </div>
                <div className="photo_container">
                  <Image
                    src={"/images/e/tsdg11/4/en/photo7.png"}
                    fill={true}
                    alt="profile photo"
                  />
                </div>
              </div>
            </div>

            <div className="page_description">
              <h4>3.Eco-Tour Activity</h4>
              <p>
                The Science Park has spared no efforts in promoting the concepts
                and actions of nature conservation. Therefore, it is hoped that
                colorful ecological experience can be enjoyed without destroying
                the natural environment so that we can get to know the
                preciousness and fragility of the protected areas and the
                biodiversity in Taiwan and further to take concrete and feasible
                eco-friendly actions in our lives. The eco-tour activity was
                held in 2022, with a total of 80 participants.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/4/en/photo9.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>4. Adoption of Beach Cleanup</h4>
              <p>
                From 2017 to 2021, the Bureau responded to the Adoption of
                Coastal Cleanup initiated by Environmental Protection
                Administration and adopted the 500-meter coast along the Gold
                Coast in the South District of Tainan City. The Gold Coast has
                beautiful landscape, a soft and delicate beach and broad
                coastline. We led our staff to the Gold Coast for the beach
                cleanup to convey and implement environmental education in real
                actions, encouraging our staff to take actions to protect the
                earth, assist in the maintenance of a clean coastal environment
                to contribute to the marine environment and take practical
                actions to remove the trash in the coastal area. The hours
                participated in Beach Cleanup Activity in 2022 amounted to 27
                man-hours.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/4/en/photo10.png"}
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
          <strong>生態保護意識擴散</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg11/4/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.生態聚落</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;園區因地理位置擁有獨特的平原農耕生態，南科管理局期望南科這塊沃土可成為這些生物原住民及過客的家，特別規劃出20公頃作為生態保護用地，經多年的努力與規劃，造就了如今園區內生態資源相當豐富，包含有草地、灌木叢、滯洪的水池、溝渠等，涵蓋平原多樣的棲地，吸引多樣化的生物聚集，成為開發與生態保育共生的最佳示範。並委託生態調查團隊執行生態調查工作，分析族群數量的變化資料，特別就保育鳥類的繁殖進行觀察與紀錄，也形成了南科園區獨有之生態風貌。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;所觀測到之鳥類中，臺南園區共7種、高雄園區共8種為農委會公告之保育鳥類(非IUCN紅色名單種類)。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=131">
              生物走廊
            </Link>
          </div>
          <div className="page_description">
            <h4>2.環境教育</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局持續辦理環境教育課程相關活動，融入防治水污染、廢棄物減量、自然環境探索，以及防災防汛等議題。南科環境教育園區發展出4套課程分別為生命之源-水、垃圾魔術師、自然探索家、雨我同在，在2022年分別辦理生命之源-水4場次，計有101人；垃圾魔術師3場次，計有100人；自然探索家6場次，計有171人；雨我同在1場次，計有33人；共辦理14場次環境教育課程，共計405人次參與，導入更多元的環境友善理念及措施，打造永續發展的綠色園區。因應疫情，現場課程均加強消毒及量測體溫等措施，2022年測試辦理「生命之源-水」線上課程操作2場次，共計143人參與。
            </p>
          </div>
          <div className="photo_grid">
            <div className="photo_container container1">
              <Image
                src={"/images/e/tsdg11/4/zh/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="container2">
              <div className="photo_container">
                <Image
                  src={"/images/e/tsdg11/4/zh/photo6.png"}
                  fill={true}
                  alt="profile photo"
                />
              </div>
              <div className="photo_container">
                <Image
                  src={"/images/e/tsdg11/4/zh/photo7.png"}
                  fill={true}
                  alt="profile photo"
                />
              </div>
            </div>
          </div>

          <div className="page_description">
            <h4>3.生態導覽</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;園區推動自然保育觀念及行動方面一直不餘遺力，因此希望可以藉由寓教於樂的方式，在不破壞自然環境的原則下能夠享受多采多姿的生態體驗，一起認識臺灣保護區域及生物多樣性的珍貴與脆弱，進而在生活中採取具體可行的友善行動。2022年辦理生態導覽活動，參與人數總計80人。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/zh/photo9.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>4.淨灘認養</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局自2017年起響應環保署發起的「海岸淨灘認養活動」，認養臺南南區黃金海岸一帶約500公尺海岸，黃金海岸風景優美，擁有柔軟細緻的沙灘和寬廣無際的海岸線，帶領員工至黃金海岸淨灘，在活動中傳達並落實環境教育的理念，鼓勵同仁付諸行動環保愛地球，協助維護海岸環境清潔，為海洋環境盡一份力量，以實際行動清理海岸垃圾。2022年參與淨灘活動總計27人時數。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/4/zh/photo10.png"}
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
