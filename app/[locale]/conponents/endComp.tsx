"use client";
import React from "react";
import { useTranslations } from "next-intl";

const TopComp = () => {
  const t = useTranslations("endComp");
  const items = [
    {
      title: t("project"),
      list: [
        { title: t("about") },
        { title: t("roadMap") },
        { title: t("team") },
        { title: t("partner") },
      ],
    },
    {
      title: t("record"),
      list: [
        { title: t("whitePaper") },
        { title: t("document") },
        { title: "API" },
        { title: t("helpCenter") },
      ],
    },
    {
      title: t("community"),
      list: [
        { title: "Discord" },
        { title: "Tiwtter", link: "x.com/PLAYFUN__BSC" },
        { title: "Telegram", link: "https://t.me/PLAYFUN_BSC" },
        { title: "Medium" },
      ],
    },
  ];
  return (
    <div className="sm:flex gap-[130px] font-[aliba] text-white justify-center py-15 ml-12 sm:ml-0">
      <div className="flex gap-[14px] flex-shrink-0">
        <img src="/hand-shank.png" alt="" className="h-[35px] flex-shrink-0" />
        <img src="/playfun.png" alt="" className="h-[35px] flex-shrink-0" />
      </div>
      <div className="flex sm:gap-[150px] gap-20 flex-wrap mt-6 sm:mt-0 justify-start  ">
        {items.map((item, index) => (
          <div className="space-y-4" key={index}>
            <div className="text-lg font-bold">{item.title}</div>
            <div className="space-y-2">
              {item.list.map((l) => (
                <div
                  key={l.title}
                  className="text-[15px] "
                  style={{
                    cursor: l?.link ? "pointer" : "",
                  }}
                  onClick={() => {
                    if (l?.link) {
                      window.location.href = l.link;
                    }
                  }}
                >
                  {l.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-5">
        <div className="font-bold text-lg">{t("newest")}</div>
        <div className="flex">
          <div className="bg-black pl-5 py-3 rounded-l-[8px] w-[220px]">
            您的邮箱地址
          </div>
          <div className="bg-gradient-to-bl from-[#fcfefd] to-[#edd290] flex justify-center items-center text-black rounded-r-[8px] py-4 px-6">
            {t("describe")}
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomComp = () => {
  return (
    <div className="py-6 text-white flex font-[aliba] justify-between items-center max-w-[1200px] mx-auto px-8 sm:px-0">
      <div>
        <div>
          Privacy Policy | Lega | Newsletter Subscriber Agreement | Terms |
          Cookies
        </div>
        <div>
          <div className="text-[10px]">
            Privacy Policy | Lega | Newsletter Subscriber Agreement | Terms |
            Cookies
          </div>
          <div className="text-[10px]">
            All trademarks are property of their respective owners in the
            worldwide.
          </div>
        </div>
      </div>
      <img
        src="endComp-icon.svg"
        alt=""
        className="w-[26px] h-[28px] hidden sm:block"
      />
    </div>
  );
};

const EndComp = () => {
  return (
    <div className="bg-[#25262b]">
      <TopComp />
      <BottomComp />
    </div>
  );
};

export default EndComp;
