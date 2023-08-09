"use client";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";

import news from "@/data/news.json";
import Breadcrumb from "@/component/Breadcrumb";
import "../style.scss";
import "@/app/layout.scss";

export default function C1() {
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  let data: any = news;
  data = data.filter((i: any) => i.news_catgory === "2");
  data = data.sort(
    (a: any, b: any) => +new Date(b.create_date) - +new Date(a.create_date)
  );

  function currentData() {
    const begin = (page - 1) * PER_PAGE;
    const end = begin + PER_PAGE;
    return data.slice(begin, end);
  }

  function handleChangePage(_: any, value: number) {
    setPage(value);
  }

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>最新消息</strong>
          <Breadcrumb />
        </div>
        <div className="news_container">
          {currentData().map((i: any) => (
            <div className="news_item" key={i.news_id}>
              <Link href={`/news/${i.news_id}`}>{i.news_title}</Link>
              <div>
                <p>{i.create_date}</p>
              </div>
              <Link className="read_more" href={`/news/${i.news_id}`}>
                Read More
              </Link>
            </div>
          ))}
          <div className="pagination_container">
            <Pagination
              count={Math.ceil(data.length / PER_PAGE)}
              size="small"
              onChange={handleChangePage}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
