"use client";
import Link from "next/link";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";

import "../layout.scss";
import "./style.scss";

export default function CSRCompanyListPage() {
  const data = [
    {
      spc_id: "51",
      spc_title: "緯穎科技服務股份有限公司台南分公司",
      spc_industry_type: "電腦周邊",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2019",
    },
    {
      spc_id: "38",
      spc_title: "智邦科技股份有限公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "46",
      spc_title: "希華晶體科技股份有限公司南科分公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2017",
    },
    {
      spc_id: "50",
      spc_title: "啟碁科技股份有限公司南科廠",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2011",
    },
    {
      spc_id: "57",
      spc_title: "聯亞光電工業股份有限公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2018",
    },
    {
      spc_id: "60",
      spc_title: "華新科技股份有限公司高科分公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "66",
      spc_title: "亞旭電腦股份有限公司南科分公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "未上市",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "37",
      spc_title: "崇越科技股份有限公司南科分公司",
      spc_industry_type: "精密機械",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "52",
      spc_title: "台灣阿美特克股份有限公司台南分公司",
      spc_industry_type: "精密機械",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "",
    },
    {
      spc_id: "68",
      spc_title: "美商慧盛先進科技有限公司台灣分公司",
      spc_industry_type: "精密機械",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2003",
    },
    {
      spc_id: "16",
      spc_title: "帆宣系統科技股份有限公司",
      spc_industry_type: "精密儀器",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "18",
      spc_title: "南茂科技股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2014",
    },
    {
      spc_id: "19",
      spc_title: "台灣積體電路製造股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2008",
    },
    {
      spc_id: "21",
      spc_title: "聯華電子股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2011",
    },
    {
      spc_id: "36",
      spc_title: " 華邦電子股份有限公司高雄廠",
      spc_industry_type: "積體電路",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2014",
    },
    {
      spc_id: "42",
      spc_title: "東京威力科創股份有限公司南科廠",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "43",
      spc_title: "瑞昱半導體股份有限公司南科廠",
      spc_industry_type: "積體電路",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "47",
      spc_title: "台灣應用材料股份有限公司台南分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "53",
      spc_title: "台灣東喜璐機能膜股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2015",
    },
    {
      spc_id: "59",
      spc_title: "穩懋半導體股份有限公司南科分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2016",
    },
    {
      spc_id: "63",
      spc_title: "台灣田中電子股份有限公司南科分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2012",
    },
    {
      spc_id: "65",
      spc_title: "台灣富士紡精密材料股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2020",
    },
    {
      spc_id: "67",
      spc_title: "采鈺科技股份有限公司南科廠",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2020",
    },
    {
      spc_id: "71",
      spc_title: "閎康科技股份有限公司南科分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2019",
    },
    {
      spc_id: "73",
      spc_title: "榮眾科技股份有限公司南科分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2019",
    },
    {
      spc_id: "76",
      spc_title: "家登精密工業股份有限公司南科分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2020",
    },
    {
      spc_id: "55",
      spc_title: "博碩電業股份有限公司",
      spc_industry_type: "其他產業",
      spc_nature_type: "未上市",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "1",
      spc_title: "台灣大福高科技設備股份有限公司",
      spc_industry_type: "其他",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2009",
    },
    {
      spc_id: "3",
      spc_title: "三福氣體股份有限公司",
      spc_industry_type: "其他",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2015",
    },
    {
      spc_id: "75",
      spc_title: "鑫科材料科技股份有限公司路科分公司",
      spc_industry_type: "其他",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2019",
    },
    {
      spc_id: "39",
      spc_title: "友達光電股份有限公司高雄廠",
      spc_industry_type: "光電產業",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2006",
    },
    {
      spc_id: "41",
      spc_title: "台灣日東光學股份有限公司南科廠",
      spc_industry_type: "光電產業",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2001",
    },
    {
      spc_id: "54",
      spc_title: "台灣賽孚思科技股份有限公司",
      spc_industry_type: "光電產業",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2003",
    },
    {
      spc_id: "23",
      spc_title: "台灣明尼蘇達光電股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2011",
    },
    {
      spc_id: "26",
      spc_title: "和鑫光電股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2011",
    },
    {
      spc_id: "28",
      spc_title: "琳得科精密塗工股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2012",
    },
    {
      spc_id: "31",
      spc_title: "中強光電股份有限公司南科分公司",
      spc_industry_type: "光電",
      spc_nature_type: "上櫃",
      report_new_year: "2021",
      report_wy_start: "2008",
    },
    {
      spc_id: "32",
      spc_title: "群創光電股份有限公司南科分公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2021",
      report_wy_start: "2007",
    },
    {
      spc_id: "44",
      spc_title: "台灣捷恩智股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "外商",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "62",
      spc_title: "台灣日產化學股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "僑外資",
      report_new_year: "2021",
      report_wy_start: "2013",
    },
    {
      spc_id: "69",
      spc_title: "智崴資訊科技股份有限公司橋科分公司",
      spc_industry_type: "電腦週邊",
      spc_nature_type: "上櫃",
      report_new_year: "2020",
      report_wy_start: "2017",
    },
    {
      spc_id: "4",
      spc_title: "統新光訊股份有限公司",
      spc_industry_type: "通訊產業",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2012",
    },
    {
      spc_id: "11",
      spc_title: "川益科技股份有限公司",
      spc_industry_type: "精密儀器",
      spc_nature_type: "未上市",
      report_new_year: "2020",
      report_wy_start: "2014",
    },
    {
      spc_id: "12",
      spc_title: "萬潤科技股份有限公司",
      spc_industry_type: "精密儀器",
      spc_nature_type: "上櫃",
      report_new_year: "2020",
      report_wy_start: "2012",
    },
    {
      spc_id: "14",
      spc_title: "東台精機股份有限公司",
      spc_industry_type: "精密儀器",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2013",
    },
    {
      spc_id: "49",
      spc_title: "科林研發股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "外商",
      report_new_year: "2020",
      report_wy_start: "2016",
    },
    {
      spc_id: "72",
      spc_title: "新加坡商英特格股份有限公司台灣分公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "外商",
      report_new_year: "2020",
      report_wy_start: "2019",
    },
    {
      spc_id: "74",
      spc_title: "鑫明材料股份有限公司",
      spc_industry_type: "積體電路",
      spc_nature_type: "僑外資",
      report_new_year: "2020",
      report_wy_start: "2019",
    },
    {
      spc_id: "9",
      spc_title: "台灣神隆股份有限公司",
      spc_industry_type: "生物科技",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2014",
    },
    {
      spc_id: "45",
      spc_title: "聯合骨科器材股份有限公司高雄工廠",
      spc_industry_type: "生物科技",
      spc_nature_type: "上櫃",
      report_new_year: "2020",
      report_wy_start: "2016",
    },
    {
      spc_id: "56",
      spc_title: "誠泰工業科技股份有限公司",
      spc_industry_type: "光電產業",
      spc_nature_type: "上櫃",
      report_new_year: "2020",
      report_wy_start: "2018",
    },
    {
      spc_id: "64",
      spc_title: "台灣康寧顯示玻璃股份有限公司南科分公司",
      spc_industry_type: "光電產業",
      spc_nature_type: "僑外資",
      report_new_year: "2020",
      report_wy_start: "2019",
    },
    {
      spc_id: "29",
      spc_title: "瀚宇彩晶股份有限公司台南科學園區分公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2010",
    },
    {
      spc_id: "30",
      spc_title: "住華科技股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "外商",
      report_new_year: "2020",
      report_wy_start: "2008",
    },
    {
      spc_id: "34",
      spc_title: "晶元光電股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2014",
    },
    {
      spc_id: "35",
      spc_title: "台達電子工業股份有限公司台南分公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2020",
      report_wy_start: "2005",
    },
    {
      spc_id: "48",
      spc_title: "台灣穗高科技股份有限公司",
      spc_industry_type: "精密機械",
      spc_nature_type: "未上市",
      report_new_year: "2019",
      report_wy_start: "2017",
    },
    {
      spc_id: "27",
      spc_title: "茂迪股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "上櫃",
      report_new_year: "2019",
      report_wy_start: "2012",
    },
    {
      spc_id: "25",
      spc_title: "正達國際光電股份有限公司南科分公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2016",
      report_wy_start: "2015",
    },
    {
      spc_id: "10",
      spc_title: "新揚科技股份有限公司",
      spc_industry_type: "電腦周邊",
      spc_nature_type: "上市",
      report_new_year: "2015",
      report_wy_start: "2015",
    },
    {
      spc_id: "70",
      spc_title: "鈦昇科技股份有限公司橋科分公司",
      spc_industry_type: "精密機械",
      spc_nature_type: "上櫃",
      report_new_year: "2015",
      report_wy_start: "2014",
    },
    {
      spc_id: "13",
      spc_title: "晟田科技工業股份有限公司",
      spc_industry_type: "精密儀器",
      spc_nature_type: "上櫃",
      report_new_year: "2015",
      report_wy_start: "2014",
    },
    {
      spc_id: "8",
      spc_title: "景岳生物科技股份有限公司",
      spc_industry_type: "生物科技",
      spc_nature_type: "上市",
      report_new_year: "2015",
      report_wy_start: "2014",
    },
    {
      spc_id: "7",
      spc_title: "港香蘭應用生技股份有限公司",
      spc_industry_type: "生物科技",
      spc_nature_type: "未上市",
      report_new_year: "2014",
      report_wy_start: "2013",
    },
    {
      spc_id: "5",
      spc_title: "金穎生物科技股份有限公司南科分公司",
      spc_industry_type: "生物科技",
      spc_nature_type: "上櫃",
      report_new_year: "2013",
      report_wy_start: "2013",
    },
    {
      spc_id: "6",
      spc_title: "儕陞生化技術股份有限公司",
      spc_industry_type: "生物科技",
      spc_nature_type: "未上市",
      report_new_year: "2013",
      report_wy_start: "2013",
    },
    {
      spc_id: "22",
      spc_title: "新世紀光電股份有限公司",
      spc_industry_type: "光電",
      spc_nature_type: "上市",
      report_new_year: "2012",
      report_wy_start: "2011",
    },
  ];

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>園區廠商CSR專區</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局積極輔導園區廠商推動CSR、環保等相關的綠色制度，持續朝向綠色永續園區之目標邁進。至今園區內已有67家事業單位發行CSR報告書，展現園區事業社會責任經營成效。並推動廢棄物在地處理、園區植物殘枝落葉再利用、全面換置LED路燈等，成為全國第一座永續環境綠色園區，兌現環境保護及永續發展承諾。此外，持續推動園區從業勞工過勞預防與健康促進的工作，形塑科學園區安全、健康而永續的文化。以下為南科廠商推動企業社會責任報告書的資料。
            </p>
            <div>
              <div className="note_container">
                <p>註:統計至2022年09月</p>
              </div>
              <table className="table_container" cellPadding={0}>
                <thead>
                  <tr>
                    <td>編號</td>
                    <td>產業別</td>
                    <td>公司名稱</td>
                    <td>報告書最新發行年度</td>
                    <td>報告書撰寫起始年度</td>
                    <td>公司性質</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={item.spc_id}
                      className={index % 2 !== 0 ? "odd_row" : "even_row"}>
                      <td>{index + 1}</td>
                      <td>{item.spc_industry_type}</td>
                      <td>{item.spc_title}</td>
                      <td>{item.report_new_year}</td>
                      <td>{item.report_wy_start}</td>
                      <td>{item.spc_nature_type}</td>
                      <td>
                        <Link href="/">檢視</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
