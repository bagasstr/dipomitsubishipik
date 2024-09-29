"use client";
import React, { useState } from "react";
import data from "../../../data.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useModalStore from "@/app/lib/hooks";

const Tabs = () => {
  const [typeCars, setTypeCars] = useState(null);
  const [tab, setTab] = useState("btn-tab-1");
  const openModal = useModalStore((state) => state.openModal);

  const activeTab = (tab) => {
    setTab(tab);
  };

  const param = {
    spaceBetween: 10,
    slidesPerView: 2,

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  const passengerCars = data.filter(
    (item) => item.category === "Passenger Car"
  );
  const findTypeCars = (category, i) => {
    activeTab(`btn-tab-${i}`);
    const cars = data.filter((item) => item.category === category);
    setTypeCars(cars);
  };

  return (
    <div className=''>
      <section className='flex px-2 gap-x-4 overflow-x-scroll mb-4 scroll-smooth py-4 border-b-2 border-neutral-200'>
        <button
          className={`text-xs font-semibold border-2 rounded-md px-4 py-2.5 border-neutral-800 text-neutral-800 text-nowrap ${
            tab === "btn-tab-1" ? "active" : ""
          }`}
          id='btn-tab-1'
          onClick={() => findTypeCars("Passenger Car", 1)}>
          passenger car
        </button>
        <button
          className={`text-xs font-semibold border-2 rounded-md px-4 py-2.5 border-neutral-800 text-neutral-800 text-nowrap ${
            tab === "btn-tab-2" ? "active" : ""
          }`}
          id='btn-tab-2'
          onClick={() => findTypeCars("Light Commercial Car", 2)}>
          Light Commercial Car
        </button>
        <button
          className={`text-xs font-semibold border-2 rounded-md px-4 py-2.5 border-neutral-800 text-neutral-800 text-nowrap ${
            tab === "btn-tab-3" ? "active" : ""
          }`}
          id='btn-tab-3'
          onClick={() => findTypeCars("Commercial Car", 3)}>
          Commercial Car
        </button>
      </section>

      <section className='mt-[3rem]'>
        <Swiper {...param} className='h-[250px]'>
          {(typeCars || passengerCars)?.map((item) => (
            <>
              <SwiperSlide
                key={item.id}
                className='bg-neutral-300/40 backdrop-blur-md mx-2 rounded-md'>
                <section className='flex flex-col justify-between h-full'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority
                    className='object-contain pt-8 sm:pt-4 md:pt-12 lg:pt-8'
                  />
                  <div className='h-full py-2 px-2'>
                    <div className='my-2 pb-4'>
                      <h4 className='text-sm font-semibold text-neutral-800/90'>
                        {item.category}
                      </h4>
                      <h3 className='text-neutral-800 font-bold text-[clamp(1rem,4vw,1rem)] line-clamp-1'>
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(item)}
                    className='bg-red-700 z-50 text-neutral-50 rounded-b-sm py-1 rounded-t-2xl'>
                    Lihat Detail
                  </button>
                </section>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Tabs;
