import React from "react";
import MySection from "../MySection";
import Button from "../Button";
import { curve } from "../../assets";
import ImageSection from "./ImageSection";
import CompanyLogos from "./CompanyLogos";
import BottomLine from "./BottomLine";

export default function Hero() {
  return (
    <MySection
      className={"pt-48 -mt-21"}
      crosses
      crossesOffset={"lg:translate-y-[5.25rem]"}
      customPaddings
    >
      <div className="relative container ">
        <div className="relative z-1 max-w-248 mx-auto text-center mb-15.5 md:mb-20 lg:mb-25 font-serif tracking-wider">
          {" "}
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button
            href="/pricing"
            white
            className={"hover:text-c-1 transition-colors"}
          >
            Get started
          </Button>
        </div>
        <ImageSection />
      </div>
      <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      <BottomLine />
    </MySection>
  );
}
