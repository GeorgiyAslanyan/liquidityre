import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Safety First",
    icon: "/whyus/safety.svg",
    description:
      "In collaboration with Kleros, we guarantee the utmost security for every transaction. Kleros a renowned decentralized arbitration service, ensures that every swap is executed with precision and security in mind.",
    firstText: true,
  },
  {
    title: "Security and Trust Assurance",
    icon: "/whyus/immediate.svg",
    description:
      "To build a foundation of trust and security with investors, we utilized an audit service and went through a KYC process with Cyberscope, a leading company in this field.",
    secondText: true,
  },
  {
    title: "Сonfidential Experience",
    icon: "/whyus/global.svg",
    description:
      "We ensure a personalized and confidential experience, understanding the unique needs and privacy concerns of each client.",
  },
];

const WhyUs = () => {
  return (
    <div className="p-[15px] sm:p-[30px] lg:p-[60px] flex flex-col gap-[15px] sm:gap-[30px] items-center border border-secondary rounded-[30px]">
      <h3 className="text-[32px] sm:text-[46px] text-center monotext">
        Why Choose 0xLiquidity?
      </h3>
      <div className="grid grid-cols-3 gap-[30px]">
        {cardArr.map((el, index) => (
          <div
            key={el.title}
            className={`border border-highlightDark bg-moduleDark rounded-2xl p-[15px] sm:p-[30px] flex flex-col gap-[15px] ${
              index === 2
                ? "col-span-3 lg:col-span-1"
                : "col-span-3 lg:col-span-1 justify-between"
            }`}
          >
            <div className="flex gap-3 items-center">
              <Image src={el.icon} alt={el.title} width={30} height={30} />{" "}
              <p className="bg-brandBacking text-brand px-[10px] py-[6px] monotext rounded-[15px]">
                {el.title}
              </p>
            </div>
            <p className="text-sm sm:text-base text-landingSubtext">
              {el.description}
            </p>
            {el.firstText ? (
              <div className="text-sm sm:text-base  text-maintextDark rounded-2xl flex items-center gap-3 px-0 sm:px-5 py-1 border-0 sm:border border-secondary">
                <p className="block lg:hidden xl:block">Secured by</p>
                <a
                  className="hover:scale-105 ease-linear duration-100 transition-all"
                  href="https://kleros.world/xLiquidity-Swap-6823cc1b2f194ea688c6e36fa5d0e2f2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whyus/kleros.svg"
                    alt="kleros"
                    width={106}
                    height={40}
                    className="my-3"
                  />
                </a>
              </div>
            ) : el.secondText ? (
              <div className="text-sm min-h-[73px] justify-center sm:text-sm rounded-2xl flex  items-center gap-3 lg:gap-3 2xl:gap-6 monotext px-0 sm:px-5 py-1 border-0 sm:border border-secondary">
                <a
                  className="block lg:hidden xl:block my-3 min-w-[63px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking"
                  href="https://github.com/cyberscope-io/audits/blob/main/0xlp/audit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audit
                </a>
                <Image
                  src="/whyus/cyberscope.png"
                  alt="kleros"
                  width={224}
                  height={40}
                  className="w-[47%] sm:w-auto xl:w-[47%]"
                />
                <a
                  className="block lg:hidden xl:block my-3 min-w-[63px] text-center px-3 py-2 rounded-xl hover:bg-[#DCB97640] ease-linear duration-100 transition-all text-primary bg-brandBacking"
                  href="https://github.com/coinscope-co/kyc/blob/main/0xlp/kyc.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KYC
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
