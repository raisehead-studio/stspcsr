"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import "@/app/layout.scss";

export default function TSDG6and123() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const menu_en = [
    {
      title:
        "A Sustainable Environment for Industry, Living, Life, and Ecology",
      path: "/g",
      sub: [
        {
          title: "T-SDG6、12",
          path: "/g/tsdg6&12",
          sub: [
            {
              title:
                "Implement environmental reviews and 100% of wastewater and sewage is included in sewage pipeline",
              path: "/g/tsdg6&12/1",
            },
            {
              title:
                "Reduce water intensity in the park and improve stability of water supply",

              path: "/g/tsdg6&12/2",
            },
            {
              title: "Proper Treatment of Waste",
              path: "/g/tsdg6&12/3",
            },
          ],
        },
        {
          title: "T-SDG7",
          path: "/g/tsdg7",
          sub: [
            {
              title:
                "Installation of Renewable Energy Systems to stabilize power supply in the park",
              path: "/g/tsdg7/1",
            },
          ],
        },
      ],
    },
  ];

  const menu_zh = [
    {
      title: "精實優質服務，確保永續營運",
      path: "/g",
      sub: [
        {
          title: "T-SDG6、12",
          path: "/g/tsdg6&12",
          sub: [
            {
              title: "實施環保審查，廢污水100%納管處理",
              path: "/g/tsdg6&12/1",
            },
            {
              title: "降低園區用水強度，提升供水穩定",
              path: "/g/tsdg6&12/2",
            },
            {
              title: "廢棄物妥善處理",
              path: "/g/tsdg6&12/3",
            },
          ],
        },
        {
          title: "T-SDG7",
          path: "/g/tsdg7",
          sub: [
            {
              title: "建置再生能源系統，穩定園區供電",
              path: "/g/tsdg7/1",
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
            <strong>Proper Treatment of Waste</strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/3/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <p>
                As the park businesses develop, the industrial waste in the
                science park also increases year by year. STSPB actively
                provides counseling to park businesses to implement source
                separation and recycling to reach the goal of resource recovery,
                waste reduction and no secondary pollution. The 2022 reuse
                volume of the industrial waste in the science park reached
                504,033.50 tons, with the reuse rate of 93.19%.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/3/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In addition, to cope with the diverse types and characteristics
                of waste produced in diverse industries in Tainan Science Park,
                the Bureau has established a well-equipped Resource Recycling
                Center with waste removal equipment and treatment facilities to
                properly remove and dispose waste in the park. The process of
                waste transfer is entrusted to legal operators for removal,
                incineration, and a real-time tracking system (GPS) is installed
                on the removal and transportation equipment for management. In
                2022, the Resource Recycling Center properly processed 26,300
                tons of waste.
              </p>
              <p>
                By promoting the third phase of construction of the landfill
                site of the Resource Recycling Center in Tainan Science Park,
                the Bureau not only maintains normal waste removal and normal
                operation of the treatment facilities (equipment) but also
                strengthens the capabilities of effective treatment of general
                inorganic waste produced in the science park and increases the
                total amount and a site (the designed landfill capacity is
                90,000m3, with 15 years of service life) for safe landfill (of
                bottom ash, fly ash, etc.) of general industrial waste
                classified and incinerated. By doing so, the future needs of the
                landfill volume and scheduling as well as use of landfill sites
                can be met for the Resource Recycling Center, and it also
                demonstrates the determination to implement environmental
                protection policies.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/3/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                Note: Part of the industrial waste in Tainan Science Park is
                transported to the treatment agencies by the park manufacturers
                themselves; all industrial waste in Kaohsiung Science Park is
                transported to the treatment agencies by the park manufacturers
                themselves.
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
          <strong>廢棄物妥善處理</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/g/tsdg6&12/3/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;隨著園區事業之發展，使全園區事業廢棄物逐年增加，南科管理局積極輔導園區事業落實廢棄物源頭分類及回收，以達資源回收、廢棄物減量及無二次污染之目標，2022年全園區事業廢棄物再利用量達504,033.50公噸，再利用率達93.19%。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/3/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;另南科管理局因應臺南園區產業多元化，產生之廢棄物特性與種類也多樣化，依廢棄物特型及種類，設置完善的廢棄物清運機具及處理設施因而設置資源再生中心，以妥善清除及處理園區廢棄物，廢棄物移轉過程則委託合法業者清運、焚化，並於清運機具上安裝即時追蹤系統(GPS)進行管理，2022年共清運臺南園區廢棄物26,300公噸。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局藉由推動臺南園區資源再生中心掩埋場第三期工程，除維持常態廢棄物清除、處理設施(備)正常運作外，更加強對園區內產製一般無機性廢棄物之有效處理能力，及增加南科臺南園區一般事業廢棄物，經分類焚化處理後之底渣、飛灰等，收容總量與場所(設計掩埋容量為90,000m3，使用年限為15年)，藉以滿足園區資源再生中心之未來掩埋容積量及掩埋場調度使用等需求，並彰顯重視環境保護政策決心。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/3/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/g/tsdg6&12/3/zh/photo4.png"}
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
