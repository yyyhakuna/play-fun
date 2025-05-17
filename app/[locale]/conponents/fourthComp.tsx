"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  title: string;
  date: string;
  marketValue: string;
  showArrow: boolean;
  buttonColor: string;
}

const Item: React.FC<ItemProps> = ({
  title,
  date,
  marketValue,
  showArrow,
  buttonColor,
}) => {
  const t = useTranslations("fourthComp");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-[53px]"
    >
      <div className="text-center mx-auto sm:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-white font-bold text-[18px] font-figtree sm:px-12 px-4 py-[12px] rounded-full`}
          style={{
            background: buttonColor,
          }}
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white font-[aliba] text-[18px]"
        >
          {date}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white font-[aliba] text-[18px]"
        >
          {t("target")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-bold text-[32px] font-[aliba] text-white"
        >
          {marketValue + "M" + t("dollar")}
        </motion.div>
      </div>
      <div>
        {showArrow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-col items-center justify-between h-full py-6 hidden sm:flex"
          >
            <img src="/small-arrow.svg" alt="" />
            <img src="right-arrow.png" alt="" className="size-[30px]" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const FourthComp = () => {
  const t = useTranslations("fourthComp");
  const items: ItemProps[] = [
    {
      title: t("itemTitle1"),
      date: "（5/12 - 5/17）",
      marketValue: "10",
      showArrow: true,
      buttonColor: "#198Cff",
    },
    {
      title: t("itemTitle2"),
      date: "（5/18 - 5/23）",
      marketValue: "20",
      showArrow: true,
      buttonColor: "#8544ee",
    },
    {
      title: t("itemTitle3"),
      date: "（5/24 - 5/29）",
      marketValue: "30",
      showArrow: false,
      buttonColor: "#df4e23",
    },
  ];
  return (
    <div className="bg-[#181a2d] py-20 space-y-[54px] relative">
      <img
        src="/package.png"
        alt=""
        className="absolute sm:h-[500px] h-[200px] left-1/2 translate-x-[-50%]"
      />

      <div className="text-white font-[aliba] font-bold text-5xl text-center">
        {t("title")}
      </div>
      <div className="sm:flex gap-[10px] justify-center space-y-4 sm:space-y-0">
        <div className="bg-[#272b46] text-white sm:w-[285px] w-[85%] px-10 py-8 rounded-xl mx-auto sm:mx-0">
          {t("left")}
        </div>
        <div className="space-y-[10px] flex flex-col">
          <div className="sm:flex bg-[#272b46] py-10 sm:gap-[52px] sm:px-20 rounded-xl space-y-6 sm:space-y-0 w-[85%] sm:w-auto mx-auto sm:mx-0">
            {items.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                date={item.date}
                marketValue={item.marketValue}
                showArrow={item.showArrow}
                buttonColor={item.buttonColor}
              />
            ))}
          </div>
          <div className="bg-[#272b46] flex-1 rounded-xl w-[85%] sm:w-full mx-auto px-6 sm:px-0 py-6 sm:py-0 text-center text-white text-aliba text-[15px] flex justify-center items-center">
            <div className="max-w-[752px]">{t("content")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthComp;
