"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  title: string;
  content: string;
  index: number;
  borderImg: string;
}

const Item: React.FC<ItemProps> = ({ title, content, index, borderImg }) => {
  const width =
    index === 0 ? "w-[211px]" : index === 1 ? "w-[280px]" : "w-[357px]";
  const height =
    index === 0 ? "h-[95px]" : index === 1 ? "h-[94px]" : "h-[93px]";
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="sm:flex gap-10 space-y-3 sm:space-y-0"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className={`bg-cover bg-center bg-no-repeat ${width} ${height} flex items-center justify-center text-white rounded-2xl`}
        style={{
          backgroundImage: `url(${borderImg})`,
        }}
      >
        {title}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        className={`text-white flex items-center relative sm:w-[598px] mx-auto sm:mx-0 ${width}`}
      >
        {index === 0 && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#5da6ff] to-[#6340ff] translate-x-[-30px] hidden sm:block"
          ></motion.div>
        )}
        {content}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          className={`absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#5da6ff] to-[#6340ff] ${
            index !== 2 && "translate-y-[12px]"
          }`}
          style={{
            width: width,
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

const FifthComp = () => {
  const t = useTranslations("fifthComp");
  const items: ItemProps[] = [
    {
      title: t("itemTitle1"),
      content: t("itemContent1"),
      index: 0,
      borderImg: "/fifthComp-border1.svg",
    },
    {
      title: t("itemTitle2"),
      content: t("itemContent2"),
      index: 1,
      borderImg: "/fifthComp-border2.svg",
    },
    {
      title: t("itemTitle3"),
      content: t("itemContent3"),
      index: 2,
      borderImg: "/fifthComp-border3.svg",
    },
  ];
  return (
    <div className="bg-gradient-to-bl from-[#1d253b] via-[#151729] to-black text-center relative sm:py-20 py-10">
      <img
        src="/fifthComp-icon.png"
        alt=""
        className="absolute left-[5%] bottom-[10%] w-[253px] hidden sm:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-5xl font-[aliba] text-white"
      >
        {t("title1")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold text-5xl font-[aliba] text-white"
      >
        {t("title2")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-300 font-[aliba] text-[15px] text-white mx-auto mt-9 px-6 sm:px-0"
      >
        {t("desc")}
      </motion.div>
      <div className="font-[aliba] text-[15px] text-white">{t("content")}</div>
      <div className="flex flex-col items-center gap-5 mt-[70px]">
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            content={item.content}
            index={item.index}
            borderImg={item.borderImg}
          />
        ))}
      </div>
      <div className="text-white font-[aliba] text-[15px] mt-10">
        {t("bottomContent")}
      </div>
    </div>
  );
};

export default FifthComp;
