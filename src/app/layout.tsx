import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "react-bootstrap-icons";

import "./layout.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="top_bar">
            <div className="top_bar_menu_container">
              <ul>
                <li>
                  <a href="/">南科管理局</a>
                </li>
                <li>
                  <a href="/">問卷</a>
                </li>
                <li>
                  <a href="/">FB</a>
                </li>
                <li>
                  <a href="/">網站地圖</a>
                </li>
                <li>
                  <a href="/">EN</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar">
            <div>
              <a>
                <Image
                  src="https://www.stspcsr.com.tw/images/home_logo/logo_2022.png"
                  alt="logo"
                  width={253}
                  height={73.42}
                />
              </a>
            </div>
            <div className="menu">
              <ul>
                <li className="dropdown">
                  <Link href="/">首頁</Link>
                </li>
                <li className="dropdown">
                  <label>最新消息</label>
                  <ul className="dropdown-content">
                    <li>
                      <Link href={"/"}>新聞中心</Link>
                    </li>
                    <li>
                      <Link href={"/"}>最新消息</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  2021年永續報告書
                  <ul className="dropdown-content">
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=131">
                        局長的話
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=143">
                        年度亮點績效
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=144">
                        關於南科
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link href="https://www.stspcsr.com.tw/?id=184">
                        專欄
                      </Link>
                      {/* <ul class="dropdown-menu">
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=145">
                            共同防疫 守護園區
                          </a>
                        </li>
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=147">
                            擴大園區領域
                          </a>
                        </li>
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=148">
                            建置5G場域
                          </a>
                        </li>
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=146">
                            防災教育訓練中心
                          </a>
                        </li>
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=149">
                            小熊托嬰中心路科館
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="dropdown-submenu">
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=150">
                        實踐永續管理
                      </Link>
                      {/* <ul class="dropdown-menu dropdown-menu-left">
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=158">
                            與利害關係人溝通
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=160">
                            重大議題鑑別與目標
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=161">
                            永續發展目標
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=151">
                        Environment 環境友善
                      </Link>
                      {/* <ul class="dropdown-menu dropdown-menu-left">
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=162">
                            能資源管理
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=163">
                            污染防治
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=164">
                            綠能再生
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=165">
                            生態保育
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=166">
                            智慧防災應變體系
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=152">
                        Social 優質園區
                      </Link>
                      {/* <ul class="dropdown-menu dropdown-menu-left">
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=157">
                            發展概況
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=167">
                            產業聚落擴展
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=168">
                            新創動能
                          </a>
                        </li>

                        <li>
                          <a href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=169">
                            國際交流
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=156">
                        Social 社區和諧
                      </Link>
                      {/* <ul class="dropdown-menu dropdown-menu-left">
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=170">
                            人才就業
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=171">
                            關鍵培育
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=173">
                            友善職場
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=172">
                            安全防護
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=174">
                            樂活南科
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=175">
                            敦親睦鄰
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=153">
                        Governance 誠信治理
                      </Link>
                      {/* <ul>
                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=176">
                            組織結構
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=177">
                            員工編制
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=179">
                            進修培訓
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=180">
                            法遵與內控
                          </a>
                        </li>

                        <li>
                          <a
                            style="font-size: 15px"
                            href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=181">
                            採購與供應管理
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=183">
                        未來展望
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <label>CSR專區</label>
                  <ul className="dropdown-content">
                    <li>
                      <Link href="/">園區廠商csr專區</Link>
                    </li>
                    <li>
                      <Link href="/">永續資料庫</Link>
                    </li>
                    <li>
                      <Link href="/">CSR導入學習區</Link>
                      <ChevronRight />
                      <ul className="right_drop_content">
                        <li>
                          <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=142">
                            如何撰寫CSR報告書
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=154">
                            GRI改版資訊
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=155">
                            {" "}
                            「公司治理3.0-永續發展藍圖」資訊
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <label>互動專區</label>
                  <ul className="dropdown-content">
                    <li>
                      <Link href="/">影音專區</Link>
                    </li>
                    <li>
                      <Link href="/">報告下載書</Link>
                    </li>
                    <li>
                      <Link href="/">遊戲互動區</Link>
                    </li>
                    <li>
                      <Link href="/">好站連結</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main>
          {children}
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
        </main>
      </body>
    </html>
  );
}