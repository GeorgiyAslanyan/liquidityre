'use client'
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";


const Hero = () => {
  const [price, setPrice] = React.useState(0);
  const [marketCap, setMarketCap] = React.useState(0);
  const [holders, setHolders] = React.useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.coingecko.com/api/v3/coins/0xliquidity?tickers=false&community_data=false&developer_data=false&sparkline=false')
        .then(response => {
          setMarketCap(response.data['market_data']['fully_diluted_valuation']["usd"]);
          setPrice(response.data['market_data']['current_price']["usd"]);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = () => {
     
      axios.get('https://api.chainbase.online/v1/token/holders?chain_id=1&contract_address=0xd377F28245BC505190c8f34D2bFE5f215754f634', {
        headers: {
          accept: 'application/json',
          'X-API-Key': '2dUb3e0Yj6g5LmZVOttHnhlDSbq',
        }
      })
        .then(response => {
          setHolders(response.data.count);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  
  return (
    <div className="min-h-screen w-full flex justify-center items-center relative pt-[110px] pb-[150px]">
      <Image
        src="/grid.svg"
        alt="grid"
        width={1920}
        height={1080}
        className="z-[11] bg-contain hidden lg:block pointer-events-none bg-center absolute top-0 left-0 w-full"
      />
      <Image
        src="/gridSM.svg"
        alt="grid"
        width={1920}
        height={1080}
        className="z-[11] bg-contain block lg:hidden pointer-events-none bg-center absolute top-0 left-0 w-full"
      />
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="text-center items-center justify-center flex flex-col gap-5">
          <h2 className="text-lg sm:text-xl">
            <span className="text-primary">Time Is Money </span> - Immediate
            Access to Your Capital
          </h2>
          <h1 className="text-3xl sm:text-4xl">Pioneered  <span className="text-primary">Liquidity </span> and <span className="text-primary">Venture </span>  Solutions</h1>
          <button className="px-4 py-3 hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary gap-2 font-semibold text-backingDark rounded-2xl w-fit flex items-center justify-center">
            <p>Get Started</p>
            <Image
              src="/hero/arrowright.svg"
              alt="arrowright"
              width={18}
              height={18}
            />
          </button>
        </div>
        <video
          width="100%"
          height="100%"
          className="-mt-10 z-[-1] -mb-10 h-[400px] md:h-full object-cover md:object-contain pointer-events-none"
          title="Video tooltip on hover."
          poster="/pre.png"
          muted
          playsInline
          loop
          autoPlay>
          <source src="/clock_alpha.webm" type="video/webm" />
          <source src="/clock_alpha.mp4" type="video/mp4" />
        </video>
        {/* <Image
          width={700}
          height={686}
          src="/hero/clock.svg"
          alt="clock"
          
        /> */}
        <Image
          src="/hero/linetree.svg"
          alt="clock"
          width={787}
          height={35}
          className="px-5 sm:px-[100px] lg:px-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-5 md:gap-20 mt-7 w-full">
          {[{ title: "Market Cap", value: `$${marketCap}` },
  { title: "Token Price", value: `$${price}` },
  { title: "Holders", value: `${holders}` }].map((el) => (
            <div
              key={el.title}
              className="py-6 w-full px-5 lg:px-20 rounded-[20px] border border-secondary bg-backingDark flex flex-col gap-2 items-center justify-center"
            >
              <p className="text-sm sm:text-lg font-semibold">{el.title}</p>
              <p className="text-2xl sm:text-[32px] text-primary monotext">
                {el.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
