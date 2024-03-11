import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <div className="w-full relative z-10">
      <div className="absolute z-[8] w-full -top-10 flex justify-center">
        <div className="p-20 border w-[90%] min-h-20  border-highlightDark rounded-[30px] bg-backingDark"></div>
      </div>
      <div className="absolute z-[9] w-full -top-5 flex justify-center">
      <div className="p-[15px] sm:p-20 border w-[95%] min-h-20 border-highlightDark rounded-[30px] bg-backingDark"></div>
      </div>
      <div className="p-0 sm:p-5 relative z-10 border gap-5 border-highlightDark rounded-2xl sm:rounded-[30px] bg-[#171717] grid grid-cols-1 lg:grid-cols-3">
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center justify-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute pointer-events-none w-full top-0"
          />
          <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
            <Image
              src="/advantages/hammer.svg"
              alt="hammer"
              width={40}
              height={40}
            />
          </div>
          <p className="text-2xl sm:text-[32px] font-semibold">
            Decentralized{" "}
            <span className="text-primary">Liquidity Listing</span> and{" "}
            <span className="text-primary">Auction Platform</span>
          </p>
          <p className="text-sm sm:text-base text-landingSubtext">
            We aim to introduce a decentralized marketplace for{" "}
            <span className="text-primary">liquidity listing</span>, complete
            with an{" "}
            <span className="text-primary">innovative buyout function</span>{" "}
            facilitated through a{" "}
            <span className="text-primary">transparent auction mechanism</span>.
            This feature will empower users to engage dynamically with liquidity
            assets, enhancing both accessibility and market efficiency with{" "}
            <span className="text-primary">unmatched speed</span> and
            <span className="text-primary"> security</span>.
          </p>
        </div>
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center justify-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute w-full top-0"
          />
          <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
            <Image
              src="/advantages/decentralized.svg"
              alt="decentralized"
              width={40}
              height={40}
            />
          </div>
          <p className="text-2xl sm:text-[32px] font-semibold">
            Decentralized{" "}
            <span className="text-primary">Venture Capital</span> for{" "}
            <span className="text-primary">Emerging Projects</span>
          </p>
          <p className="text-sm sm:text-base text-landingSubtext">
            We are poised to transform into a decentralized venture
            capital fund, providing crucial support to budding and active
            developers. By funding liquidity in startup projects, we will be
            nurturing the{" "}
            <span className="text-primary">growth of innovative ideas</span> and{" "}
            <span className="text-primary">fostering new talent</span> in the
            DeFi ecosystem.
          </p>
        </div>
        <div className="relative overflow-hidden border border-secondary rounded-2xl p-2 sm:p-[30px] flex flex-col gap-[30px] items-center justify-center text-center">
          <Image
            src="/gradient.svg"
            alt="gradient"
            width={100}
            height={100}
            className="absolute w-full top-0"
          />
          <div className="p-5 rounded-2xl border border-secondary flex items-center justify-center">
            <Image
              src="/advantages/advanced.svg"
              alt="advanced"
              width={40}
              height={40}
            />
          </div>
          <p className="text-2xl sm:text-[32px] font-semibold">
            Advanced <span className="text-primary">Liquidity Locker</span>{" "}
            Solutions
          </p>
          <p className="text-sm sm:text-base text-landingSubtext">
            We plan to integrate sophisticated liquidity locker services,
            offering <span className="text-primary">enhanced security</span> and{" "}
            <span className="text-primary">flexibility</span> for{" "}
            <span className="text-primary">project liquidity</span>. This
            development will further cement our platform&apos;s position as a
            comprehensive solution provider in the DeFi landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
