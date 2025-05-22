"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ThirdComp = () => {
  const t = useTranslations("thirdComp");
  return (
    <div className="bg-gradient-to-tl from-[#1d253b] via-[#151729] to-black sm:pt-30 sm:pb-10 py-20 px-6 sm:px-0">
      <div className="max-w-[800px] mx-auto text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-bold text-white font-[aliba] text-5xl mb-4"
        >
          {t("title")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-3xl font-[aliba] text-[#FFF600] mb-10"
        >
          {t("desc")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] font-[aliba] text-white"
        >
          {t("content1")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[15px] font-[aliba] text-white"
        >
          {t("content2")}
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdComp;
