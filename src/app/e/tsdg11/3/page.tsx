"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG113() {
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
              Low-carbon ecological communities and buildings for environmental
              symbiosis and mutual benefit
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/3/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1.Ecological Community</h4>
              <p>
                STSP Bureau has promoted green buildings to promote the
                co-existence and co-benefit of the buildings and the
                environment, implement the energy conservation of the buildings,
                and continue to reduce energy consumption and carbon emissions,
                making STSP the science park with the highest density of
                diamond-grade green buildings. Tainan Science Park and Kaohsiung
                Park have both obtained the label of diamond grade Ecological
                Community Evaluation System (EEWH-EC), accounting for 2/5 of the
                diamond-grade ecological communities in Taiwan, and the green
                building area accounts for 25.1% of the total building floor
                area of the park.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/3/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                STSP Bureau has been committed to constructing an excellent
                manufacturing environment with the values of Production, Living,
                and Ecology. Tainan Science Park was certified the diamond grade
                Community in 2013 and obtained the label of diamond grade
                Ecological Community Evaluation System (EEWH-EC) in 2016. We
                continue the promotion of the ecological community balance and
                promote the concept of sustainable ecological environment. In
                2021, we obtained the EWH-EC Green Building Mark once again, and
                this time we applied assessment change under three main axes. On
                the basis of the existing indicator, the “renewable energy” was
                added. In 2022, the Kaohsiung Science Park also obtained the
                certification of the renewal of the ecological community label,
                and the green building label remains at the highest level-
                Diamond Grade, showing that STSP Bureau’s long-standing efforts
                for its original intention of maintaining the sustainable
                development and an eco-friendly environment.
              </p>
            </div>
            <div className="page_description">
              <h4>2. Greening of Landscape</h4>
              <p>
                To create a colorful image of the diversity of the planting belt
                along the main roads of Tainan and Kaohsiung Science Parks, the
                Bureau continuous to plan the landscape improvement project in
                the science parks every year to replace poor-growing arbores or
                aging shrubs. The overall landscaping is based on a
                people-oriented perspective with the concept of multi-layered
                planning. Seasonal patterns and color changes are chosen to
                match the areas around the park in four seasons to show rich and
                colorful scenery. The overall landscape is all refreshed after
                the greening and beautification of the park area is completed.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/3/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/e/tsdg11/3/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In the face of so many fallen leaves and branches, the Bureau
                started to establish a green resources recycling plant in Tainan
                Science Park where fallen leaves are mixed with organic cane
                fertilizers to make compost. Large residual branches are crashed
                into wood chips using wood chippers and are scattered in the
                green landscape planting belt in the science park. In 2016, the
                establishment of the green resource recycling plant in Kaohsiung
                Science Park was also completed for the sustainable use on the
                land of STSP. In 2022, Tainan and Kaohsiung Science Parks
                totally produced 773 tons of deciduous compost and 152 tons of
                wood chips. Based on the statistics, a total of 6,533 tons of
                compost and 2,654 tons of wood chips were produced during 2013
                and 2022.
              </p>
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=133">
                Grass Spectrum
              </Link>
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
          <strong>低碳生態社區，建築與環境共生共利</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/e/tsdg11/3/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.生態社區</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局推動綠建築，促進建築與環境共生共利，落實建築節約能源，持續降低能源消耗及減少二氧化碳之排放，為鑽石級綠建築密度最高的科學園區。臺南園區及高雄園區皆已取得鑽石級生態社區標章，佔全國鑽石級生態社區2/5，綠建築面積佔園區建築總樓地板面積25.1%。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/3/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局致力於建構「生產、生活、生態」的優質生產環境，轄下臺南園區自2013年經認證為鑽石級生態社區，並於2016年取得鑽石級綠建築標章EEWH-EC(社區類)，仍持續推動生態社區平衡及推廣永續生態環境理念，2021年再次取得綠建築標章EEWH-EC(社區類)變更評定(續用)；高雄園區亦相繼於2022年取得生態社區標章續用認證，綠建築標章維持為最高等級「鑽石級」，顯見南科管理局多年來仍持續維護永續發展、友善環境的初衷。
            </p>
          </div>
          <div className="page_description">
            <h4>2.景觀綠化</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為營造臺南、高雄園區主要道路之植栽帶多元繽粉的色彩意象，南科管理局每年持續規劃園區景觀改善工程，以汰換生長不良喬木或老化灌木。整體景觀塑造以人為本的角度思考，應用複層植栽概念，選擇具季節性形態與色彩性變化，搭配園區周邊四季色調，展現豐富景色風情，園區綠美化作業完成後整體景觀煥然一新。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/3/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/e/tsdg11/3/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;面對龐大的落葉及樹枝等植物性廢棄物，本局於2013年開始臺南園區建置綠資源回收場，將落葉與有機蔗肥拌攪後製成堆肥，大型殘枝利用碎木機絞碎成木屑，散佈於園區景觀植栽綠帶，高雄園區亦於2016年建置綠資源回收場完成，永續利用於南科土地上。2022年臺南及高雄園區草屑落葉堆肥產出量計773公噸，木屑產出量計152公噸，統計2013至2022年間，共產出堆肥成品6,533公噸、木屑成品2,654公噸。
            </p>
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=133">
              芳草譜
            </Link>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
