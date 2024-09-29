"use client";
import Tabs from "../../atom/Tabs";
// import data from "../../../data.json";
import ModalKatalog from "../../atom/ModalKatalog";

const Katalog = () => {
  return (
    <section className='py-[4rem]'>
      <div className=''>
        <section className='px-2 text-center'>
          <h6 className='font-bold text-neutral-800 text-[clamp(1rem,4vw,1.75rem)] underline underline-offset-8 decoration-red-700 decoration-2'>
            Katalog Kami
          </h6>
          <p className='text-neutral-700 font-medium mt-[1rem] text-[clamp(1rem,3vw,1.75rem)]'>
            Kami menyediakan berbagai macam mobil untuk memenuhi kebutuhanmu
          </p>
        </section>
        <section className='mt-[2rem]'>
          <ModalKatalog />
          <Tabs />
        </section>
      </div>
    </section>
  );
};

export default Katalog;
