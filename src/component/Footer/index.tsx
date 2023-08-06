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
              <Link href={"/"}>電子報</Link>
            </li>
            <li>
              <Link href={"/"}>南科543</Link>
            </li>
            <li>
              <Link href={"/"}>意見回饋</Link>
            </li>
            <li>
              <Link href={"/"}>南科管理局</Link>
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
            <Link href={"/"}>電子報</Link>
          </li>
          <li>
            <Link href={"/"}>南科543</Link>
          </li>
          <li>
            <Link href={"/"}>意見回饋</Link>
          </li>
          <li>
            <Link href={"/"}>南科管理局</Link>
          </li>
        </ul>
      </div>
      <div className="container5">
        <h4>2022 © 南部科學園區 Southern Taiwan Science Park.</h4>
      </div>
    </footer>
  );
}
