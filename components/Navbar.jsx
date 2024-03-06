import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='z-50 backdrop-blur-lg px-12 py-8 fixed top-0 w-full flex border-b border-b-moduleDark items-center justify-between bg-[#11111160]'>
        <div><Image alt="logo" src="/navbar/logo.svg" width={180} height={33}/></div>
        <div className="flex items-center gap-4 max-h-10">
            <button className="px-4 py-3 bg-moduleDark text-primary flex items-center justify-center rounded-2xl">Buy 0xLP</button>
            <button className="px-4 py-3 bg-moduleDark rounded-2xl flex items-center justify-center"><Image src="/navbar/linktree.svg" alt="linktree" width={16} height={20}/></button>
            <button className="px-4 py-3 font-semibold bg-moduleDark text-maintextDark rounded-2xl flex items-center justify-center gap-3"><Image src="/navbar/gitbook.svg" alt="linktree" width={24} height={17}/><p>Read docs</p></button>
            <button className="px-4 py-3 font-semibold bg-primary text-backingDark rounded-2xl flex items-center justify-center w-[140px]"><p>Launch App</p></button>
        </div>
    </div>
  )
}

export default Navbar