import React from 'react';
import Image from 'next/image';

const VitaClassic = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto sm:h-[711px] bg-[#23856D] relative'>
      <div className="flex flex-col sm:flex-row w-full max-w-[1440px] h-full gap-6 sm:gap-[30px] items-center relative p-6 sm:p-0">
        <div className='w-full sm:w-[509px] h-full pt-[40px] sm:pt-[60px] gap-[20px] relative z-10'>
          <div className='w-full h-auto sm:h-[160px] sm:pt-[120px]'>
            <h5 className='font-sans font-normal text-[18px] sm:text-[20px] leading-[30px] tracking-[0.2px] text-[#FFFFFF]'>SUMMER 2020</h5>
            <h1 className='font-bold leading-[50px] sm:leading-[80px] tracking-[0.2px] text-[38px] sm:text-[58px] text-[#FFFFFF] mt-[20px] sm:mt-[40px]'>
              Vita Classic Product
            </h1>
            <h4 className='font-normal leading-[22px] sm:leading-[30px] mt-[20px] sm:mt-[40px] tracking-[0.2px] text-[#FFFFFF]'>
              We know how large objects will act, we know how small objects will act.
            </h4>
            <div className='flex gap-4 sm:gap-[10px] mt-[20px] sm:mt-[40px]'>
              <button className="w-[77px] h-[32px] md:text-base px-4 py-2 text-white border-none">$16.48</button>
              <button className='w-[140px] sm:w-[184px] h-[40px] sm:h-[52px] text-[14px] leading-[22px] tracking-[0.2px] text-center bg-[#2DC071] text-white font-extrabold'>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-end items-end w-full sm:w-[443px] h-full relative z-0'>
          <div className='relative w-[300px] h-[300px] sm:w-[443px] sm:h-[685px] sm:bottom-[-1px] sm:right-[-250px]'>
            <Image src='/boy6.png' alt='boy' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VitaClassic;
