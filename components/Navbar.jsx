import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-50 backdrop-blur-lg px-7 sm:px-12 py-8 fixed top-0 w-full flex border-b border-b-moduleDark items-center justify-between bg-[#11111160]">
      <div>
        <Image
          alt="logo"
          src="/navbar/logo.svg"
          width={180}
          height={33}
          className="hidden md:flex"
        />
        <Image
          alt="logo"
          src="/navbar/logoShort.svg"
          width={33}
          height={33}
          className="flex md:hidden"
        />
      </div>
      <div className="flex items-center gap-3 sm:gap-4 max-h-10">
        <a
          href="https://app.toadswap.org/?input=ether&output=0xd377f28245bc505190c8f34d2bfe5f215754f634"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 monotext py-3 h-12 hidden sm:flex bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-primary items-center justify-center rounded-2xl"
        >Buy 0xLP</a>
        <a
          href="https://linktr.ee/0xliquidity"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 h-12 bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all rounded-2xl flex items-center justify-center"
        >
          <Image
            src="/navbar/linktree.svg"
            alt="linktree"
            width={16}
            height={20}
          />
        </a>
        <a
          href="https://docs.0xliquidityswap.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 h-12 font-semibold bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-maintextDark rounded-2xl flex items-center justify-center gap-3"
        >
          <Image
            src="/navbar/gitbook.svg"
            alt="linktree"
            width={24}
            height={17}
          />
          <p className="hidden sm:flex">Read docs</p>
        </a>
        <a
          href="https://app.0xliquidityswap.io/"
          className="px-2 h-12 sm:px-4 py-3 font-semibold hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary text-backingDark rounded-2xl flex items-center justify-center w-[140px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Launch App</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
