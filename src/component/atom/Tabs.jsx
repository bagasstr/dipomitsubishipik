"use client";
import React, { useEffect, useState } from "react";
// import data from "../../../data.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tabs = ({ data }) => {
  const [typeCars, setTypeCars] = useState(null);
  const [tab, setTab] = useState("btn-tab-1");

  const activeTab = (id) => {
    setTab(id);
  };
  const passengerCars = data.filter((item) => item.type === "Passenger Car");
  const findTypeCars = (type, i) => {
    activeTab(`btn-tab-${i}`);
    const cars = data.filter((item) => item.type === type);
    setTypeCars(cars);
  };

  return (
    <div id='tabs'>
      <section id='tabs-section'>
        <button
          className={`${tab === "btn-tab-1" ? "active" : ""}`}
          id='btn-tab-1'
          onClick={() => findTypeCars("Passenger Car", 1)}>
          passenger car
        </button>
        <button
          className={`${tab === "btn-tab-2" ? "active" : ""}`}
          id='btn-tab-2'
          onClick={() => findTypeCars("Light Commercial Car", 2)}>
          Light Commercial Car
        </button>
        <button
          className={`${tab === "btn-tab-3" ? "active" : ""}`}
          id='btn-tab-3'
          onClick={() => findTypeCars("Commercial Car", 3)}>
          Commercial Car
        </button>
      </section>

      <section id='tabs-content'>
        <Swiper spaceBetween={10} slidesPerView={2}>
          {(typeCars || passengerCars)?.map((item) => (
            <SwiperSlide key={item.id} id='card-tab'>
              <figure>
                <Image
                  src={item.image}
                  id='img-tab'
                  alt={item.name}
                  width={200}
                  priority
                  height={200}
                />
              </figure>
              <div id='desc-tab'>
                <div id='title-desc-tab'>
                  <h4>{item.type}</h4>
                  <h2>{item.name}</h2>
                </div>
                <h3>OTR: Rp.{item.price}Jt</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Tabs;
