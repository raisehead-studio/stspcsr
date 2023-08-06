"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "@/app/layout.scss";
import "./styles.scss";

export default function CSRCompanyListPage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>Introduction to STSP</strong>
            <Breadcrumb />
          </div>
          <div>
            <div className="page_description">
              <p>
                Southern Taiwan Science Park Bureau, National Science and
                Technology Council is the designated administrative agency
                located in the Tainan Science Park, Southern Taiwan Science Park
                in Tainan City, which is affiliated to the National Science and
                Technology Council. In accordance with the Organizational Act,
                the STSPB shall have one Director-General, two Deputy
                Director-Generals, one Chief Secretary, and 10 divisions and
                offices, including the Investment Services Division, Business
                Division, Environment & Labor Affairs Division, Construction
                Management Division, Land Development Division, Planning
                Division, Secretariat, Personnel Office, Accounting and
                Statistics Office and Civil Service Ethics Office, and the
                functions of the divisions and offices cover all the affairs in
                the science parks.
              </p>
            </div>
            <div className="about_stsp_photo_container">
              <Image
                src={"/images/about_stsp/en/photo1.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=19">
                組織職掌
              </Link>
            </div>
            <div className="page_description">
              <h4>Scale of Budget</h4>
              <p>
                As a public agency, the funds needed are for STSPB to promote
                administrative affairs, perform official duties and maintain
                park operations. The budgets are from the national treasure and
                self-fundraising.
              </p>
            </div>
            <div className="about_stsp_photo_container">
              <Image
                src={"/images/about_stsp/en/photo2.png"}
                fill={true}
                alt="profile photo"
              />
            </div>
            <div className="link_container">
              <p>Related link:</p>
              <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&pageID=1570&thisRootID=206&PageNbr=1">
                STSPB budget, monthly final and accounting reports
              </Link>
            </div>
          </div>
        </div>
        <div className="page_sidemenu">
          <SideMenu />
        </div>
      </div>
    );
  }

  return (
    <div className="page_layout">
      <div className="page_content">
        <div className="page_header">
          <strong>南科管理局簡介</strong>
          <Breadcrumb />
        </div>
        <div>
          <div className="page_description">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;國家科學及技術委員會南部科學園區管理局為設於臺南市南部科學園區臺南園區的南科專責行政機關，隸屬於國家科學及技術委員會，依據組織法下設局長1人、副局長2人、主任秘書1人及投資組、工商組、環安組、營建組、建管組、企劃組、秘書室、人事室、主計室、政風室等10個組室，綜理整個園區事務。
            </p>
          </div>
          <div className="about_stsp_photo_container">
            <Image
              src={"/images/about_stsp/zh/photo1.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=19">
              組織職掌
            </Link>
          </div>
          <div className="page_description">
            <h4>預算規模</h4>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;南科管理局為公務機關，所需經費主要用於推展政務、執行公務及維持園區營運，預算來源包含國庫負擔及自行籌措。
            </p>
          </div>
          <div className="about_stsp_photo_container">
            <Image
              src={"/images/about_stsp/zh/photo2.png"}
              fill={true}
              alt="profile photo"
            />
          </div>
          <div className="link_container">
            <p>相關連結:</p>
            <Link href="https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&pageID=1570&thisRootID=206&PageNbr=1">
              預算、決算及會計月報
            </Link>
          </div>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
