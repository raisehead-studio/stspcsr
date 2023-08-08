"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import "@/app/layout.scss";

export default function TSDG6and12() {
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
            <strong>T-SDG 6、12</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="photo_container">
              <Image
                src={"/images/g/tsdg6&12/en/photo1.png"}
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
          <strong>T-SDG 6、12</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="photo_container">
            <Image
              src={"/images/g/tsdg6&12/zh/photo1.png"}
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
