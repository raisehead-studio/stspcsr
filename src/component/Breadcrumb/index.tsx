import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname } from "next/navigation";

import path_title_map_zh from "@/data/path_title_map_zh.json";
import "./style.scss";

export default function ActiveLastBreadcrumb() {
  const [data, setData] = useState<any>([]);
  const pathname = usePathname();
  useEffect(() => {
    let base: string = "";
    const updateDate = [];
    for (let i = 0; i < pathname.split("/").length; i++) {
      if (pathname.split("/")[i] !== "") {
        base += `/${pathname.split("/")[i]}`;
      }

      updateDate.push(base);
    }

    setData(updateDate);
  }, [pathname]);

  return (
    <Breadcrumbs className="custom_bradcrumbs">
      {data.map((path: string, index: number) => {
        if (index === 0) {
          return (
            <Link href="/" key={index}>
              <HomeIcon />
              首頁
            </Link>
          );
        }

        return (
          <Link
            key={index}
            className={index === pathname.split("/").length - 1 ? "active" : ""}
            href={`/${path}`}>
            {path_title_map_zh[path as keyof typeof path_title_map_zh]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
