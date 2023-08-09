"use client";
import news from "@/data/news.json";
import Breadcrumb from "@/component/Breadcrumb";

import "@/app/layout.scss";
import "../../style.scss";

async function getData(props: { news_id: string }) {
  const { news_id } = props;
  let source: any = news;
  const data = await source.filter((i: any) => i.news_id === news_id)[0];

  return data;
}

export default async function Page({
  params,
}: {
  params: { news_id: string };
}) {
  const { news_id } = params;
  const data = await getData({ news_id });

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>{data?.news_title}</strong>
          <Breadcrumb />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.news_content }} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  let source: any = news;
  return source.filter((i: any) => i.news_catgory === "0");
}
