"use client";
import Image from "next/image";
import React from "react";

const cardArr = [
  {
    title: "Phase 01",
    description: "2022 - Q1 2023",
    data: [
      { id: 0, name: "Commitment", success: true },
      { id: 1, name: "Commitment", success: true },
      { id: 2, name: "Commitment", success: true },
      { id: 3, name: "Commitment", success: true },
      { id: 4, name: "Commitment", success: true },
    ],
  },
  {
    title: "Phase 02",
    description: "Q2 2024",
    data: [
      { id: 0, name: "Commitment", success: true },
      { id: 1, name: "Commitment", success: true },
      { id: 2, name: "Commitment", success: false },
      { id: 3, name: "Commitment", success: false },
      { id: 4, name: "Commitment", success: false },
    ],
  },
  {
    title: "Phase 03",
    description: "Q3 2024",
    data: [
      { id: 0, name: "Commitment", success: true },
      { id: 1, name: "Commitment", success: true },
      { id: 2, name: "Commitment", success: false },
      { id: 3, name: "Commitment", success: false },
      { id: 4, name: "Commitment", success: false },
    ],
  },
  {
    title: "Phase 04",
    description: "Q4 2024",
    data: [
      { id: 0, name: "Commitment", success: true },
      { id: 1, name: "Commitment", success: true },
      { id: 2, name: "Commitment", success: false },
      { id: 3, name: "Commitment", success: false },
      { id: 4, name: "Commitment", success: false },
    ],
  },
];

const Roadmap = () => {
  const [is1Open, setIs1Open] = React.useState(false);
  const [is2Open, setIs2Open] = React.useState(false);
  const [is3Open, setIs3Open] = React.useState(true);
  const [is4Open, setIs4Open] = React.useState(true);

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-[32px] sm:text-5xl">Roadmap</h2>
      <div className="flex gap-7 w-full justify-stretch overflow-y-auto">
        {cardArr.map((el, i) => (
          <div
            key={el.title}
            className={`border p-7 flex ${(i === 2 || i === 3) ? "min-w-[253px] w-[160%]" : "min-w-[253px]"} flex-col gap-3 rounded-[30px] ${
              i === 0
                ? "bg-gradient-to-t from-secondary to-moduleDark via-moduleDark border-secondary"
                : "bg-moduleDark border-highlightDark"
            }`}
          >
            <div className="flex justify-between gap-3 items-center">
              <h3 className="text-2xl">{el.title}</h3>
              <button className="rounded-xl p-2 w-10 h-10 bg-highlightDark flex items-center justify-center">
                <Image
                  src={(i === 2 || i === 3) ? "/roadmap/open.svg" : "/roadmap/close.svg"}
                  alt="close"
                  width={22}
                  height={22}
                  className=""
                />
              </button>
            </div>
            <div className="rounded-xl p-2 w-fit monotext bg-brandBacking whitespace-nowrap text-primary">
              {el.description}
            </div>
            {(i === 2 || i === 3) && (
              <div className="flex flex-col gap-3 ">
                {el.data.map((el) => (
                  <div key={el.id} className="flex gap-3 items-center">
                    <Image
                      src={
                        el.success
                          ? "/roadmap/success.svg"
                          : "/roadmap/n-success.svg"
                      }
                      alt="success"
                      width={22}
                      height={22}
                      className=""
                    />{" "}
                    <p className="text-sm sm:text-base text-landingSubtext">{el.name}</p>
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
