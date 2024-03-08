import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative mb-10 p-7 overflow-hidden rounded-[30px] border border-secondary bg-moduleDark flex justify-between gap-32 flex-col'>
        <Image src="/gradient.svg" alt="footer" width={1920} height={500} className='w-full pointer-events-none absolute bottom-0 rotate-180 object-contain left-0'/>
        <div className='flex justify-between gap-10'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-32 items-start w-full'>
                <div className='flex justify-between w-full lg:w-fit'>
                <Image src="/navbar/logo.svg" alt="logo" width={180} height={33} />
                <div className='flex lg:hidden gap-5 items-start'>
                <Image src="/footer/telegram.svg" alt="telegram" width={28} height={24} className='h-7' />
                <Image src="/footer/x.svg" alt="x" width={26} height={24} className='h-7' />
                <Image src="/footer/gitbook.svg" alt="gitbook" width={33} height={24} className='h-7' />
                <Image src="/footer/medium.svg" alt="medium" width={42} height={24} className='h-7' />
            </div>
                </div>
                <div className='flex gap-[70px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-primary font-semibold'>About</p>
                        <p className='text-subtextDark '>Documentation</p>
                        <p className='text-subtextDark '>CoinMarketCap</p>
                        <p className='text-subtextDark '>CoinGecko</p>
                        <p className='text-subtextDark '>Disclaimer</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-primary font-semibold'>Support</p>
                        <p className='text-subtextDark '>Getting Started</p>
                        <p className='text-subtextDark '>FAQ</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-primary font-semibold'>Community</p>
                        <p className='text-subtextDark '>Telegram</p>
                        <p className='text-subtextDark '>Twitter</p>
                        <p className='text-subtextDark '>Medium</p>
                    </div>
                </div>
            </div>
            <div className='gap-5 items-start hidden lg:flex min-w-[200px]'>
                <Image src="/footer/telegram.svg" alt="telegram" width={28} height={24} className='h-7' />
                <Image src="/footer/x.svg" alt="x" width={26} height={24} className='h-7' />
                <Image src="/footer/gitbook.svg" alt="gitbook" width={33} height={24} className='h-7' />
                <Image src="/footer/medium.svg" alt="medium" width={42} height={24} className='h-7' />
            </div>
        </div>
        <div>
            <hr className='h-[1px] border-none bg-secondary mb-5'/>
            <div className='flex justify-between text-subtextDark text-sm'>
                <p>©2024 ZeroXLabs</p>
                <p>contact@0xLiquidityswap.co</p>
            </div>
        </div>
    </div>
  )
}

export default Footer