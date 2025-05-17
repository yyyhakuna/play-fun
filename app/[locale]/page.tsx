import BannerComp from "./conponents/bannerComp";
import FirstComp from "./conponents/firstComp";
import SecondComp from "./conponents/secondComp";
import ThirdComp from "./conponents/thirdComp";
import FourthComp from "./conponents/fourthComp";
import FifthComp from "./conponents/fifthComp";
import SixthComp from "./conponents/sixthComp";
import SeventhComp from "./conponents/seventhComp";
import EighthComp from "./conponents/eighthComp";
import NinthComp from "./conponents/ninthComp";
import TenthComp from "./conponents/tenthComp";
import EndComp from "./conponents/endComp";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* <Header /> */}
      <BannerComp />
      <FirstComp />
      <SecondComp />
      <ThirdComp />

      <FourthComp />
      <img
        src="/tree.png"
        alt=""
        className="absolute sm:w-[1000px] sm:h-[800px] sm:right-[-400px] translate-y-[-1000px] z-10"
      />
      <FifthComp />
      <SixthComp />
      <SeventhComp />
      <EighthComp />
      <NinthComp />
      <TenthComp />
      <EndComp />
    </div>
  );
}
