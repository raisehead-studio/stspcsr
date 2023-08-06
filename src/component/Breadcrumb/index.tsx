import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import "./style.scss";

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs className="custom_bradcrumbs">
      <Link href="/">
        <HomeIcon />
        首頁
      </Link>
      <Link className="disabled" href="/">
        CSR專區
      </Link>
      <Link className="active" href="/csr_company_list">
        園區廠商CSR專區
      </Link>
    </Breadcrumbs>
  );
}
