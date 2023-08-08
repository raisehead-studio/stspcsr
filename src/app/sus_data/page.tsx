"use client";
import { useState } from "react";
import SideMenu from "@/component/SideMenu";
import Breadcrumb from "@/component/Breadcrumb";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

import "@/app/layout.scss";
import "./styles.scss";

function SusData() {
  const [index, setIndex] = useState("");
  const [year, setYear] = useState("");
  const [] = useState("");
  const [] = useState("");

  const menu_zh = [
    {
      title: "ESG專區",
      sub: [
        {
          title: "園區廠商專區",
          path: "/csr_company_list",
        },
        {
          title: "永續資料庫",
          path: "/sus_data",
        },
        {
          title: "ESG學習專區",
          sub: [
            {
              title: "如何撰寫報告書",
              path: "/report_writing",
            },
            {
              title: "GRI準則2021改版",
              path: "/gri",
            },
            {
              title: "公司治理3.0-永續發展藍圖",
              path: "/goverance3.0",
            },
            {
              title: "上市櫃公司永續發展行動方案",
              path: "/plan",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>永續資料庫</strong>
          <Breadcrumb />
        </div>
        <div>
          <div>
            <div>
              <h4>依指標來統計：</h4>
            </div>
            <div>
              <Select value={index}>
                <MenuItem>請選擇一項指表</MenuItem>
                <MenuItem>營業額</MenuItem>
                <MenuItem>員工人數</MenuItem>
                <MenuItem>溫室氣體排放強度</MenuItem>
                <MenuItem>能源強度</MenuItem>
                <MenuItem>用水強度</MenuItem>
                <MenuItem>廢棄物再利用率</MenuItem>
              </Select>
              <Select value={year}>
                <MenuItem>選擇年份</MenuItem>
                <MenuItem>2021</MenuItem>
                <MenuItem>2020</MenuItem>
                <MenuItem>2019</MenuItem>
                <MenuItem>2018</MenuItem>
                <MenuItem>2017</MenuItem>
                <MenuItem>2016</MenuItem>
                <MenuItem>2015</MenuItem>
              </Select>
              <FormControl>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="積體電路"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="光電產業"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="生物科技"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="通訊產業"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="精密機械"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="電腦及週邊"
                  />
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label="電腦及週邊其他園區事業"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu menu={menu_zh} />
      </div>
    </div>
  );
}

export default SusData;
