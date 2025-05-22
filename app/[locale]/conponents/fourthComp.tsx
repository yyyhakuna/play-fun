"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  title: string;
  topDesc: string;
  bottomDesc: string;
  content: string;
  showArrow: boolean;
  buttonColor: string;
}

const Item: React.FC<ItemProps> = ({
  title,
  topDesc,
  content,
  bottomDesc,
  showArrow,
  buttonColor,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-[53px] translate-x-6 sm:translate-x-0"
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
          className="text-white font-[aliba] text-[18px] mt-2"
        >
          {topDesc}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white font-[aliba] text-[18px] mb-[6px]"
        >
          {bottomDesc}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-bold text-[32px] font-[aliba] text-white"
        >
          {content}
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
      topDesc: t("item1TopDesc"),
      content: t("item1Content"),
      bottomDesc: t("item1BottomDesc"),
      // marketValue: "10",
      showArrow: true,
      buttonColor: "#198Cff",
    },
    {
      title: t("itemTitle2"),
      topDesc: t("item2TopDesc"),
      content: t("item2Content"),
      // marketValue: "20",
      bottomDesc: t("item2BottomDesc"),
      showArrow: true,
      buttonColor: "#8544ee",
    },
    {
      title: t("itemTitle3"),
      topDesc: t("item3TopDesc"),
      content: t("item3Content"),
      bottomDesc: t("item3BottomDesc"),
      // marketValue: "30",
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

      <div className="text-white font-[aliba] font-bold sm:text-5xl text-4xl text-center">
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
                topDesc={item.topDesc}
                content={item.content}
                showArrow={item.showArrow}
                bottomDesc={item.bottomDesc}
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
