"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import "./styles.scss";

export default function Header() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  if (lang === "en") {
    return (
      <footer className="footer">
        <div className="container1">
          <Image
            width={100}
            height={100}
            src="/images/stslogo.png"
            alt="stslogo"
          />
        </div>
        <div className="container2">
          <div>
            <Image
              width={30}
              height={40}
              src="	https://www.stspcsr.com.tw/images/home/pin.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <p className="name">Tainan Science Park</p>
            </div>
            <div>
              <p className="address">
                No. 22, Nanke 3rd Rd.,Xinshi Dist.,Tainan City
                744-094,Taiwan,R.O.C
              </p>
            </div>
            <div>
              <p>Tel : +886-505-1001</p>
            </div>
            <div>
              <p>Fax : +886-505-0470</p>
            </div>
          </div>
        </div>
        <div className="container3">
          <div>
            <Image
              width={30}
              height={40}
              src="	https://www.stspcsr.com.tw/images/home/pin.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <p className="name">Kaohsiung Science Park</p>
            </div>
            <div>
              <p className="address">
                No.23, Luke 5th Rd., Luzhu Dist.,Kaohsiung City 821-011, Taiwan
                (R.O.C.)（Traffic）
              </p>
            </div>
            <div>
              <p>Tel : (07)607-5545</p>
            </div>
            <div>
              <p>Fax : (07)607-5549</p>
            </div>
          </div>
        </div>
        <div className="container4">
          <ul>
            <li>
              <Link
                href={
                  "https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=85"
                }>
                Newsletter
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/stsp543/?ref=ts&fref=ts"}>
                STSP 543
              </Link>
            </li>
            <li>
              <Link href={"/"}>Feedback</Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={
                  "https://www.stsp.gov.tw/web/indexGroups?frontTarget=DEFAULT"
                }>
                STSP GOV
              </Link>
            </li>
          </ul>
        </div>
        <div className="container5">
          <h4>2022 © 南部科學園區 Southern Taiwan Science Park.</h4>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container1">
        <h4>國家科學及技術委員會</h4>
        <h4>南部科學園區管理局</h4>
      </div>
      <div className="container2">
        <div>
          <Image
            width={30}
            height={40}
            src="	https://www.stspcsr.com.tw/images/home/pin.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <p className="name">南科管理局</p>
          </div>
          <div>
            <p className="address">744-094臺南市新市區南科三路22號</p>
          </div>
          <div>
            <p>電話:(06)505-1001</p>
          </div>
          <div>
            <p>傳真:(06)505-0470</p>
          </div>
        </div>
      </div>
      <div className="container3">
        <div>
          <Image
            width={30}
            height={40}
            src="	https://www.stspcsr.com.tw/images/home/pin.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <p className="name">高雄園區</p>
          </div>
          <div>
            <p className="address">821-011高雄市路竹區路科五路23號</p>
          </div>
          <div>
            <p>電話:(07)607-5545</p>
          </div>
          <div>
            <p>傳真:(07)607-5549</p>
          </div>
        </div>
      </div>
      <div className="container4">
        <ul>
          <li>
            <Link
              href={
                "https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=DEFAULT&thisRootID=85"
              }>
              電子報
            </Link>
          </li>
          <li>
            <Link href={"/https://www.facebook.com/stsp543/?ref=ts&fref=ts"}>
              南科543
            </Link>
          </li>
          <li>
            <Link
              href={
                "/https://www.stsp.gov.tw/feedback/?opg=Y&frontTarget=DEFAUL"
              }>
              意見回饋
            </Link>
          </li>
          <li>
            <Link
              href={
                "/https://www.stsp.gov.tw/web/indexGroups?frontTarget=DEFAULT"
              }>
              南科管理局
            </Link>
          </li>
        </ul>
      </div>
      <div className="container5">
        <h4>2022 © 南部科學園區 Southern Taiwan Science Park.</h4>
      </div>
    </footer>
  );
}
