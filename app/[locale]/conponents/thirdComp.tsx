import React from "react";
import { useTranslations } from "next-intl";

const ThirdComp = () => {
  const t = useTranslations("thirdComp");
  return (
    <div className="bg-gradient-to-tl from-[#1d253b] via-[#151729] to-black sm:pt-30 pt-20 px-6 sm:px-0">
      <div className="max-w-[800px] mx-auto text-center ">
        <div className="font-bold text-white font-[aliba] text-5xl mb-4">
          {t("title")}
        </div>
        <div className="font-bold text-3xl font-[aliba] text-[#FFF600] mb-10">
          {t("desc")}
        </div>
        <div className="text-[15px] font-[aliba] text-white">
          {t("content1")}
        </div>
        <div className="text-[15px] font-[aliba] text-white">
          {t("content2")}
        </div>
      </div>
    </div>
  );
};

export default ThirdComp;
