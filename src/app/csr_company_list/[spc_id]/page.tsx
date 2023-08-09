"use client";
import Image from "next/image";

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
          <div style={{ display: "flex" }}>
            <div>公司名稱</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>最新報告書名稱</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>報告涵蓋期間</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>報告依循準則</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>報告書總頁</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>報告書負責單位</div>
            <div>
              <p>{data?.spc_title}</p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>摘要說明</div>
            <div>
              <p>{data?.spc_title}</p>
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
