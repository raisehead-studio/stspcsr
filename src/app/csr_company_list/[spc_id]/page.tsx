"use client";
import Image from "next/image";
import { Suspense } from "react";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";

import csr from "@/data/csr.json";

import "@/app/layout.scss";
import "../style.scss";

async function getData(props: { spc_id: string }) {
  const { spc_id } = props;
  const data = await csr.filter((i) => i.spc_id === spc_id)[0];

  return data;
}

export default async function Page({ params }: { params: { spc_id: string } }) {
  const { spc_id } = params;

  return (
    <Suspense fallback={<div></div>}>
      <Detail spc_id={spc_id} />
    </Suspense>
  );
}

async function Detail(props: { spc_id: string }) {
  const { spc_id } = props;
  const data = await getData({ spc_id });

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>{data?.spc_title}</strong>
          <Breadcrumb />
        </div>
        <div className="detail_content_table">
          <div className="image_container">
            <Image src={data?.com_image} fill={true} alt={data?.order_id} />
          </div>
          <div className="row">
            <div className="row_key">
              <p>公司名稱</p>
            </div>
            <div className="row_value">
              <p>{data?.spc_title || "無提供資料"}</p>
            </div>
          </div>
          <div className="row">
            <div className="row_key">
              <p>報告涵蓋期間</p>
            </div>
            <div className="row_value">
              <p>{data?.report_wy_start || "無提供資料"}</p>
            </div>
          </div>
          <div className="row">
            <div className="row_key">
              <p>報告書總頁</p>
            </div>
            <div className="row_value">
              <p>{data?.report_pages || "無提供資料"}</p>
            </div>
          </div>
          <div className="row">
            <div className="row_key">
              <p>報告書負責單位</p>
            </div>
            <div className="row_value">
              <p>{data?.report_main_division || "無提供資料"}</p>
            </div>
          </div>
          <div className="row">
            <div className="row_key" style={{ height: "122px" }}>
              <p>摘要說明</p>
            </div>
            <div className="row_value">
              <p>{data?.spc_description}</p>
            </div>
          </div>
          <div className="row">
            <div className="row_key">
              <p>公司網站</p>
            </div>
            <div className="row_value">
              <p>{data?.new_report_website || "無提供資料"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return csr;
}
