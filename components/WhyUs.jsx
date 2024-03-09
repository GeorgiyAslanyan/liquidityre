import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Safety First",
    icon: "/whyus/safety.svg",
    description:
      "In collaboration with Kleros, we guarantee the utmost security for every transaction. Kleros a renowned decentralized arbitration service, ensures that every swap is executed with precision and security in mind.",
  },
  {
    title: "Security and Trust Assurance",
    icon: "/whyus/immediate.svg",
    description:
      "To build a foundation of trust and security with investors, we utilized an audit service and went through a KYC process with Cyberscope, a leading company in this field.",
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
      <h3 className="text-[32px] sm:text-[46px] text-center">Why Choose ØxLiquidity?</h3>
      <div className="grid grid-cols-3 gap-[30px]">
        {cardArr.map((el, index) => (
          <div
            key={el.title}
            className={`border border-highlightDark bg-moduleDark rounded-2xl p-[15px] sm:p-[30px] flex flex-col gap-[15px] ${index === 3 ? "col-span-3" : 'col-span-3 lg:col-span-1'}`}
          >
            <div className="flex gap-3 items-center">
              <Image src={el.icon} alt={el.title} width={30} height={30} />{" "}
              <p className="bg-brandBacking text-brand px-[10px] py-[6px] monotext rounded-[15px]">
                {el.title}
              </p>
            </div>
            <p className="text-sm sm:text-base text-landingSubtext">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
