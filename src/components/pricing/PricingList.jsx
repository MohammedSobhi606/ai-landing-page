import { check } from "../../assets";
import { pricing } from "../../assets/constants";
import Button from "../Button";

const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item, inx) => (
        <div
          key={item.id}
          className="w-76 max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-4xl lg:w-auto even:py-14 odd:py-8 odd:my-4 "
        >
          <h4
            className={`h4 mb-4 font-serif ${
              inx + 1 == 1 ? "text-c-1" : inx == 1 ? "text-c-2" : "text-c-3"
            }`}
          >
            {item.title}
          </h4>

          <p className="body-2 min-h-16 mb-3 text-n-1/50">{item.description}</p>

          <div className="flex items-center h-22 mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold ">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button className="w-full mb-6" href={"#"} white={!!item.price}>
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
