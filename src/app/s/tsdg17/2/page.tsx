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
            <strong>Joint Participation in International Exhibitions</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="page_description">
              <h4>1. 2022 Bio Asia Taiwan</h4>
              <p>
                STSP Bureau joined hands with CTSP Bureau, Taiwan Instrument
                Research Institute of National Applied Research Laboratories and
                other institutions and participated in the 2022 Bio Asia-Taiwan
                Exhibition held on July 28-31 in Taipei Nankang Exhibition
                Center Hall 2. This joint participation was curated in the form
                of science-park-themed pavilions incorporated with the elements
                of “telemedicine, precision health, and industrial leaps”, and
                the R&D results of each institution served as the new visions of
                the ripple center that led the park manufacturers to expand
                their domestic and overseas markets by displaying high-quality
                products and the R&D technologies.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg17/2/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <p>
                At the 2022 Bio Asia-Taiwan Exhibition, STSPB joined hands with
                the 12 park manufacturers while the Start-up Workshop led 8
                start-up teams and 5 colleges and universities of the GLORIA 2.0
                X South Platform to showcase the innovative technologies,
                displaying the cutting-edge medical materials and biotechnology
                products at STSP.
              </p>
            </div>
            <div className="page_description">
              <h4>2. 2022 SEMOCON Taiwan </h4>
              <p>
                Taiwan’s semiconductor industry plays a pivotal role in the
                world. To promote the semiconductor industry in southern Taiwan
                and to assist park manufacturers to step into the international
                market and enter the blue ocean for greater business
                opportunities, STSPB joined hands with 8 manufacturers to
                participate in the 2022 SEMICON Taiwan held on September 14-16
                and created the STSP Image Pavilion. It is expected to create
                the momentum of the science park and spread the existing mature
                industrial cluster effect for the layout of emerging technology
                industries.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg17/2/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="page_description">
              <h4>3. MEDICA 2022</h4>
              <p>
                As the COVID-19 epidemic was gradually under control and
                countries around the world restarted overseas physical trading
                activities, STSPB helped park manufacturers seize opportunities
                and led them to participate in one of the largest medical
                technology trade fairs in the world, the MEDICA 2022 held on
                November 14-17 in Düsseldorf, Germany.
              </p>
              <p>
                To work in line with the Six Core Strategic Industries Promotion
                Project and the Five Plus Two Industrial Innovation Plans, the
                linkages between the industry, government, academia, research,
                and medical sectors is enhanced to form a complete industrial
                cluster of precision health industry. In the post-epidemic era,
                the STSPB assists park manufacturers to go deep into the
                international medical materials market and showcase Taiwan’s
                high-quality biomedical products. Five manufacturers, including
                EPED Inc., TAICEND Technology Co., Ltd., ACRO Biomedical Co.,
                Ltd., KT Medical Inc., and HUANG LIANG Biomedical Technology
                Co., Ltd. formed a strong team of biomedical manufacturers to
                showcase the latest high-quality products and R&D technologies
                such as the precision health medical equipment, wound care,
                medical aesthetics or orthopedics. By participating in the
                international fairs and exhibitions, overseas business
                opportunities in medical and health care business can be seized
                for the park manufacturers to strive for more cooperation
                opportunities. This will help the industrial cluster of the
                biomedical industry at STSP thrive and grow.
              </p>
            </div>
            <div className="photo_container">
              <Image
                src={"/images/s/tsdg17/2/en/photo3.png"}
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
          <strong>攜手參與國際大展</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="page_description">
            <h4>1.2022亞洲生技大展</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              南科管理局攜手竹、中科管理局、國研院儀科中心等單位，於7月28日至31日在南港展覽館2館舉辦的「2022亞洲生技大展」，以科學園區主題館的方式聯合策展，融合「遠距醫療、精準健康、產業躍升」等元素，以各單位研發成果為漣漪中心的新視野，領軍園區廠商拓銷國內外市場，展現優質產品及研發技術。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg17/2/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;2022亞洲生技大展南科攜手12家廠商，並由南科創業工坊帶領8組新創團隊與成大大南方科研產業化平台之5所大專院校一同亮相創新技術，展現南科新銳醫材、生技技術產品。
            </p>
          </div>
          <div className="page_description">
            <h4>2.2022國際半導體展</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;臺灣半導體產業在世界扮演舉足輕重的地位，為宣傳南臺灣半導體產業及協助園區廠商邁向國際市場、切入藍海取得更大的商機，南科管理局組成南科形象館，攜手8家廠商參加於9月14日至16日舉辦的2022國際半導體展。期望能開創園區動能，擴散既有的成熟產業聚落效應，布局新興科技產業。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg17/2/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="page_description">
            <h4>3.2022全球生技醫材產業展</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;在新冠肺炎疫情逐漸受到控制，全球各國紛紛重啟海外實體貿易活動之際，南科管理局為協助園區廠商掌握先機，帶領廠商參與國際規模最大的醫療展會之一「德國MEDICA
              2022全球生技醫材產業展」，於11月14至17日在德國杜塞道夫登場。
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科配合六大核心戰略產業推動方案及5+2產業創新基礎，鏈結園區周邊產官學研醫量能形成完善的生醫產業聚落，在後疫情時代，協助南科廠商深入國際醫材市場，展現臺灣優質生醫產品，此次帶領醫百、泰陞、亞果、康聚、皇亮生醫等5間廠商，組成陣容堅強的生醫廠商團隊，展示最新的精準健康醫療設備、傷口照護、醫美及骨科等優質產品與研發技術，透過參與國際展會，搶佔海外醫療商機，爭取更多合作機會，期使南科生醫產業聚落躍升茁壯。
            </p>
          </div>
          <div className="photo_container">
            <Image
              src={"/images/s/tsdg17/2/zh/photo3.png"}
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
