"use client";
import React from "react";
import LanguagSwitcher from "./languag-switcher";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[aliba] text-[#bab8bd] hidden sm:block"
          >
            {t("homepage")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-[aliba] text-[#bab8bd] hidden sm:block"
          >
            {t("hybrid")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-[aliba] text-[#bab8bd] hidden sm:block"
          >
            {t("analysis")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-[aliba] text-[#bab8bd] hidden sm:block"
          >
            {t("development")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-[aliba] text-[#bab8bd] hidden sm:block"
          >
            NFT
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <LanguagSwitcher />
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-[aliba] text-[#bab8bd]"
            href="https://playfun.club?inviteCode=qk4XydxU"
          >
            {t("join")}
          </motion.a>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="justify-center text-white text-7xl font-normal font-anton uppercase leading-relaxed"
            >
              PLAYFUN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="justify-center text-white sm:text-[30px] text-5xl font-bold font-['Noto_Serif'] leading-[60px]"
            >
              {t("shaping")}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="sm:max-w-[509px] text-justify justify-start text-white text-lg font-medium font-noto uppercase leading-normal"
          >
            {t("cryptocurrency")}
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="py-3 px-[26px] bg-[#9335ff] rounded-xl cursor-pointer"
            onClick={() => {
              window.location.href = "https://playfun.club?inviteCode=qk4XydxU";
            }}
          >
            {t("join")}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
