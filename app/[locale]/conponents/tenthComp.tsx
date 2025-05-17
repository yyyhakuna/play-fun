import React from "react";
import { useTranslations } from "next-intl";

const TenthComp = () => {
  const t = useTranslations("tenthComp");
  return (
    <div className="text-white font-[aliba] text-center bg-[#181a2d] py-20">
      <div className="font-bold text-[44px]">{t("title")}</div>
      <div className="text-lg mt-6 mb-20">{t("desc")}</div>
      <img src="tenthComp.png" alt="" />
    </div>
  );
};

export default TenthComp;
