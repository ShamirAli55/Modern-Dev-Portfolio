import React from "react";

const HeroBtmText = ({ heading1, heading2, heading3 }) => {
  return (
    <div className="h-[50vh] w-full md:h-[35vh] text-2xl  leading-[40px] md:text-3xl uppercase my-8 md:py-10 px-8 tracking-wide md:leading-[45px] text-right">
      <h1 className="text-xl pt-12 md:pt-1 md:text-3xl">{heading1}</h1>
      <h1 className="text-xl md:text-3xl">{heading2}</h1>
      <h1 className="text-xl md:text-3xl">{heading3}</h1>
    </div>
  );
};

export default HeroBtmText;
