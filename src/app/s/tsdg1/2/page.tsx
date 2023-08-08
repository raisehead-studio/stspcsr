"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function TSDG12() {
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
              Expansion of the Park Area, Driving Urban Transformation, and
              Promoting Local Employment
            </strong>
            <Breadcrumb />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/en/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div>
            <div className="page_description">
              <h4>1. Overview of Development</h4>
              <p>
                In 2022, 30 manufacturers (including 12 start-up companies) were
                introduced into STSP, with an investment amount of approximately
                NTD 55.807 billion. Among the new manufacturers, 8 have the unit
                output value per hectare more than NTD 1 billion. There were 6
                plant construction projects in the same year. The cumulative
                number of validly approved manufacturers as of 2022 reached 272,
                showing that the investment attraction power of STSP continues
                to grow.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_row_container">
              <div className="page_description">
                <h4>2.Growth in Employment</h4>
                <p>
                  The industrial clusters in STSP are thriving. To assist the
                  park manufacturers in finding good talents and help the job
                  seekers with employment opportunities, STSPB works with the
                  local government and other business units to co-organize a
                  number of talent recruitment activities every year. As of
                  December, 2022, the total number of employees in STSP has
                  reached 92,601, an increase of 10.17% compared with the same
                  period in 2021. We hope to attract more excellent talents to
                  join STSP and bring vitality to the science park.
                </p>
              </div>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo3.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo4.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo5.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3.Expansion of the Park Area</h4>
              <p>
                The promotion of newly established expansion parks is estimated
                to create at least NTD 202.2 billion in output value, providing
                approximately 22,100 job opportunities, expanding the existing
                effect of industrial clusters, driving innovation of local
                industries by integrating software and hardware resources,
                strengthening regional economic resilience, and completing the
                technology corridor in southern Taiwan.
              </p>
            </div>

            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo6.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo7.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo8.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo9.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg1/2/en/photo10.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>
                Note: The above data was gathered as of the end of March, 2023.{" "}
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
          <strong>擴大園區領域，帶動城市轉型，促進地方就業</strong>
          <Breadcrumb />
        </div>
        <div className="photo_container">
          <Image
            src={"/images/s/tsdg1/2/zh/photo1.png"}
            fill={true}
            alt="profile photo"
          />
        </div>
        <div>
          <div className="page_description">
            <h4>1.發展概況</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022年引進30家廠商(包含12家新創公司)，投資金額約558.07億元，其中新引進廠商投資額大於新臺幣10億元以上者共有8家，當年度動土建廠6家，累計至2022年有效核准廠商達272家，顯見南科的投資吸引力持續發燒。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_row_container">
            <div className="page_description">
              <h4>2.就業成長</h4>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;蓬勃發展的南科產業聚落，南科管理局為協助園區廠商覓得良才及協助民眾求職需求，每年本局與地方政府及事業單位合辦多場徵才活動，2022年12月南科就業人數已達92,601人，與2021年同期增加10.17%，盼吸引更多優秀人才加入南科，為園區注入新活力。
              </p>
            </div>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo3.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo4.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo5.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.園區擴建</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;推動新設擴建園區，預估可創造至少2,022億元的產值，並提供約22,100個工作機會，擴散既有產業聚落效應，軟硬整合驅動在地產業創新，強化區域經濟韌性，建構南臺灣科技廊帶。
            </p>
          </div>

          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo6.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo7.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo8.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo9.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg1/2/zh/photo10.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>註：以上資訊至2023年3月底。 </p>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}
