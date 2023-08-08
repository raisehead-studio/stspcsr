"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";

import menu_zh from "@/data/menu_zh.json";
import menu_en from "@/data/menu_en.json";

import "./styles.scss";

export default function Header() {
  const [openItem, setOpenItem] = useState<string>("");
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const handleSetOPenItem = (item: string) => {
    setOpenItem(item);
  };

  return (
    <header className="header">
      <div className="top_bar">
        <div className="top_bar_menu_container">
          <ul>
            {(lang === "en"
              ? [
                  {
                    title: "Home",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "Survey",
                    path: "https://forms.gle/kvTyN4R5wKAwxanX7",
                    isOpenNewTab: true,
                  },
                  {
                    title: "FB",
                    path: "https://www.facebook.com/stsp543/?ref=ts&fref=ts",
                    isOpenNewTab: true,
                  },
                  {
                    title: "Site Map",
                    path: { pathname: "/sitemap", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "中文",
                    path: "/",
                    isOpenNewTab: false,
                  },
                ]
              : [
                  {
                    title: "首頁",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "問卷",
                    path: "https://forms.gle/kvTyN4R5wKAwxanX7",
                    isOpenNewTab: true,
                  },
                  {
                    title: "FB",
                    path: "https://www.facebook.com/stsp543/?ref=ts&fref=ts",
                    isOpenNewTab: true,
                  },
                  {
                    title: "網站地圖",
                    path: { pathname: "/sitemap", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                  {
                    title: "EN",
                    path: { pathname: "/", query: { lang: "en" } },
                    isOpenNewTab: false,
                  },
                ]
            ).map((item) => (
              <li key={item.title}>
                <Link
                  target={item.isOpenNewTab ? "_blank" : ""}
                  href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar">
        <div>
          <a>
            <Image
              src={
                lang === "en"
                  ? "/images/home/en/logo.png"
                  : "/images/home/zh/logo.png"
              }
              alt="logo"
              width={253}
              height={73.42}
            />
          </a>
        </div>
        <div className="menu">
          <ul>
            {(lang === "en" ? menu_en : menu_zh).map((item) => {
              if (item.sub) {
                return (
                  <li className="dropdown" key={item.title}>
                    <label>{item.title}</label>
                    <ul className="dropdown-content">
                      {item.sub.map((subItem) => {
                        if (subItem.sub) {
                          return (
                            <li
                              className="third_sub_menu"
                              key={subItem.title}
                              onMouseEnter={() =>
                                handleSetOPenItem(subItem.title)
                              }
                              onMouseLeave={() => handleSetOPenItem("")}>
                              <Link
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                                {openItem === subItem.title ? (
                                  <KeyboardArrowDownIcon />
                                ) : (
                                  <KeyboardArrowUpIcon />
                                )}
                              </Link>

                              <Collapse in={openItem === subItem.title}>
                                <ul className="third_sub_menu_item">
                                  {subItem.sub.map((subSubItem) => (
                                    <li key={subSubItem.title}>
                                      <Link
                                        style={
                                          subItem.title ===
                                            "Game(under maintenance)" ||
                                          subItem.title === "小遊戲(維護中)"
                                            ? { pointerEvents: "none" }
                                            : {}
                                        }
                                        href={
                                          lang === "en"
                                            ? {
                                                pathname: subSubItem.path,
                                                query: {
                                                  lang: "en",
                                                },
                                              }
                                            : {
                                                pathname: subSubItem.path,
                                              }
                                        }>
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </Collapse>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subItem.title}>
                              <Link
                                href={
                                  lang === "en"
                                    ? {
                                        pathname: subItem.path,
                                        query: {
                                          lang: "en",
                                        },
                                      }
                                    : {
                                        pathname: subItem.path,
                                      }
                                }>
                                {subItem.title}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li className="dropdown" key={item.title}>
                    <Link
                      href={
                        lang === "en"
                          ? {
                              pathname: item.path,
                              query: { lang: "en" },
                            }
                          : { pathname: item.path }
                      }>
                      {item.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
