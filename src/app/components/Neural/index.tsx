import React from 'react';
import Image from 'next/image';

const Neural: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto sm:h-[682px] bg-white">
      <div className="flex flex-col sm:flex-row w-full max-w-[1439px] h-full gap-[30px] p-6 sm:p-0">
        {/* Image Section */}
        <div className="w-full sm:w-[704px] h-[400px] sm:h-[682px] relative">
          <Image
            src="/asiangirl.png"
            alt="Neural"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Additional Content Section */}
        <div className="flex flex-col w-full sm:w-[573px] h-auto gap-[20px] sm:gap-[30px] my-[40px] sm:my-[200px] px-6 sm:px-0">
          <h5 className="font-bold text-[16px] sm:text-[18px] leading-[24px] tracking-[0.1px]">
            SUMMER 2024
          </h5>
          <h1 className="font-bold text-[32px] sm:text-[40px] leading-[40px] sm:leading-[50px] tracking-[0.2px] text-[#252B42]">
            Part of the Neural Universe
          </h1>
          <h4 className="font-normal text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] tracking-[0.2px] text-[#737373]">
            We know how large objects will act, but things on a small scale...
          </h4>

          <div className="flex items-center justify-start gap-[10px] sm:gap-[20px]">
            {/* Filled Button */}
            <button className="w-[140px] sm:w-[156px] h-[45px] sm:h-[52px] px-[20px] sm:px-[40px] py-[10px] rounded-[5px] bg-[#2DC071] text-white font-montserrat text-[14px] leading-[22px] tracking-[0.2px]">
              BUY NOW
            </button>

            {/* Outlined Button */}
            <button className="w-[150px] sm:w-[173px] h-[45px] sm:h-[52px] px-[20px] sm:px-[40px] py-[10px] rounded-[5px] border bg-white text-[#2DC071] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neural;
