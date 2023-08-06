"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight } from "react-bootstrap-icons";

import menu_zh from "../../app/data/menu_zh.json";
import menu_en from "../../app/data/menu_en.json";

import "./styles.scss";

export default function Header() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  if (lang === "en") {
    return (
      <header className="header">
        <div className="top_bar">
          <div className="top_bar_menu_container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Survey</a>
              </li>
              <li>
                <a href="/">FB</a>
              </li>
              <li>
                <a href="/">Sitemap</a>
              </li>
              <li>
                <Link href={{ pathname: "/" }}>中文</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar">
          <div>
            <a>
              <Image
                src="/images/home/en/logo.png"
                alt="logo"
                width={253}
                height={73.42}
              />
            </a>
          </div>
          <div className="menu">
            <ul>
              {menu_en.map((item) => {
                if (item.sub) {
                  return (
                    <li className="dropdown" key={item.title}>
                      <label>{item.title}</label>
                      <ul className="dropdown-content">
                        {item.sub.map((subItem) => {
                          if (subItem.sub) {
                            return (
                              <li key={subItem.title}>
                                <label>{subItem.title}</label>
                                <ChevronRight />
                                <ul className="right_drop_content">
                                  {subItem.sub.map((subSubItem) => {
                                    let path;
                                    if ("path" in subSubItem) {
                                      path = subSubItem.path;
                                    } else {
                                      path = subSubItem.sub[0].path;
                                    }
                                    return (
                                      <li key={subSubItem.title}>
                                        <Link
                                          href={
                                            lang
                                              ? {
                                                  pathname: path,
                                                  query: { lang: "en" },
                                                }
                                              : { pathname: path }
                                          }>
                                          {subSubItem.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          } else {
                            return (
                              <li key={subItem.title}>
                                <Link
                                  href={
                                    lang
                                      ? {
                                          pathname: subItem.path,
                                          query: { lang: "en" },
                                        }
                                      : { pathname: subItem.path }
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
                          lang
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

  return (
    <header className="header">
      <div className="top_bar">
        <div className="top_bar_menu_container">
          <ul>
            <li>
              <a href="/">首頁</a>
            </li>
            <li>
              <a href="/">問卷</a>
            </li>
            <li>
              <a href="/">FB</a>
            </li>
            <li>
              <a href="/">網站地圖</a>
            </li>
            <li>
              <Link href={{ pathname: "/", query: { lang: "en" } }}>EN</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar">
        <div>
          <a>
            <Image
              src="/images/home/zh/logo.png"
              alt="logo"
              width={253}
              height={73.42}
            />
          </a>
        </div>
        <div className="menu">
          <ul>
            {menu_zh.map((item) => {
              if (item.sub) {
                return (
                  <li className="dropdown" key={item.title}>
                    <label>{item.title}</label>
                    <ul className="dropdown-content">
                      {item.sub.map((subItem) => {
                        if (subItem.sub) {
                          return (
                            <li key={subItem.title}>
                              <label>{subItem.title}</label>
                              <ChevronRight />
                              <ul className="right_drop_content">
                                {subItem.sub.map((subSubItem) => {
                                  let path;
                                  if ("path" in subSubItem) {
                                    path = subSubItem.path;
                                  } else {
                                    path = subSubItem.sub[0].path;
                                  }
                                  return (
                                    <li key={subSubItem.title}>
                                      <Link
                                        href={
                                          lang
                                            ? {
                                                pathname: path,
                                                query: { lang: "en" },
                                              }
                                            : { pathname: path }
                                        }>
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li key={subItem.title}>
                              <Link
                                href={
                                  lang
                                    ? {
                                        pathname: subItem.path,
                                        query: { lang: "en" },
                                      }
                                    : { pathname: subItem.path }
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
                        lang
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
