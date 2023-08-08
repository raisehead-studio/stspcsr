"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";

export default function TSDG6and122() {
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
            <strong>
              Reduce water intensity in the park and improve stability of water
              supply
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. Stabilize water supply</h4>
              <p>
                In 2022, the rainfall in the south was less than 40% of the
                historical average, hitting a new record law in 30 years. STSP
                worked in line with the Water Resource Agency and relevant units
                in advance and started various water-saving and scheduling
                measures from August, 2022, and continued to promote measures of
                developing new water sources, reducing water use, scheduling,
                and backup to mitigate the impact of drought. From December 2,
                the yellow light for water supply (decompression water supply)
                was issued for Tainan region, and the light turned orange
                (reduced water supply) from March 1, 2023. In Kaohsiung region,
                the orange light for water supply (reduced water supply) started
                from March 30, 2023. The water supply situation in the southern
                regions was getting tighter. In response to changes in water
                conditions, STSPB has adopted the following drought-resistance
                measures in the face of severe water conditions to stabilize the
                water demand for the industrial operations in the park.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/2/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>Counseling of water conservation</p>
              <p>
                To reduce the water consumption in the science park to solve the
                urgent water problems to meet the EIA requirements and to
                cooperate with the promotion of energy conservation and carbon
                reduction policies, the Bureau has actively engaged in the
                counseling of water saving and energy conservation and
                strengthened the advocacy to encourage park manufacturers to
                build green factories.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/2/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>Develop reclaimed water sources</p>
              <p>
                In the face of the challenge brought by extreme climate, the gap
                between the rainfall and drought has widened, and the water
                environment in southern Taiwan has also been challenged.
                Industrial water use is even an issue STSP has to be prepared to
                confront. The Bureau has actively guided park manufacturers to
                use reclaimed water. In 2022, STSP has become the very first
                science park to make use of reclaimed water. The reclaimed water
                resource strategy has two directions, the use of reclaimed water
                and the exchange of water sources, which are also promoted in
                newly established park areas. The development and utilization of
                water sources are moving toward diversification and
                sustainability.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/2/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In addition, STSPB announced to solicit manufacturers to invest
                in the construction of a reclaimed water plant in the Water 7
                Land, and TSMC won the contract. To enable the cleanliness of
                reclaimed water to meet the requirements of the wafer
                manufacturing process, the complexity of wastewater treatment is
                more than 4 times that of a water treatment plant for general
                domestic water use. On September 19, 2022, the completion
                ceremony of the TSMC S.T.S.P. (Southern Taiwan Science Park)
                Reclaimed Water Plant was organized, which is the first water
                source in Taiwan to reuse the reclaimed water from semiconductor
                process water source.
              </p>
              <p>
                In response to the poor water conditions in Tainan in 1H23,
                STSPB once again coordinated the cross-ministerial and local
                government collaboration to increase the supply of reclaimed
                water from Yongkang to 9,200 CMD, to 20,000 CMD for the
                reclaimed water from the science park, and to 20,000 CMD from
                Anping Reclaimed Water Plant, reaching 49,200 CMD in total,
                accounting for nearly 1/4 of the overall tap water consumption
                in Tainan Science Park. This further enhanced the water supply
                resilience during the drought-resistant period, enabling the
                water resources in the southern regions to be shared, with more
                scheduling flexibility and providing more secure water supply.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/2/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In the face of unstable water sources under the influence of
                extreme climates, STSP has obtained support and assistance from
                multiple partners to obtain water for industrial use in the park
                area. It is estimated that the use of reclaimed water in Tainan
                Science Park will reach 93,000 CMD, accounting for 30% of the
                overall water consumption in Tainan Science Park, reducing the
                pressure of traditional water source development. To respond to
                the development needs of new science parks, STSP continues to
                cooperate with competent authorities of water sources, the
                Construction and Planning Agency, and county and city
                governments in the promotion of reclaimed water use, exchange,
                and diverse scheduling of water use so as to increase the
                resilience of water resources scheduling, reduce the dependence
                on tap water, create co-prosperity between the industry and the
                environment, and eventually reach the goal of a sustainable
                science park.
              </p>
            </div>
            <div className="page_description">
              <h4>2. Water Consumption of park manufacturers</h4>
              <p>
                The main water intake in the science park comes from tap water.
                Enterprises’ intake and consumption of water as well as the
                quality of discharged water may cause impacts on the ecosystem.
                Therefore, the Bureau assists park businesses to understand
                their overall water use status. Based on the Water Risk Atlas of
                the World Resources Institute, it shows that Tainan Science Park
                and Kaohsiung Science Park belong to Low - Medium (1-2),
                indicating that the water intake of park businesses does not
                cause a major impact on the ecological environment. Due to the
                plant expansion of the park manufacturers in 2022, the water
                intake increased. But because of the significant growth of
                annual turnover of the park business which exceeded NTD 1
                trillion, the water intensity decreased by 8.87% compared with
                2021.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/2/en/photo6.png"}
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
          <strong>降低園區用水強度，提升供水穩定</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/g/tsdg6&12/2/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.穩定供水</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年南部降雨量不到歷史平均的4成，創下30年來新低，南科配合水利署及相關單位提前部署，並2022年8月起展開各項節水調度措施，持續推動開源、節流、調度及備援各項工作，減緩旱象衝擊。於12月2日起臺南地區水情燈號轉為黃燈(減壓供水)，2023年3月1日轉為橙燈(減量供水)；高雄地區於2023年3月30日轉為橙燈(減量供水)，南部地區水情日漸吃緊。南科管理局因應水情變化，採取下列抗旱作為，面對嚴峻的水情，以穩定園區產業營運用水需求。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;節水輔導</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;為降低園區用水量，解決用水迫切問題，達成環評要求，及配合節能減碳政策的推動，南科積極投入節水節能輔導工作，並加強宣導、鼓勵園區廠商建設綠色工廠等。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;開發再生水源</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;面對極端氣候變遷，降雨枯豐差距擴大，南部的水環境也面臨挑戰，產業用水在南科，更是要正面備戰對決的功課，積極輔導園區廠商使用再生水，2022年南科園區成為全臺第一個使用再生水的科學園區，再生水資源策略有再生水使用、水源交換兩大方向，並推廣至新設園區，水資源開發與利用朝向多元及永續發展。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;另外，南科管理局公告徵求廠商於水7用地內投資興建園區再生水廠，由台積電(股)公司取得簽約，為使再生水潔淨度達到晶圓製程需求，處理廢水的複雜度相較一般民生用水要高出四倍以上。2022年9月19日辦理「台積電南科再生水廠」通水典禮，為全臺第一座首創再生水回用半導體製程水源。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;因應2023年上半年臺南地區水情不佳，管理局再度透過跨部會及地方政府合作，協調永康再生水增供到0.92萬CMD、園區再生水增供到2萬CMD、安平再生水廠於4月底增供到2萬CMD，合計達4.92萬CMD，達臺南園區自來水用量約4分之1，於抗旱期間進一步提升供水韌性，讓南部地區水資源共享，調度更靈活，供水更有保障。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;面對極端氣候下不穩定的水資源，為提供園區產業用水，南科取得多方夥伴支持與協助，預估2030年臺南園區再生水使用將達9.3萬CMD，約佔臺南園區總用水的三成，減低傳統水源開發壓力，因應新設園區開發需求，南科持續配合水利主管機關、營建署及縣市政府等，推廣再生水使用、交換與多元用水的調配，增加水源調度韌性，降低區域自來水依賴，創造產業與環境共榮的局面，達成永續園區的目標。
            </p>
          </div>
          <div className="page_description">
            <h4>2.園區廠商用水</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;園區取水以自來水為主，企業的取水和耗水量、以及排水的水質可能會造成生態系統的衝擊。因此，本局協助園區事業全面瞭解自身的用水狀況，透過世界資源研究所的「水資源風險評估工具」Water
              Risk Atlas，評估臺南園區及高雄園區皆為Low -
              Medium(1-2)，顯示園區事業取水並無造成生態環境的重大衝擊。2022年因園區廠商擴廠，故取水量增加，但園區事業年營業額大幅成長，用水強度較2021年下降8.87%，連年下降。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/2/zh/photo6.png"}
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
