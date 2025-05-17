"use client";
import React from "react";
import LanguagSwitcher from "./languag-switcher";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("banner");
  return (
    <div className="flex justify-center w-[100vw] relative">
      <div className="h-[86px] flex px-10 max-w-[1800px] items-center justify-between w-[100vw] mx-auto">
        <div className="flex gap-[14px] flex-shrink-0">
          <img
            src="/hand-shank.png"
            alt=""
            className="h-[35px] flex-shrink-0"
          />
          <img src="/playfun.png" alt="" className="h-[35px] flex-shrink-0" />
        </div>
        <div className="flex sm:gap-11 gap-5 items-center text-sm text-zinc-800">
          <div className="font-[aliba] text-[#bab8bd] hidden sm:block">
            {t("homepage")}
          </div>
          <div className="font-[aliba] text-[#bab8bd] hidden sm:block">
            {t("hybrid")}
          </div>
          <div className="font-[aliba] text-[#bab8bd] hidden sm:block">
            {t("analysis")}
          </div>
          <div className="font-[aliba] text-[#bab8bd] hidden sm:block">
            {t("development")}
          </div>
          <div className="font-[aliba] text-[#bab8bd] hidden sm:block">NFT</div>
          <LanguagSwitcher />
          <a
            className="font-[aliba] text-[#bab8bd]"
            href="https://playfun.club?inviteCode=qk4XydxU"
          >
            {t("join")}
          </a>
        </div>
      </div>
    </div>
  );
};

const BannerComp = () => {
  const t = useTranslations("banner");
  return (
    <div className="sm:h-[800px] h-[1000px] relative">
      <img
        src="/banner-bg.png"
        alt="bg"
        className="w-[100vw] object-cover absolute h-[1000px] sm:h-[800px]"
      />
      <Header />
      <div className="flex relative sm:ml-[124px] px sm:pt-[50px] pt-[30px]">
        <div className="  blue-triangle relative px-6 w-[100vw] sm:w-auto space-y-5">
          <div className="space-y-[10px]">
            <div className="justify-center text-white text-7xl font-normal font-anton uppercase leading-relaxed">
              PLAYFUN
            </div>
            <div className="justify-center text-white sm:text-[30px] text-5xl font-bold font-['Noto_Serif'] leading-[60px]">
              {t("shaping")}
            </div>
          </div>

          <div className="sm:max-w-[509px] text-justify justify-start text-white text-lg font-medium font-noto uppercase leading-normal ">
            {t("cryptocurrency")}
          </div>
          <button
            className="py-3 px-[26px] bg-[#9335ff] rounded-xl cursor-pointer"
            onClick={() => {
              window.location.href = "https://playfun.club?inviteCode=qk4XydxU";
            }}
          >
            {t("join")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
