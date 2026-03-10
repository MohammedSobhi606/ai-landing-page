import { lines, smallSphere, stars } from "../../assets";
import Heading from "../Heading";
import MySection from "../MySection";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <MySection className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-26 lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-240 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#"
          >
            See the full details
          </a>
        </div>
      </div>
    </MySection>
  );
};

export default Pricing;

const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-370 h-44.25 -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-370 h-44.25 -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
