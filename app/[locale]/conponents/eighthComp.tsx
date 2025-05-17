import React from "react";
import { useTranslations } from "next-intl";

const EighthComp = () => {
  const t = useTranslations("eighthComp");
  return (
    <div className="text-white font-[aliba] space-y-10 bg-[#181a2d] text-center py-20 px-6 sm:px-0">
      <div className="font-bold text-5xl">{t("title")}</div>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[15px]">{t("desc1")}</div>
        <div className="text-[15px]">{t("desc2")}</div>
      </div>
      <div>
        <div className="font-bold text-3xl">{t("content1")}</div>
        <div className="font-bold text-3xl">{t("content2")}</div>
      </div>
    </div>
  );
};

export default EighthComp;
