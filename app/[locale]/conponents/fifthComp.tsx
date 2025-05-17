import React from "react";
import { useTranslations } from "next-intl";

interface ItemProps {
  title: string;
  content: string;
  index: number;
  borderImg: string;
}

const Item: React.FC<ItemProps> = ({ title, content, index, borderImg }) => {
  const width =
    index === 0 ? "w-[211px]" : index === 1 ? "w-[280px]" : "w-[357px]";
  const height =
    index === 0 ? "h-[95px]" : index === 1 ? "h-[94px]" : "h-[93px]";
  return (
    <div className="sm:flex gap-10 space-y-3 sm:space-y-0">
      <div
        className={`bg-cover bg-center bg-no-repeat ${width} ${height} flex items-center justify-center text-white rounded-2xl `}
        style={{
          backgroundImage: `url(${borderImg})`,
        }}
      >
        {title}
      </div>

      <div
        className={` text-white flex items-center relative sm:w-[598px] mx-auto sm:mx-0 ${width}`}
        style={
          {
            //   width: 200 + index * 30 + "px",
          }
        }
      >
        {index === 0 && (
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#5da6ff] to-[#6340ff] translate-x-[-30px] hidden sm:block "></div>
        )}
        {content}
        <div
          className={`absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#5da6ff] to-[#6340ff] ${
            index !== 2 && "translate-y-[12px]"
          }`}
          style={{
            width: width,
          }}
        ></div>
      </div>
    </div>
  );
};

const FifthComp = () => {
  const t = useTranslations("fifthComp");
  const items: ItemProps[] = [
    {
      title: t("itemTitle1"),
      content: t("itemContent1"),
      index: 0,
      borderImg: "/fifthComp-border1.svg",
    },
    {
      title: t("itemTitle2"),
      content: t("itemContent2"),
      index: 1,
      borderImg: "/fifthComp-border2.svg",
    },
    {
      title: t("itemTitle3"),
      content: t("itemContent3"),
      index: 2,
      borderImg: "/fifthComp-border3.svg",
    },
  ];
  return (
    <div className="bg-gradient-to-bl from-[#1d253b] via-[#151729] to-black text-center relative sm:py-20 py-10">
      <img
        src="/fifthComp-icon.png"
        alt=""
        className="absolute left-[5%] bottom-[10%] w-[253px] hidden sm:block"
      />
      <div className="font-bold text-5xl font-[aliba]  text-white">
        {t("title1")}
      </div>
      <div className="font-bold text-5xl font-[aliba]  text-white">
        {t("title2")}
      </div>
      <div className="max-w-300 font-[aliba] text-[15px] text-white mx-auto mt-9 px-6 sm:px-0">
        {t("desc")}
      </div>
      <div className="font-[aliba] text-[15px] text-white">{t("content")}</div>
      <div className="flex flex-col items-center gap-5 mt-[70px]">
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            content={item.content}
            index={item.index}
            borderImg={item.borderImg}
          />
        ))}
      </div>
      <div className="text-white font-[aliba] text-[15px] mt-10">
        {t("bottomContent")}
      </div>
    </div>
  );
};

export default FifthComp;
