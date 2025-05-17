import React from "react";
import { useTranslations } from "next-intl";

const FirstComp = () => {
  const t = useTranslations("firstComp");
  return (
    <div className="text-center bg-gradient-to-r from-black to-gray-700 relative overflow-hidden pt-20 pb-10 px-4 sm:px-0sm:">
      <img
        src="/tree.png"
        alt=""
        className="absolute w-[800px] left-[50%] translate-x-[-50%] translate-y-[-20%]"
      />
      <div className=" font-bold text-5xl font-[aliba] text-white mb-4">
        {t("title")}
      </div>
      <div className="font-bold text-3xl font-[aliba] text-[#FFF600] mb-10">
        {t("desc")}
      </div>
      <div className="text-[15px] max-w-[1200px] font-[aliba] mx-auto text-white mb-20">
        {t("content")}
      </div>

      <div className="flex items-center justify-center translate-y-4 z-100 relative">
        <img
          src="firstComp-img1.png"
          alt=""
          className="sm:h-[241px] h-[80px] rounded-2xl translate-x-[16px]"
        />
        <img
          src="firstComp-img2.png"
          alt=""
          className="sm:h-[337px] h-[120px] rounded-2xl z-100 relative"
        />
        <img
          src="firstComp-img3.png"
          alt=""
          className="sm:h-[241px] h-[80px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FirstComp;
