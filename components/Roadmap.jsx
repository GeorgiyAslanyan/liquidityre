"use client";
import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Phase 01",
    description: "Foundation (Q3 2023)",
    data: [
      {
        id: 0,
        title: "Conceptualization:",
        name: " Initiation of concept development, comprehensive market analysis, and theoretical planning.",
        success: true,
      },
      {
        id: 1,
        title: "Business Framework:",
        name: " Establishment of a robust business model and initial documentation formulation.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 02",
    description: "Development & Partnerships (Q4 2023)",
    data: [
      {
        id: 0,
        title: "Infrastructure Development:",
        name: " Launch of EVM Messages Bot and a Telegram Bot for liquidity unlock applications, alongside the first version of our website and social media presence.",
        success: true,
      },
      {
        id: 1,
        title: "Strategic Alliances:",
        name: " Forging a partnership with Kleros, validating our concept through real transactions, and gathering user feedback for iterative improvements.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 03",
    description: "Expansion (Q1-Q2 2024)",
    data: [
      {
        id: 0,
        title: "Growth Initiatives:",
        name: " Introduction of website v2, token launch, comprehensive audit and KYC procedures, listings on CG/CMC, and heightened marketing efforts.",
        success: true,
      },
      {
        id: 1,
        title: "Community Engagement:",
        name: " Launch of referral programs (bounty hunter rewards) and development of a user-friendly UX infrastructure for our Dapp, including a listing and auction platform.",
        success: true,
      },
    ],
  },
  {
    title: "Phase 04",
    description: "Ecosystem Maturation (Q2-Q3 2024)",
    data: [
      {
        id: 0,
        title: "Product Launch:",
        name: " Official launch of the Dapp, followed by an updated suite of documentation.",
        success: true,
      },
      {
        id: 1,
        title: "Decentralized Governance:",
        name: " Implementation of a DAO system and a profit distribution mechanism.",
        success: true,
      },
      {
        id: 2,
        title: "Ecosystem Strengthening:",
        name: " Expansion of partnerships and collaborations to further enrich our ecosystem with other leading organizations.",
        success: true,
      },
      {
        id: 3,
        name: " Additional developments to be announced regarding collateralization, VC funding, and Locking services.",
        success: true,
      },
    ],
  },
];

const Roadmap = () => {
  const [is1Open, setIs1Open] = React.useState(true);
  const [is2Open, setIs2Open] = React.useState(false);
  const [is3Open, setIs3Open] = React.useState(false);
  const [is4Open, setIs4Open] = React.useState(false);

  const onOpenClick = (i) => {
    if (i === 0) {
      setIs1Open(!is1Open);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(false);
    } else if (i === 1) {
      setIs1Open(false);
      setIs2Open(!is2Open);
      setIs3Open(false);
      setIs4Open(false);
    } else if (i === 2) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(!is3Open);
      setIs4Open(false);
    } else if (i === 3) {
      setIs1Open(false);
      setIs2Open(false);
      setIs3Open(false);
      setIs4Open(!is4Open);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-[32px] sm:text-5xl leading-[1]">Roadmap</h2>
      <div className="flex gap-7 w-full justify-stretch overflow-y-auto">
        {cardArr.map((el, i) => (
          <div
            key={el.title}
            className={`h-[340px] border p-7 flex ${
              !is1Open && !is2Open && !is3Open && !is4Open
                ? "w-1/4 min-w-[253px]"
                : (i === 0 && is1Open) ||
                  (i === 1 && is2Open) ||
                  (i === 2 && is3Open) ||
                  (i === 3 && is4Open)
                ? "min-w-[253px] w-[100%]"
                : "min-w-[253px]"
            } flex-col gap-3 rounded-[30px] ${
              i === 0
                ? "bg-gradient-to-t from-secondary to-moduleDark via-moduleDark border-secondary"
                : "bg-moduleDark border-highlightDark"
            }`}
          >
            <div className="flex justify-between gap-3 items-center">
              <h3 className="text-2xl">{el.title}</h3>
              <button
                onClick={() =>
                  onOpenClick(i)
                }
                className="rounded-xl p-2 w-10 h-10 hover:bg-[#DCB97640] ease-linear duration-100 transition-all bg-highlightDark flex items-center justify-center"
              >
                <Image
                  src={
                    (i === 0 && is1Open) ||
                    (i === 1 && is2Open) ||
                    (i === 2 && is3Open) ||
                    (i === 3 && is4Open)
                      ? "/roadmap/open.svg"
                      : "/roadmap/close.svg"
                  }
                  alt="close"
                  width={22}
                  height={22}
                  className=""
                />
              </button>
            </div>
            <div className="rounded-xl p-2 w-fit monotext bg-brandBacking text-primary text-sm">
              {el.description}
            </div>
            {((i === 0 && is1Open) ||
              (i === 1 && is2Open) ||
              (i === 2 && is3Open) ||
              (i === 3 && is4Open)) && (
              <div className="flex flex-col gap-3 overflow-y-auto">
                {el.data.map((el) => (
                  <div key={el.id} className="flex gap-3 items-center">
                    {/* <Image
                      src={
                        el.success
                          ? "/roadmap/success.svg"
                          : "/roadmap/n-success.svg"
                      }
                      alt="success"
                      width={22}
                      height={22}
                      className=""
                    />{" "} */}
                    <p className="text-sm sm:text-base text-landingSubtext">
                      <span className="">{el.title && el.title}</span>
                      {el.name}
                    </p>
                  </div>
                ))}{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
