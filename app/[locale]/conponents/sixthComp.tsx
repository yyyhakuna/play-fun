"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  leftContent: string;
  rightContent: string;
}

const Item: React.FC<ItemProps> = ({ leftContent, rightContent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center font-[aliba] border-1 border-[#6340FF] border-solid rounded-full sm:w-[547px] w-[95%] gap-3 py-3 px-4 mx-auto sm:mx-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#FFF000] text-lg font-bold"
      >
        {leftContent}
      </motion.div>
      <motion.img
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        src="/yellow-arrow.svg"
        alt=""
        className=""
      />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-[15px]"
      >
        {rightContent}
      </motion.div>
    </motion.div>
  );
};

const SixthComp = () => {
  const t = useTranslations("sixthComp");
  const items = [
    {
      leftContent: "30%",
      rightContent: t("item1Content"),
    },
    {
      leftContent: "30%",
      rightContent: t("item2Content"),
    },
    {
      leftContent: "30%",
      rightContent: t("item3Content"),
    },
    {
      leftContent: "10%",
      rightContent: t("item4Content"),
    },
  ];
  return (
    <div className="bg-[#181a2d] text-center py-10 px-6 sm:px-0 relative">
      <img
        src="/package.png"
        alt=""
        className="absolute sm:w-full sm:h-[800px] h-[200px] left-1/2 translate-x-[-50%] bottom-[30px]"
      />
      <img
        src="/sixComp-bg.png"
        alt=""
        className="absolute sm:h-[300px] h-[200px] top-[50px] right-0 bottom-[100px]"
      />
      <div className="text-5xl font-bold font-[aliba] text-white ">
        {t("title")}
      </div>
      <div className="font-bold text-3xl font-[aliba] text-[#FFF600] mt-[17px] mb-[26px] ">
        {t("desc")}
      </div>
      <div className="text-[#d8d8d8] text-lg font-bold font-[alba] ">
        <span>{t("content1")}</span>
        <span className="font-bold text-[44px] px-2">1.5</span>
        <span>%</span>
        <span className="px-3"></span>
        <span>{t("content2")}: </span>
        <span>{t("forever")}</span>
        <span className="font-bold text-[44px] px-2">0</span>
        <span>{t("tax")}</span>
        <span> · </span>
        <span>{t("enter")}</span>
      </div>
      <div className="sm:flex justify-center items-stretch gap-5 mt-6 sm:mt-0 space-y-6 sm:space-y-0">
        <div className="bg-[#303438] text-white font-[aliba] opacity-70 py-[37px] sm:px-[100px] px-4 rounded-2xl">
          <div className="text-3xl">{t("leftTitle")}</div>
          <div className="max-w-[540px] mt-[14px] mb-[43px]">
            {t("leftContent")}
          </div>
          <div className="space-y-[30px]">
            {items.map((item, index) => {
              return (
                <Item
                  key={index}
                  leftContent={item.leftContent}
                  rightContent={item.rightContent}
                />
              );
            })}
          </div>
        </div>
        <div className="bg-[#303438] opacity-70 flex items-center justify-center px-5 rounded-2xl py-5 sm:py-0">
          <div className="text-3xl font-[aliba] from-[#fcfefd] to-[#edd290] text-transparent bg-clip-text bg-gradient-to-bl ">
            <div className=" from-70% ">{t("rightContent1")}</div>
            <div className="from-50% ">{t("rightContent2")}</div>
            <div className="from-40% ">{t("rightContent3")}</div>
            <div className="from-20% ">{t("rightContent4")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthComp;
