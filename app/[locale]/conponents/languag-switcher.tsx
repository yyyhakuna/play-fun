import React, { HTMLAttributes } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { Popover } from "antd";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { MdOutlineTranslate } from "react-icons/md";

const LANG_MAP = {
  en: {
    label: "🇺🇸 English",
  },
  zh: {
    label: "🇨🇳 中文",
  },
};

type LanguagSwitcherProps = HTMLAttributes<HTMLDivElement>;

const LanguagSwitcher: React.FC<LanguagSwitcherProps> = ({ className }) => {
  const currentLamguag = useLocale();
  const pathname = usePathname();
  const queryObj = useSearchParams();
  const query: { [key: string]: string | string[] } = {};
  queryObj.forEach((value, key) => {
    query[key] = value;
  });
  const router = useRouter();
  const switchLan = (key: string) => {
    if (key === currentLamguag) return;
    router.push({ pathname, query }, { locale: key });
  };

  return (
    <div className={className}>
      <Popover
        content={
          <div className="w-full space-y-1">
            {Object.entries(LANG_MAP).map(([key, item]) => (
              <div
                onClick={() => {
                  switchLan(key);
                }}
                key={key}
                className="flex items-center cursor-pointer hover:bg-[#f5f5f5] p-2 w-full rounded-md"
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        }
      >
        <MdOutlineTranslate className="cursor-pointer text-gray-500" />
      </Popover>
    </div>
  );
};

export default LanguagSwitcher;
