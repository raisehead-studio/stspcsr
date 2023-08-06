"use client";
import { useState } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./style.scss";

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState<string>("");

  const handleToggleMenu = (menuName: string) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  return (
    <div className="side_menu">
      <div className="side_menu_item active">
        <Link href="/">園區廠商csr專區</Link>
      </div>
      <div className="side_menu_item">
        <Link href="/">永續資料庫</Link>
      </div>
      <div
        className="side_menu_item is_sub_menu"
        onClick={() => handleToggleMenu("csr_sub")}>
        <Link href="/">CSR導入學習區</Link>
        <KeyboardArrowDownIcon />
      </div>
      <Collapse in={openMenu === "csr_sub"}>
        <>
          <div className="sub_side_menu_item">
            <Link href="/">如何撰寫CSR報告書</Link>
          </div>
          <div className="sub_side_menu_item">
            <Link href="/">GRI改版資訊</Link>
          </div>
          <div className="sub_side_menu_item">
            <Link href="/">「公司治理3.0-永續發展藍圖」資訊</Link>
          </div>
        </>
      </Collapse>
    </div>
  );
}
