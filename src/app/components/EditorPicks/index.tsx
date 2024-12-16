
import React from 'react';
import Image from 'next/image';

const EditorPicks: React.FC = () => {
  return (
    <section className="container mx-auto mt-20 px-4" style={{ width: '1050px', padding: '80px 0', gap: '48px' }}>
      <div className="text-center mb-12 " style={{ width: '607px', height: '62px', margin: '0 auto', gap: '10px', transform: 'translateY(-20px)' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap" style={{ width: '181px', height: '32px', fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '32px', letterSpacing: '0.1px', color: '#252B42', margin: '0 auto' }}>EDITOR'S PICK</h2>
        <p className="mt-2 text-lg" style={{ width: '347px', height: '20px', fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#737373', textAlign: 'center', margin: '10px auto' }}>
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <div className="relative w-[510px] h-[500px] bg-cover bg-white">
          <Image src="/men.png" alt="Men" layout="fill" objectFit="cover" className="filter brightness-75" />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75" style={{ width: '170px', height: '48px', color: '#FFFFFF' }}>
            <h5 className="font-bold text-lg" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', textAlign: 'center', color: '#252B42' }}>MEN</h5>
          </div>
        </div>
        <div className="relative w-[240px] h-[500px] bg-cover bg-white">
          <Image src="/women.png" alt="Women" layout="fill" objectFit="cover" className="filter brightness-75" />
          <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75" style={{ width: '136px', height: '48px', color: '#FFFFFF' }}>
            <h5 className="font-bold text-lg" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', textAlign: 'center', color: '#252B42' }}>WOMEN</h5>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative w-[240px] h-[242px] bg-cover bg-white">
            <Image src="/girl.png" alt="Girl" layout="fill" objectFit="cover" className="filter brightness-75" />
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75" style={{ width: '170px', height: '48px', color: '#FFFFFF' }}>
              <h5 className="font-bold text-lg" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', textAlign: 'center', color: '#252B42' }}>GIRL</h5>
            </div>
          </div>
          <div className="relative w-[240px] h-[242px] bg-cover bg-white mt-4">
            <Image src="/boy.png" alt="Boy" layout="fill" objectFit="cover" className="filter brightness-75" />
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75" style={{ width: '170px', height: '48px', color: '#FFFFFF' }}>
              <h5 className="font-bold text-lg" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', textAlign: 'center', color: '#252B42' }}>BOY</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPicks;
