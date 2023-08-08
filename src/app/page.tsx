"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { useSearchParams } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";

import CardWithMoreEffect from "@/component/CardWithMoreEffect";
import RunningNumbers from "@/component/RunningNumbers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

export default function Home({}: Props) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const [props, api] = useSpring(
    () => ({
      from: { number: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  if (lang === "en") {
    return (
      <>
        <section>
          <Carousel showArrows={true} autoPlay infiniteLoop>
            <div>
              <a href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=143">
                <Image
                  alt=""
                  src="/images/home/en/banner1.jpg"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  alt=""
                  src="/images/home/en/banner2.jpg"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
            <div>
              <a href="">
                <Image
                  alt=""
                  src="/images/home/en/banner3.jpg"
                  sizes={"100vw"}
                  width={500}
                  height={400}
                />
              </a>
            </div>
          </Carousel>
        </section>
        <section className="performance_data_section">
          <div className="performance_data_container">
            <div className="head" style={{ whiteSpace: "nowrap" }}>
              <p className="eternal">Sustainability Management Performance</p>
              <p className="year">2022</p>
            </div>
            <div className="data_container data_container1">
              <div className="data_value">
                <p>
                  5,264<span>小時</span>
                </p>
              </div>
              <div className="data_type">
                <p>在職人員總訓練</p>
              </div>
            </div>
            <div className="data_container data_container2">
              <div className="data_value">
                <p>
                  44.484<span>萬噸</span>
                </p>
              </div>
              <div className="data_type">
                <p>累計年節水潛量</p>
              </div>
            </div>
            <div className="data_container data_container3">
              <div className="data_value">
                <p>
                  1<span>兆</span>948<span>億元</span>
                </p>
              </div>
              <div className="data_type">
                <p>總營業額</p>
              </div>
            </div>
            <div className="data_container data_container4">
              <div className="data_value">
                <p>
                  90.62<span>%</span>
                </p>
              </div>
              <div className="data_type">
                <p>廢棄再利用率</p>
              </div>
            </div>
            <div className="data_container data_container5">
              <div className="data_value">
                <p>
                  8,965.2<span>萬度</span>
                </p>
              </div>
              <div className="data_type">
                <p>累計年節電潛量</p>
              </div>
            </div>
            <div className="data_container data_container6">
              <div className="data_value">
                <p>
                  1,011<span>場</span>
                </p>
              </div>
              <div className="data_type">
                <p>勞動檢查</p>
              </div>
            </div>
            <div className="menu_button">
              <Link href={"/"}>MORE</Link>
            </div>
          </div>
        </section>
        <section className="content_section">
          <div className="container1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v1lgmDckSl4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}></iframe>
          </div>
          <div className="container2">
            <iframe
              width="560"
              height="315"
              src="https://www.facebook.com/stsp543/?ref=embed_page"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}></iframe>
          </div>
          <div className="container3">
            <CardWithMoreEffect
              small
              height={"370"}
              image_src="/images/home/en/team_icon4.jpg"
              alt="team"
            />
            <div>
              <CardWithMoreEffect
                small
                height={"170"}
                image_src="/images/home/en/team_icon2.jpg"
                alt="team"
              />
              <CardWithMoreEffect
                small
                height={"170"}
                image_src="/images/home/en/team_icon3.jpg"
                alt="team"
              />
            </div>
          </div>
          <div className="container4">
            <CardWithMoreEffect
              height={"370"}
              image_src="/images/home/en/team_icon1.jpg"
              alt="team"
              small={false}
            />
          </div>
        </section>
        <section className="download_section">
          <div className="head">
            <h2>Report Download</h2>
            <hr />
          </div>
          <div>
            <Slider
              dots={false}
              infinite={true}
              speed={100}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/2018%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                    width={245}
                    height={345}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/2017%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                    width={245}
                    height={345}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/2016%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                    width={245}
                    height={345}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="	https://www.stspcsr.com.tw/user_files/report/2015_s.jpg"
                    width={245}
                    height={155}
                    alt="team"
                  />
                </Link>
              </div>

              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_01.jpg"
                    width={245}
                    height={145}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_02.jpg"
                    width={245}
                    height={145}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_03.jpg"
                    width={245}
                    height={145}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_04.jpg"
                    width={245}
                    height={145}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_05.jpg"
                    width={245}
                    height={105}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_06.jpg"
                    width={245}
                    height={105}
                    alt="team"
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src="https://www.stspcsr.com.tw/user_files/report/download_07.jpg"
                    width={245}
                    height={145}
                    alt="team"
                  />
                </Link>
              </div>
            </Slider>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <Carousel showArrows={true} autoPlay infiniteLoop>
          <div>
            <a href="https://www.stspcsr.com.tw/article_list/view_article_detail/?id=143">
              <Image
                alt=""
                src="/images/home/zh/banner1.jpg"
                sizes={"100vw"}
                width={500}
                height={400}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src="/images/home/zh/banner2.jpg"
                sizes={"100vw"}
                width={500}
                height={400}
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                alt=""
                src="/images/home/zh/banner3.jpg"
                sizes={"100vw"}
                width={500}
                height={400}
              />
            </a>
          </div>
        </Carousel>
      </section>
      <section className="performance_data_section">
        <div className="performance_data_container">
          <div className="head">
            <p className="year">2022</p>
            <p className="management">永續管理績效</p>
          </div>
          <div className="data_container data_container1">
            <RunningNumbers
              n={5264}
              c={"小時"}
              to_fixed={0}
              is_currency={true}
            />
            <div className="data_type">
              <p>在職人員總訓練</p>
            </div>
          </div>
          <div className="data_container data_container2">
            <RunningNumbers
              n={44.484}
              c={"小時"}
              to_fixed={3}
              is_currency={false}
            />
            <div className="data_type">
              <p>累計年節水潛量</p>
            </div>
          </div>
          <div className="data_container data_container3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "10px",
                alignItems: "flex-end",
              }}>
              <RunningNumbers n={1} c={"兆"} to_fixed={0} is_currency={false} />
              <RunningNumbers
                n={948}
                c={"億元"}
                to_fixed={0}
                is_currency={false}
              />
            </div>
            <div className="data_type">
              <p>總營業額</p>
            </div>
          </div>
          <div className="data_container data_container4">
            <RunningNumbers
              n={90.62}
              c={"%"}
              to_fixed={2}
              is_currency={false}
            />
            <div className="data_type">
              <p>廢棄再利用率</p>
            </div>
          </div>
          <div className="data_container data_container5">
            <RunningNumbers
              n={8965.2}
              c={"萬度"}
              to_fixed={1}
              is_currency={true}
            />
            <div className="data_type">
              <p>累計年節電潛量</p>
            </div>
          </div>
          <div className="data_container data_container6">
            <RunningNumbers n={1011} c={"場"} to_fixed={0} is_currency={true} />
            <div className="data_type">
              <p>勞動檢查</p>
            </div>
          </div>
          <div className="menu_button">
            <Link href={"/"}>MORE</Link>
          </div>
        </div>
      </section>
      <section className="content_section">
        <div className="container1">
          <div className="head">
            <h4></h4>
          </div>
          <div>
            <span>-</span>
            <Link href={"/"}>OECD：全球就業市場瀕臨AI革命邊緣</Link>
          </div>
          <div>
            <span>-</span>
            <Link href={"/"}>
              人體攝入化學物PFAS不易分解 全氟己烷磺酸將列毒化物
            </Link>
          </div>
          <div>
            <span>-</span>
            <Link href={"/"}>金管會宣布台版永續揭露準則 2026上路</Link>
          </div>
          <div>
            <span>-</span>
            <Link href={"/"}>全球高溫屢破紀錄 科學家：10萬年來最熱</Link>
          </div>
          <div>
            <span>-</span>
            <Link href={"/"}>112年度南科園區廠商節水節能輔導委辦計畫</Link>ㄔ
          </div>
          <div className="more">
            <Link href={"/"}>More ...</Link>
          </div>
        </div>
        <div className="container2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/v1lgmDckSl4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}></iframe>
        </div>
        <div className="container3">
          <CardWithMoreEffect
            small
            height={"370"}
            image_src="/images/home/zh/team_icon4.jpg"
            alt="team"
          />
          <div>
            <CardWithMoreEffect
              small
              height={"170"}
              image_src="/images/home/zh/team_icon2.jpg"
              alt="team"
            />
            <CardWithMoreEffect
              small
              height={"170"}
              image_src="/images/home/zh/team_icon3.jpg"
              alt="team"
            />
          </div>
        </div>
        <div className="container4">
          <CardWithMoreEffect
            height={"370"}
            image_src="/images/home/zh/team_icon1.jpg"
            alt="team"
            small={false}
          />
        </div>
      </section>
      <section className="download_section">
        <div className="head">
          <h2>年度報告書分享</h2>
          <hr />
        </div>
        <div>
          <Slider
            dots={false}
            infinite={true}
            speed={100}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/2018%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                  width={245}
                  height={345}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/2017%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                  width={245}
                  height={345}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/2016%E5%A0%B1%E5%91%8A%E6%9B%B8%E5%B0%81%E9%9D%A2.png"
                  width={245}
                  height={345}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="	https://www.stspcsr.com.tw/user_files/report/2015_s.jpg"
                  width={245}
                  height={155}
                  alt="team"
                />
              </Link>
            </div>

            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_01.jpg"
                  width={245}
                  height={145}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_02.jpg"
                  width={245}
                  height={145}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_03.jpg"
                  width={245}
                  height={145}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_04.jpg"
                  width={245}
                  height={145}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_05.jpg"
                  width={245}
                  height={105}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_06.jpg"
                  width={245}
                  height={105}
                  alt="team"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src="https://www.stspcsr.com.tw/user_files/report/download_07.jpg"
                  width={245}
                  height={145}
                  alt="team"
                />
              </Link>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
