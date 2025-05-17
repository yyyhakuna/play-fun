"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";

interface ItemProps {
  bgSrc: string;
  topTitle: string;
  bottomTitle: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ bgSrc, topTitle, desc, bottomTitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`bg-cover bg-center bg-no-repeat sm:w-[300px] w-[80%] sm:h-[600px] h-[600px] pt-12 px-6 mx-auto sm:mx-0`}
      style={{
        backgroundImage: `url(${bgSrc})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-[aliba] font-bold text-2xl text-white"
      >
        {topTitle}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-[aliba] font-bold text-2xl text-white"
      >
        {bottomTitle}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-[aliba] text-lg text-white pt-4"
      >
        {desc}
      </motion.div>
    </motion.div>
  );
};

const SecondComp = () => {
  const t = useTranslations("secondComp");
  const items: ItemProps[] = [
    {
      bgSrc: "/secondComp-bg1.png",
      topTitle: t(`topTitle1`),
      bottomTitle: t("bottomTitle1"),
      desc: t("desc1"),
    },
    {
      bgSrc: "/secondComp-bg2.png",
      topTitle: t("topTitle2"),
      bottomTitle: t("bottomTitle2"),
      desc: t("desc2"),
    },
    {
      bgSrc: "/secondComp-bg3.png",
      topTitle: t("topTitle3"),
      bottomTitle: t("bottomTitle3"),
      desc: t("desc3"),
    },
    {
      bgSrc: "/secondComp-bg4.png",
      topTitle: t("topTitle4"),
      bottomTitle: t("bottomTitle4"),
      desc: t("desc4"),
    },
  ];
  return (
    <div className="bg-gradient-to-tl from-[#1d253b] via-[#151729] to-black pt-30 relative">
      <img
        src="/package.png"
        alt=""
        className="absolute h-[400px] left-1/2 translate-x-[-50%]"
      />
      <div className="text-white font-extrabold text-5xl font-[aliba] text-center sm:pb-20 pb-10">
        {t("title")}
      </div>
      <div className="sm:flex justify-center gap-7 space-y-4 sm:space-y-0">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SecondComp;
