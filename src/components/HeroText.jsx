const HeroText = ({
  sText,
  mText1,
  mText2
}) => {
 
  return (
    <>
      <div className="relative font-amiamie-round pt-8 pb-0 md:py-16 px-12 border-b-2 md:border-0">
        <h2 className="md:text-[16px] tracking-widest text-lg md:tracking-[12px] text-black md:py-7 pl-4 uppercase">
          {sText}
        </h2>
        <h1 className="tracking-wider pointer-events-none uppercase pt-26 md:pt-8 text-7xl md:text-9xl relative">
          {mText1}{" "}
          <span className="font-bold block md:inline text-right ml-22 md:ml-0  gradient">
            {mText2}
          </span>
        </h1>
      </div>

    </>
  );
};

export default HeroText;
