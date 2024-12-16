
import React from 'react';
import Image from 'next/image';

const Product: React.FC = () => {
  
  const productImages = [
    '/girl2.png',
    '/boy2.png',
    '/girl3.png',
    '/girl4.png',
    '/Rone.png',
    '/Rtwo.png',
    '/Rthree.png',
    '/Rfour.png',
  ];

  return (
    <section className="bg-white mx-auto p-8 sm:p-16 lg:p-20 xl:p-24" style={{ width: '100%', maxWidth: '1440px' }}>
      <div className="container mx-auto text-center" style={{ maxWidth: '1124px', padding: '80px 0', gap: '80px' }}>
        <div className="row mb-12 mx-auto text-center" style={{ maxWidth: '692px' }}>
          <h2 className="text-center font-medium" style={{ fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '30px', letterSpacing: '0.2px', color: '#737373', margin: '0 auto' }}>Featured Products</h2>
          <h3 className="text-center font-bold mt-4" style={{ fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '32px', letterSpacing: '0.1px', color: '#252B42', margin: '0 auto' }}>BESTSELLER PRODUCT</h3>
          <p className="mt-4 text-center" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#737373', margin: '0 auto' }}>
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="row flex flex-wrap justify-center gap-8 mx-auto" style={{ maxWidth: '1049px' }}>
          {productImages.map((imageSrc, index) => (
            <div key={index} className="col-md-3 w-full sm:w-[238px] h-auto mx-auto">
              <div className="product-card bg-white mx-auto" style={{ maxWidth: '239px', height: 'auto' }}>
                <div className="product-cover relative" style={{ maxWidth: '239px', height: '427px' }}>
                  <Image src={imageSrc} alt="Product Cover" layout="fill" objectFit="cover" />
                </div>
                <div className="frame p-6 text-center" style={{ maxWidth: '239px', height: '188px', paddingTop: '25px', paddingRight: '25px', paddingBottom: '35px', paddingLeft: '25px', gap: '10px' }}>
                  <h5 className="font-bold" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', color: '#252B42', margin: '0 auto' }}>Graphic Design</h5>
                  <a href="#" className="font-medium" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '24px', letterSpacing: '0.2px', color: '#737373', margin: '10px auto' }}>English Department</a>
                  <div className="prices flex justify-center items-center mt-4 mx-auto" style={{ width: '108px', height: '34px', paddingTop: '5px', paddingRight: '3px', paddingBottom: '5px', paddingLeft: '3px', gap: '5px' }}>
                    <h5 className="line-through text-center" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', color: '#BDBDBD' }}>$16.48</h5>
                    <h5 className="text-center" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.1px', color: '#23856D' }}>$6.48</h5>
                  </div>
                  <div className="product-colors flex justify-center items-center mt-4 mx-auto" style={{ gap: '6.08px' }}>
                    <div className="rounded-full" style={{ width: '16px', height: '16px', backgroundColor: '#23A6F0' }}></div>
                    <div className="rounded-full" style={{ width: '16px', height: '16px', backgroundColor: '#23856D' }}></div>
                    <div className="rounded-full" style={{ width: '16px', height: '16px', backgroundColor: '#E77C40' }}></div>
                    <div className="rounded-full" style={{ width: '16px', height: '16px', backgroundColor: '#252B42' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Product;
