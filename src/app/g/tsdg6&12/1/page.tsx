"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";

export default function TSDG6and121() {
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
              Implement environmental reviews and 100% of wastewater and sewage
              is included in sewage pipeline
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. Environmental Review</h4>
              <p>
                STSPB plays the role of a keeper to maintain the sustainable
                environment of the science park. In addition to knowing whether
                all business units actually fulfill the content of the permit,
                the Bureau also needs to conduct on-site inspections and
                follow-up the improvement so as to further review the blind
                spots of the system. By regulating all business units to operate
                in accordance with the content of the permit through feasible
                methods, the Bureau can thus implement the management of permits
                and promotion of the cap control of various types of pollution
                to promote favorable environmental quality and sustainability.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/1/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In addition, the review of Management Regulations for Air
                Pollution Control Facilities and review of runoff wastewater
                pollution reduction plan at construction sites for construction
                projects in Tainan and Kaohsiung Science Parks were made.
                Regarding the environmental protection facilities in the science
                park, in addition to random inspection and monitoring by
                dispatched personnel, environmental protection authorities such
                as the EPA, the Environmental Protection Bureau of Tainan City
                and Kaohsiung City would also carry out inspections from time to
                time since the sewage treatment volume and waste disposal volume
                both reach a certain scale.
              </p>{" "}
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/1/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>2.Wastewater Treatment</h4>
              <p>
                Sewage discharged from the factories in the park is collected by
                the sewer pipeline, and the acceptance rate reaches 100%. In
                2021, all the wastewater generated in the whole science park was
                properly treated and met the influent standards of the science
                park before being discharged into the sewage system. After
                treatment, the quality of all discharged water meets the
                effluent standards and the discharged water eventually flow to
                the sea. Part of the discharged water is recycled for equipment
                cleaning, plant watering and landscape ponds.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/1/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/g/tsdg6&12/1/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
              <Image
                src={"/images/g/tsdg6&12/1/en/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3. Monitoring of the Environment</h4>
              <p>
                The major monitoring items in the science park all met the legal
                requirements. Detailed indicators and data of monitoring are
                regularly disclosed on the official website of the STSPB. Please
                go to the “Environmental Monitoring Data” section for details.
                In 2022, STSPB received 1 complaint of pipe with white smoke,
                which was investigated and handled immediately.
              </p>
              <div className="link_container">
                <p>Related link:</p>
                <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=332">
                  Environmental monitoring data query
                </Link>
              </div>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/1/en/photo7.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                In accordance with Air Pollution Control Act, in addition to
                GHG, STSPB also takes regular inventories of various air
                pollutants, including nitrogen oxides, sulfur oxides, volatile
                organic compounds and particulate matters to reduce
                environmental burden.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/1/en/photo8.png"}
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
          <strong>實施環保審查，廢污水100%納管處理</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/g/tsdg6&12/1/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.環保審查</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局扮演著園區永續環境的維護者，除了瞭解各事業單位是否確實履行許可內容，也必須至現場查核及追蹤，才可進一步檢討制度上之盲點，藉由可行的方式規範各事業依循許可證登載內容操作，並落實許可證管理以及推動各污染總量管制之基礎工作，以利於整體環境品質與永續之推動。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;另外，針對臺南園區及高雄園區的營建工程進行營建工地空氣污染防制設施查核及營建工地逕流廢水污染削減計畫查核；針對園區內各項環保設施，除了平時密集派員抽查監控外，另外因為園區無論是污水處理量或是廢棄物處理量都有一定規模，環保主管機關如環保署及臺南市、高雄市環保局都會不定期安排稽查行動。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>2.廢污水處理</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;園區內工廠排放污水統一由下水道管線收集，納管率達100%，2022年全園區所產生的廢水經過妥善處理，符合園區污水納管標準，才排放至園區污水下水道系統，經污水廠處理後之放流水水質均符合放流水標準，最終流向海洋，而部分放流水則回收用於污水廠內設備清洗、植栽澆灌及景觀水池。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo6.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.環境監測</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;園區內主要監測項目皆符合法規標準，各監測項目之詳細監測指標、數據等皆定期於南科管理局網站公告，可至「環境監測資料」區查詢。2022年南科管理局接獲1件陳情管道白煙事件，接獲後立即進行瞭解並完成處置。
            </p>
            <div className="link_container">
              <p>相關連結:</p>
              <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=332">
                環境監測資料查詢
              </Link>
            </div>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo7.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;溫室氣體濃度的增加致使地球的溫室效應愈來愈顯著，全球暖化的結果，不僅影響著生物生態，對人類經濟活動也是很大傷害，而對地球生物十分重要的臭氧層亦因此遭到破壞。南科管理局瞭解並正視其嚴重性，致力環境保護外，局內並未使用任何破壞臭氧層之物質，2022年亦無排放對環境及臭氧層有重大影響之有害氣體。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/1/zh/photo8.png"}
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
