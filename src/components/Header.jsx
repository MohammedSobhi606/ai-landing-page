import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../assets/constants";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";

export default function Header() {
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6  backdrop-blur-sm bg-n-8`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
        <a className="block w-48 xl:mr-8 mb-0.5" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav className="flex items-center max-lg:hidden">
          {navigation.map((item) => (
            <a
              href={`#`}
              key={item.id}
              className={`block relative    capitalize text-n-1/50 transition-colors hover:text-c-1 ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6   lg:-mr-px text-sm font-semibold`}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-8 ">
          <a
            href="#signup"
            className="button hidden text-sm text-n-1/50 transition-colors hover:text-n-1 lg:block capitalize"
          >
            New account
          </a>
          <Button className={"max-lg:hidden!"} href="#login">
            Sign in
          </Button>
        </div>
        {/* mobile buttons */}
        <Button
          className={"lg:hidden! z-10"}
          onClick={() => {
            setisMobileNavOpen(!isMobileNavOpen);
          }}
          px="px-3"
        >
          <MenuSvg openNavigation={isMobileNavOpen} />
        </Button>
      </div>

      {/* mobile Nav */}
      <MobilNav
        isMobileNavOpen={isMobileNavOpen}
        setisMobileNavOpen={setisMobileNavOpen}
      />
    </div>
  );
}
import { background } from "../assets";
function MobilNav({ isMobileNavOpen, setisMobileNavOpen }) {
  if (isMobileNavOpen) {
    return (
      <nav className="flex items-center justify-center font-serif tracking-widest relative h-svh top-0 left-0 flex-col gap-12 lg:hidden bg-n-8">
        {navigation.map((item) => (
          <a
            href={`#`}
            key={item.id}
            className={`block  text-2xl uppercase transition-colors hover:text-c-1   `}
            onClick={() => setisMobileNavOpen(false)}
          >
            {item.title}
          </a>
        ))}

        {/* absolute positions */}
        <div className="absolute inset-0 pointer-events-none lg:hidden ">
          <div className="absolute inset-0 opacity-[.03] ">
            <img
              className="w-full h-full object-cover"
              src={background}
              width={688}
              height={953}
              alt="Background"
            />
          </div>

          <Rings />

          <BackgroundCircles />
        </div>
      </nav>
    );
  }
  return null;
}
const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};
