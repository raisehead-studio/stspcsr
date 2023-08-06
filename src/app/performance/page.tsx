"use client";
import Breadcrumb from "@/component/Breadcrumb";
import SideMenu from "@/component/SideMenu";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import "../layout.scss";
import "./styles.scss";

export default function Performance() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang) {
    return (
      <div className="page_layout">
        <div className="page_content">
          <div className="page_header">
            <strong>2022 Sustainability Management Performance</strong>
            <Breadcrumb />
          </div>
          <div>
            <table className="performance_table" cellPadding={0}>
              <tbody>
                <tr>
                  <td rowSpan={3}>
                    <strong>Environment</strong>
                  </td>
                  <td>
                    93.19% <br />
                    <span>
                      The reuse rate of the industrial waste in the science park
                    </span>
                  </td>
                  <td>
                    6 business units <br />
                    <span>Provided energy conservation counseling</span>
                  </td>
                  <td>
                    1,828.09百萬公升 <br /> <span>全園區回收水量</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    100% <br /> <span>排放水質符合「放流水標準」</span>
                  </td>
                  <td>
                    達4.29 MW <br /> <span>裝設太陽能發電系統</span>
                  </td>
                  <td>
                    14場次，405人次參與 <br /> <span>辦理環境教育課程</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="no_border_td">
                    <div>
                      <div>
                        綠建築標章「鑽石級」最高等級 <br />
                        高雄園區取得生態社區標章續用認證
                      </div>
                      <div>
                        臺南園區共7種、高雄園區共8種 <br />
                        觀測到農委會公告之保育鳥類
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}>
                    <strong>Social</strong>
                  </td>
                  <td colSpan={3} className="no_border_td">
                    <div>
                      <div>
                        共48團、951人次 <br />
                        國內外訪客到訪南科
                      </div>
                      <div>
                        7場 <br />
                        南科新港社地方文化館舉辦展演
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="no_border_td">
                    <div>
                      <div>
                        100％ <br />
                        南科所屬園區之整體健康服務率
                      </div>
                      <div>
                        80場次 <br />
                        推動「職場安全衛生臨場輔導」
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    986場次 <br />
                    辦理勞動檢查(含職業安全衛生檢查及勞動條件檢查)
                  </td>
                  <td>
                    77場次，累計受訓1,583人次 <br />
                    辦理職業災害模擬教育訓練
                  </td>
                  <td>
                    2場次，合計46家廠商參加 <br />
                    辦理「職場平權暨性騷擾防治研習會」
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <strong>Governance</strong>
                  </td>
                  <td>
                    達1兆4,833.74億元，成長35.48%
                    <br /> 全年營業額
                  </td>
                  <td>
                    達272家
                    <br /> 累計有效核准廠商
                  </td>
                  <td>
                    引進30家，558.07億元
                    <br /> 新廠商、投資金額
                  </td>
                </tr>
                <tr>
                  <td>
                    高雄園區管1新商圈開幕 <br />
                    提升園區從業人員生活便利性
                  </td>
                  <td>
                    1場，參與人數100人次以上 <br />
                    辦理反貪活動廉政宣導
                  </td>
                  <td>
                    6,864小時，平均42小時/人 <br />
                    南科管理局人員總訓練時數
                  </td>
                </tr>
              </tbody>
            </table>
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
          <strong>2022永續管理績效</strong>
          <Breadcrumb />
        </div>
        <div>
          <table className="performance_table" cellPadding={0}>
            <tbody>
              <tr>
                <td rowSpan={3}>
                  <strong>Environment</strong>
                </td>
                <td>
                  93.19% <br />
                  <span>全園區事業廢棄物再利用率</span>
                </td>
                <td>
                  節能6家、節水６家 <br />
                  <span>園區事業輔導</span>
                </td>
                <td>
                  1,828.09百萬公升 <br /> <span>全園區回收水量</span>
                </td>
              </tr>
              <tr>
                <td>
                  100% <br /> <span>排放水質符合「放流水標準」</span>
                </td>
                <td>
                  達4.29 MW <br /> <span>裝設太陽能發電系統</span>
                </td>
                <td>
                  14場次，405人次參與 <br /> <span>辦理環境教育課程</span>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="no_border_td">
                  <div>
                    <div>
                      綠建築標章「鑽石級」最高等級 <br />
                      高雄園區取得生態社區標章續用認證
                    </div>
                    <div>
                      臺南園區共7種、高雄園區共8種 <br />
                      觀測到農委會公告之保育鳥類
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan={3}>
                  <strong>Social</strong>
                </td>
                <td colSpan={3} className="no_border_td">
                  <div>
                    <div>
                      共48團、951人次 <br />
                      國內外訪客到訪南科
                    </div>
                    <div>
                      7場 <br />
                      南科新港社地方文化館舉辦展演
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="no_border_td">
                  <div>
                    <div>
                      100％ <br />
                      南科所屬園區之整體健康服務率
                    </div>
                    <div>
                      80場次 <br />
                      推動「職場安全衛生臨場輔導」
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  986場次 <br />
                  辦理勞動檢查(含職業安全衛生檢查及勞動條件檢查)
                </td>
                <td>
                  77場次，累計受訓1,583人次 <br />
                  辦理職業災害模擬教育訓練
                </td>
                <td>
                  2場次，合計46家廠商參加 <br />
                  辦理「職場平權暨性騷擾防治研習會」
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <strong>Governance</strong>
                </td>
                <td>
                  達1兆4,833.74億元，成長35.48%
                  <br /> 全年營業額
                </td>
                <td>
                  達272家
                  <br /> 累計有效核准廠商
                </td>
                <td>
                  引進30家，558.07億元
                  <br /> 新廠商、投資金額
                </td>
              </tr>
              <tr>
                <td>
                  高雄園區管1新商圈開幕 <br />
                  提升園區從業人員生活便利性
                </td>
                <td>
                  1場，參與人數100人次以上 <br />
                  辦理反貪活動廉政宣導
                </td>
                <td>
                  6,864小時，平均42小時/人 <br />
                  南科管理局人員總訓練時數
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="page_sidemenu">
        <SideMenu />
      </div>
    </div>
  );
}
