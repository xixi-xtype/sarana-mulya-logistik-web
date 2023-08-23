import React from 'react';
import Recommendation1 from '../../../../public/img/cta-bg.png';

export default function OurMission() {
  return (
    <div className="w-full h-full mt-20 relative">
      <div
        className="h-[360px] bg-cover bg-fixed"
        style={{ backgroundImage: `url(${Recommendation1.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{' '}
        {/* Dark overlay */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-white text-center flex px-28 items-center gap-5">
          <div>
            <h1 className="font-bold text-2xl mb-4">
              Your Trust Is Our Mission
            </h1>
            <p className="mb-4">
              Bagian dari kesuksesan kami berasal dari moto kami Your Trust is
              Our Mission. Motto ini telah menjadi DNA dalam kehidupan kita
              sehari-hari dimana kami selalu berusaha untuk memberikan pelayanan
              yang terbaik dan bertanggung jawab kepada semua pelanggan kami.
            </p>
          </div>
          <button className="bg-base-blue text-white rounded-full px-5 py-2 w-[30rem] h-max m-0">
            +62 21 22815019
          </button>
        </div>
      </div>
    </div>
  );
}
