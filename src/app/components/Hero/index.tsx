
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative py-20 bg-white sm:text-3xl md:4xl lg:text-5xl">
      <div className="container mx-auto sm:text-3xl md:4xl lg:text-5xl" style={{ width: '1050px', height: '770px' }}>
        <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden" style={{ height: '600px' }}>
          <div className="absolute inset-0 z-0 h-full w-full ">
            <Image src="/shop-1.png" alt="Hero Image" layout="fill" objectFit="cover" objectPosition="top center"/>
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-center items-start h-full">
            <h5 className="sm:text-3xl md:4xl lg:text-5xl text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', color: '#FFFFFF' }}>SUMMER 2020</h5>
            <h1 className="sm:text-3xl md:4xl lg:text-5xl text-6xl font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '58px', lineHeight: '80px', letterSpacing: '0.2px', color: '#FFFFFF' }}>NEW COLLECTION</h1>
            <h4 className="sm:text-3xl md:4xl lg:text-5xl text-lg mb-6" style={{ fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '32px', letterSpacing: '0.1px', color: '#FFFFFF' }}>We know how larger objects will act,<br/> but things on a small scale.</h4>
            
            <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
