import Image from "next/image";
import React from "react";

const cardArr = [
    {title: "Market Cap", description: "151.23B+"},
    {title: "Token Price", description: "$0.01247"},
    {title: "Holders", description: "10.23k"},
]

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center relative pt-[110px] pb-[150px]">
      <Image
        src="/grid.svg"
        alt="grid"
        width={1920}
        height={1080}
        className="z-0 bg-contain pointer-events-none bg-center absolute top-0 left-0 w-full"
      />
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="text-center items-center justify-center flex flex-col gap-5">
          <h2 className="text-2xl">
            <span className="text-primary">Get your ETH</span> and fund your new
            ideas today!
          </h2>
          <h1 className="text-5xl">Let your ETH work for you!</h1>
          <button className="px-4 py-3 bg-primary gap-2 font-semibold text-backingDark rounded-2xl w-fit flex items-center justify-center">
          <p>Get Started</p>
            <Image
              src="/hero/arrowright.svg"
              alt="arrowright"
              width={18}
              height={18}
            />
          </button>
        </div>
        <Image
        className="-mt-10 -mb-10  pointer-events-none"
          src="/hero/clock.svg"
          alt="clock"
          width={700}
          height={686}/>
          <Image
          src="/hero/linetree.svg"
          alt="clock"
          width={787}
          height={35}/>
          <div className='grid grid-cols-3 gap-20 mt-7'>
                {cardArr.map(el => <div key={el.title} className="py-6 w-[316px] rounded-[20px] border border-secondary bg-backingDark flex flex-col gap-2 items-center justify-center">
                    <p className='text-lg font-semibold'>{el.title}</p>
                    <p className='text-[32px] text-primary'>{el.description}</p>
                </div>)}
          </div>
      </div>
    </div>
  );
};

export default Hero;
