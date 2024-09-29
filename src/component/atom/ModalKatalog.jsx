"use client";

import useModalStore from "@/app/lib/hooks";
import { X } from "lucide-react";
import Image from "next/image";

const ModalKatalog = () => {
  const { modal, dataModal, closeModal } = useModalStore();
  if (!modal) return null;

  //   const type = dataModal?.type.map((item) => {
  //     return item;
  //   });
  console.log(dataModal);

  return (
    <section className={`${modal ? "block" : "hiden"}`}>
      <div
        id='modal'
        className='bg-neutral-50/50 backdrop-blur-sm fixed inset-0 top-[7.3rem] w-full m-auto rounded-3xl p-4 h-[95%] z-50'>
        <button id='close-modal' onClick={() => closeModal()}>
          <div id='icon-close'>
            <X />
          </div>
        </button>
        <div
          id='modal-content'
          className='flex flex-col mt-10 justify-center items-center'>
          <h1 className='font-bold text-neutral-800 text-[clamp(1.5rem,4vw,1.75rem)] mb-4'>
            {dataModal?.name}
          </h1>
          <Image
            src={dataModal?.image}
            alt={dataModal?.name}
            width={300}
            height={300}
          />
          <div className='w-full bg-neutral-200/20 h-[25rem] mt-8 backdrop-blur-sm'>
            <h1 className='text-center font-bold text-neutral-800 text-[clamp(1rem,4vw,1.75rem)] uppercase'>
              Varian
            </h1>
            <div
              id='modal-description'
              className='space-y-4 w-full my-2 divide-y-2 overflow-y-scroll h-[24rem] bg-neutral-200/50 p-2 rounded'>
              {dataModal?.type.map((item) => {
                const [model, price] = Object.entries(item)[0];
                return (
                  <div className='border-neutral-800'>
                    <h2
                      id='subtitle-modal'
                      className='text-[clamp(1.3rem,4vw,1.75rem)] font-semibold text-neutral-800'>
                      {model}
                    </h2>
                    <h3 className='mt-2 text-neutral-800 text-[clamp(1rem,4vw,1.75rem)] flex justify-between font-medium'>
                      OTR: <span className='font-semibold'>Rp.{price}</span>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalKatalog;
