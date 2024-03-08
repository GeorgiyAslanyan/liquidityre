import Image from "next/image";
import React from "react";

const Security = () => {
  return (
    <div className="border mb-[100px] border-secondary rounded-2xl flex gap-10 bg-gradient-to-r from-secondary via-backingDark to-backingDark">
      <div className="p-5 lg:p-[100px] flex items-center justify-center rounded-2xl border border-secondary bg-backingDark">
        <Image src="/security/security.svg" alt="security" width={500} height={500} />
      </div>
      <div className="flex justify-center flex-col gap-5 pr-5 lg:pr-36">
        <p className="text-primary w-fit bg-brandBacking rounded-xl px-2 py-1">
          Security
        </p>
        <p className="text-5xl">We Care About Security</p>
        <p className="text-highlightLight">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary w-fit bg-brandBacking rounded-xl px-2 py-1 flex gap-3 items-center"
        >Learn more <Image src="/security/arrowupright.svg" alt="arrow" width={22} height={22} /></a>
      </div>
    </div>
  );
};

export default Security;
