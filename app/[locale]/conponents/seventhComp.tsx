"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  color: string;
  title: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ color, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-full size-[21px] translate-y-1"
        style={{
          backgroundColor: color,
        }}
      ></motion.div>
      <div className="text-left space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-xl"
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[15px]"
        >
          {desc}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SeventhComp = () => {
  const t = useTranslations("seventhComp");
  const items = [
    {
      color: "#0076Ba",
      title: "90B " + t("tokens"),
      desc: t("item1"),
    },
    {
      color: "#1fb100",
      title: "9B " + t("tokens"),
      desc: t("item2"),
    },
    {
      color: "#ff9301",
      title: "30B " + t("tokens"),
      desc: t("item3"),
    },
    {
      color: "#ee220d",
      title: "3B " + t("tokens"),
      desc: t("item4"),
    },
    {
      color: "#991a5e",
      title: "10B " + t("tokens"),
      desc: t("item5"),
    },
    {
      color: "#908e8e",
      title: "3B " + t("tokens"),
      desc: t("item6"),
    },
    {
      color: "#1985c3",
      title: "1B " + t("tokens"),
      desc: t("item7"),
    },
    {
      color: "#34bc18",
      title: "30B " + t("tokens"),
      desc: t("item8"),
    },
  ];
  return (
    <div className="bg-[#181a2d] font-[aliba] text-white text-center py-10 relative px-6 sm:px-0">
      <img
        src="/sevenComp-bg.png"
        alt=""
        className="absolute sm:h-[700px] h-[200px] top-[50px] left-0 bottom-[100px]"
      />
      <div className="font-bold text-[44px]">{t("title")}</div>
      <div className="text-[18px]">{t("desc")}</div>
      <div className="sm:flex justify-center items-center mt-[77px]">
        <div className="space-y-7">
          {items.map((item, index) => (
            <Item
              key={index}
              color={item.color}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <div className="space-y-10">
          <img
            src="sevenComp-circle.png"
            alt=""
            className="sm:size-[586px] size-[300px] mx-auto"
          />
          <div className="text-lg">{t("content")}</div>
        </div>
      </div>
    </div>
  );
};

export default SeventhComp;
