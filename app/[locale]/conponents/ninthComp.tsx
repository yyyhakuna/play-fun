"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ItemProps {
  name: string;
  imgSrc: string;
  role: string;
  content: string;
}

const Item: React.FC<ItemProps> = ({ name, imgSrc, role, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[20px] bg-[#959595] opacity-85 p-6 sm:w-[300px] w-[90%] mx-auto sm:mx-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-6"
      >
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src={imgSrc}
          alt=""
          className="rounded-full size-[92px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-bold text-[32px]"
        >
          {name}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white w-full h-[1px] mt-3 my-4"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-extrabold text-5xl text-center"
      >
        {role}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="font-light text-[15px] text-center"
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

const NinthComp = () => {
  const t = useTranslations("ninthComp");
  const items = [
    {
      name: "Jaiden",
      imgSrc: "ninthComp-icon1.png",
      role: "CTO",
      content: t("item1"),
    },
    {
      name: "Noah",
      imgSrc: "ninthComp-icon2.png",
      role: "COO",
      content: t("item2"),
    },
    {
      name: "Isabella",
      imgSrc: "ninthComp-icon3.png",
      role: "CMO",
      content: t("item3"),
    },
    {
      name: "Elijah",
      imgSrc: "ninthComp-icon4.png",
      role: "CTO",
      content: t("item4"),
    },
  ];
  return (
    <div className="text-white font-[aliba] bg-[#181a2d] py-20 space-y-20">
      <div className="font-bold text-[44px] text-center">{t("title")}</div>
      <div className="sm:flex gap-[30px] justify-center space-y-6 sm:space-y-0">
        {items.map((item) => (
          <Item key={item.imgSrc} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NinthComp;
