import PlusSvg from "../../assets/svg/PlusSvg";

const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-221 left-10 right-10 h-px bg-n-6 pointer-events-none xl:block " />

      <PlusSvg className="hidden absolute top-219.75 left-8.75 z-10 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-219.75 right-8.75 z-10 pointer-events-none xl:block" />
    </>
  );
};

export default BottomLine;
