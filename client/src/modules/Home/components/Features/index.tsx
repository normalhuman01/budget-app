import React from 'react';
import Item from '../../../../assets/item.svg';
const Features = () => {
  return (
    <section className="font-bai font-bold text-[1.95rem] text-[#333] grid md:grid-cols-2 xl:grid-cols-4  mt-10  gap-8 ">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col ">
            <span>Hot 🔥</span>
            <span>deals for you</span>
          </div>
          <span className="w-[233px] text-[0.9rem] font-normal text-[#555]">
            Online shopping for retail sales direct to consumers
          </span>
        </div>
      </div>
      {['1.5% cashback', '30-day terms', 'Save Money'].map((item) => (
        <div className="flex justify-center">
          <div className="flex flex-col justify-around">
            <img src={Item} className="w-7" />
            <span className="text-[1.2rem] ">{item}</span>
            <span className="w-[233px] text-[0.9rem] font-normal text-[#555]">
              Online shopping for retail sales direct to consumers
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
