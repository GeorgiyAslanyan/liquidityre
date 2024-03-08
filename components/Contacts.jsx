import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px]">
      <div className="rounded-[30px] text-center overflow-hidden bg-moduleDark px-4 sm:px-10 2xl:px-[120px]  py-7 sm:py-[60px] relative border border-highlightDark">
        <Image
          src="/gradient.svg"
          alt="gradient"
          width={100}
          height={100}
          className="absolute pointer-events-none w-full h-full object-cover left-0 top-0"
        />
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h3 className="font-semibold text-2xl sm:text-[32px]">
            Community-Driven Development
          </h3>
          <Image
            src="/contacts/community.svg"
            alt="community"
            width={300}
            height={218}
            className=""
          />
          <p className="text-sm sm:text-base text-landingSubtext">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      <div className="rounded-[30px] text-center overflow-hidden bg-moduleDark  px-4 sm:px-10 2xl:px-[120px] py-7 sm:py-[60px] relative border border-highlightDark">
        <Image
          src="/gradient.svg"
          alt="gradient"
          width={100}
          height={100}
          className="absolute pointer-events-none w-full h-full object-cover left-0 top-0"
        />
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h3 className="font-semibold text-2xl sm:text-[32px]">
            Referral Program
          </h3>
          <h3 className="font-semibold text-[32px] sm:text-[46px]">
            <span className="text-primary">Refer</span> a friend and{" "}
            <span className="text-primary">Earn 10$</span>
          </h3>
          <div className="flex justify-between text-[18px] font-semibold items-center w-full p-5 rounded-[20px] border border-secondary">
            <p className="text-sm sm:text-base text-landingSubtext">
              <span className="hidden sm:inline">https://</span>
              <span className="hidden sm:inline">
                ref.0xLiquidityswap.io/
              </span>
              <span className="inline sm:hidden">ref.0x....io/</span>
              <span className="text-primary">235634</span>
            </p>
            <button className="text-sm sm:text-base bg-primary text-backingDark px-[10px] py-[6px] rounded-[10px]">
              Copy
            </button>
          </div>
          <hr className="bg-highlightDark border-none h-[1px] w-full my-[30px]" />
          <div className="flex gap-10">
            <a
              className="h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] bg-brandBacking rounded-[20px] flex items-center justify-center"
              href="http://"
            >
              <Image
                src="/contacts/telegram.svg"
                alt="telegram"
                width={40}
                height={33}
                className=""
              />
            </a>
            <a
              className="h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] bg-brandBacking rounded-[20px] flex items-center justify-center"
              href="http://"
            >
              <Image
                src="/contacts/mail.svg"
                alt="mail"
                width={36}
                height={29}
                className=""
              />
            </a>
            <a
              className="h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] bg-brandBacking rounded-[20px] flex items-center justify-center"
              href="http://"
            >
              <Image
                src="/contacts/x.svg"
                alt="x"
                width={34}
                height={30}
                className=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
