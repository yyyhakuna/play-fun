import React from "react";
import { useTranslations } from "next-intl";

interface ItemProps {
  bgSrc: string;
  topTitle: string;
  bottomTitle: string;
  desc: string;
}

const Item: React.FC<ItemProps> = ({ bgSrc, topTitle, desc, bottomTitle }) => {
  // const t = useTranslations("secondComp");
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat sm:w-[300px] w-[80%] sm:h-[600px] h-[600px] pt-12 px-6 mx-auto sm:mx-0`}
      style={{
        backgroundImage: `url(${bgSrc})`,
      }}
    >
      <div className=" font-[aliba] font-bold text-2xl text-white">
        {topTitle}
      </div>
      <div className=" font-[aliba] font-bold text-2xl text-white">
        {bottomTitle}
      </div>
      <div className=" font-[aliba] text-lg text-white pt-4">{desc}</div>
    </div>
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
