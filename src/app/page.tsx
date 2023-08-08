"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { useSearchParams } from "next/navigation";

import CardWithMoreEffect from "@/component/CardWithMoreEffect";
import RunningNumbers from "@/component/RunningNumbers";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

export default function Home({}: Props) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

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
              <RunningNumbers
                n={5264}
                c={"Hours"}
                to_fixed={0}
                is_currency={true}
              />
              <div className="data_type">
                <p>Serving officers total training</p>
              </div>
            </div>
            <div className="data_container data_container2">
              <RunningNumbers
                n={44.484}
                c={"Million kWh/year"}
                to_fixed={3}
                is_currency={true}
              />
              <div className="data_type">
                <p>Cumulative water saving potential</p>
              </div>
            </div>
            <div className="data_container data_container3">
              <RunningNumbers
                n={1.948}
                c={"Trillion NT$"}
                to_fixed={4}
                is_currency={true}
              />
              <div className="data_type">
                <p>total revenue</p>
              </div>
            </div>
            <div className="data_container data_container4">
              <RunningNumbers
                n={90.62}
                c={"%"}
                to_fixed={2}
                is_currency={true}
              />
              <div className="data_type">
                <p>Waste recycling rate</p>
              </div>
            </div>
            <div className="data_container data_container5">
              <RunningNumbers
                n={8965.2}
                c={"Million kWh/year"}
                to_fixed={1}
                is_currency={true}
              />
              <div className="data_type">
                <p>Cumulative power saving potential</p>
              </div>
            </div>
            <div className="data_container data_container6">
              <RunningNumbers
                n={1011}
                c={"Field"}
                to_fixed={0}
                is_currency={true}
              />
              <div className="data_type">
                <p>Labor examination</p>
              </div>
            </div>
            <div className="menu_button">
              <Link href={"/performance"}>MORE</Link>
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
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstsp543%2F&tabs=timeline&width=625&height=365&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
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
            <h2 style={{ textTransform: "none" }}>Report Download</h2>
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
              n={4833.74}
              c={"億元"}
              c_ahead="達"
              to_fixed={2}
              is_currency={true}
              is_trillion={true}
            />
            <div className="data_type">
              <p>全年營業額</p>
            </div>
          </div>
          <div className="data_container data_container2">
            <RunningNumbers
              c_ahead="達"
              n={272}
              c={"家"}
              to_fixed={0}
              is_currency={true}
            />
            <div className="data_type">
              <p>累計有效核准廠商</p>
            </div>
          </div>
          <div className="data_container data_container3">
            <RunningNumbers
              n={951}
              c={"人次"}
              to_fixed={0}
              is_currency={true}
            />
            <div className="data_type">
              <p>國內外訪客到訪南科</p>
            </div>
          </div>
          <div className="data_container data_container4">
            <RunningNumbers n={93.19} c={"%"} to_fixed={2} is_currency={true} />
            <div className="data_type">
              <p>全園區事業廢棄物再利用率</p>
            </div>
          </div>
          <div className="data_container data_container5">
            <RunningNumbers
              n={4680.8}
              c={"萬噸"}
              to_fixed={2}
              is_currency={true}
            />
            <div className="data_type">
              <p>累計節水潛量</p>
            </div>
          </div>
          <div className="data_container data_container6">
            <RunningNumbers
              n={10536.1}
              c={"萬噸"}
              to_fixed={2}
              is_currency={true}
            />
            <div className="data_type">
              <p>累計節電潛量</p>
            </div>
          </div>
          <div className="menu_button">
            <Link href={"/performance"}>MORE</Link>
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
            <Link href={"/"}>112年度南科園區廠商節水節能輔導委辦計畫</Link>
          </div>
          <div className="more">
            <Link href={"/performance"}>More ...</Link>
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
