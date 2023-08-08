"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { usePathname, useSearchParams } from "next/navigation";

import "./style.scss";

export default function SideMenu(props: { menu: any }) {
  const { menu } = props;
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string>("");

  const handleToggleMenu = (menuName: string) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  useEffect(() => {
    const path = pathname.split("/");
    if (path.length === 4) {
      setOpenMenu(`/${path[1]}/${path[2]}`);
    }
  }, [pathname]);

  return (
    <div className="side_menu">
      {menu.map((item: any, index: number) => {
        return (
          <>
            <div
              className={
                item.path === pathname
                  ? "side_menu_item is_sub_menu active"
                  : "side_menu_item is_sub_menu"
              }
              key={item.title}>
              <Link
                href={
                  lang === "en"
                    ? {
                        pathname: item.path,
                        query: {
                          lang: "en",
                        },
                      }
                    : {
                        pathname: item.path,
                      }
                }>
                {item.title}
              </Link>
            </div>
            {item.sub !== undefined && (
              <Collapse in={true}>
                <>
                  {item.sub.map((sub_item: any) => (
                    <>
                      <div
                        className={
                          sub_item.path === pathname
                            ? "sub_side_menu_item active"
                            : "sub_side_menu_item"
                        }
                        key={sub_item.title}>
                        <Link
                          href={
                            lang === "en"
                              ? {
                                  pathname: sub_item.path,
                                  query: {
                                    lang: "en",
                                  },
                                }
                              : {
                                  pathname: sub_item.path,
                                }
                          }>
                          {sub_item.title}
                        </Link>
                        {sub_item.sub ? (
                          <>
                            {openMenu === sub_item.path ? (
                              <KeyboardArrowDownIcon
                                onClick={() => handleToggleMenu(sub_item.path)}
                              />
                            ) : (
                              <KeyboardArrowUpIcon
                                onClick={() => handleToggleMenu(sub_item.path)}
                              />
                            )}
                          </>
                        ) : null}
                      </div>
                      {sub_item.sub && (
                        <Collapse in={openMenu === sub_item.path}>
                          <>
                            {sub_item.sub.map((sub_item: any) => (
                              <div
                                className={
                                  sub_item.path === pathname
                                    ? "sub_side_menu_item third_layer active"
                                    : "sub_side_menu_item third_layer"
                                }
                                key={sub_item.title}>
                                <Link
                                  href={
                                    lang === "en"
                                      ? {
                                          pathname: sub_item.path,
                                          query: {
                                            lang: "en",
                                          },
                                        }
                                      : {
                                          pathname: sub_item.path,
                                        }
                                  }>
                                  {sub_item.title}
                                </Link>
                              </div>
                            ))}
                          </>
                        </Collapse>
                      )}
                    </>
                  ))}
                </>
              </Collapse>
            )}
          </>
        );
      })}
    </div>
  );
}
