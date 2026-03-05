import { heroBackground, loading, notification1, robot } from "../../assets";
import { heroIcons, notificationImages } from "../../assets/constants";
import PlusSvg from "../../assets/svg/PlusSvg";
import CompanyLogos from "./CompanyLogos";

export default function ImageSection() {
  return (
    <div className="relative max-w-92 mx-auto md:max-w-5xl xl:mb-24">
      <div className="relative z-1 p-0.5 rounded-2xl bg-conic-100 via-cyan-500 via-10%  from-fuchsia-600  to-pink-500">
        <div className="relative  bg-n-8 rounded-2xl">
          <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
          {/* image div */}
          <div className="aspect-33/40 rounded-b-[0.9rem] overflow-hidden md:aspect-688/490 lg:aspect-1024/490">
            <img
              src={robot}
              className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
              width={1024}
              height={490}
              alt="AI"
            />
          </div>
          <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-124 md:-translate-x-1/2" />
          <IconsList />
          <Notification
            className="hidden absolute -right-14 bottom-44 w-[18rem] xl:flex"
            title="Code generation"
          />
        </div>
      </div>
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </div>
  );
}

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-14 px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base z-10 font-sans`}
    >
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 z-10 font-mono`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

const IconsList = () => {
  return (
    <ul className="hidden absolute -left-14 bottom-30 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
      {heroIcons.map((icon, index) => (
        <li className="p-5" key={index}>
          <img src={icon} width={24} height={25} alt={icon} />
        </li>
      ))}
    </ul>
  );
};
