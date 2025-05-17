"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const FirstComp = () => {
  const t = useTranslations("firstComp");
  return (
    <div className="text-center bg-gradient-to-r from-black to-gray-700 relative overflow-hidden pt-20 pb-10 px-4 sm:px-0sm:">
      <img
        src="/tree.png"
        alt=""
        className="absolute w-[800px] left-[50%] translate-x-[-50%] translate-y-[-20%]"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold text-5xl font-[aliba] text-white mb-4"
      >
        {t("title")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold text-3xl font-[aliba] text-[#FFF600] mb-10"
      >
        {t("desc")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-[15px] max-w-[1200px] font-[aliba] mx-auto text-white mb-20"
      >
        {t("content")}
      </motion.div>

      <div className="flex items-center justify-center translate-y-4 z-100 relative">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src="firstComp-img1.png"
          alt=""
          className="sm:h-[241px] h-[80px] rounded-2xl translate-x-[16px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src="firstComp-img2.png"
          alt=""
          className="sm:h-[337px] h-[120px] rounded-2xl z-100 relative"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="firstComp-img3.png"
          alt=""
          className="sm:h-[241px] h-[80px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FirstComp;
