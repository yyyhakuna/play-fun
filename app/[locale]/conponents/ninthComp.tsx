import React from "react";
import { useTranslations } from "next-intl";

interface ItemProps {
  name: string;
  imgSrc: string;
  role: string;
  content: string;
}

const Item: React.FC<ItemProps> = ({ name, imgSrc, role, content }) => {
  return (
    <div className="rounded-[20px] bg-[#959595] opacity-85 p-6 sm:w-[300px] w-[90%] mx-auto sm:mx-0">
      <div className="flex items-center gap-6">
        <img src={imgSrc} alt="" className="rounded-full size-[92px]" />
        <div className="font-bold text-[32px]">{name}</div>
      </div>
      <div className="bg-white w-full h-[1px] mt-3 my-4"></div>
      <div className="font-extrabold text-5xl text-center">{role}</div>
      <div className="font-light text-[15px] text-center">{content}</div>
    </div>
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
