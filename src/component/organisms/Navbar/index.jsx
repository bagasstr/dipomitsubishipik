import {
  RiFacebookCircleFill,
  RiMap2Fill,
  RiWhatsappFill,
} from "@remixicon/react";
import Image from "next/image";
// import styles from "./index.module.css";
const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full'>
      <section className='hidden sm:bg-red-700 sm:transition-all sm:flex sm:gap-x-4 sm:px-2 sm:justify-end'>
        <ul className='sm:flex sm:gap-x-4'>
          <li className='sm:flex sm:text-neutral-50 sm:gap-x-2 sm:items-center'>
            <RiWhatsappFill className='sm:w-[14px]' />
            <h6 className='sm:text-xs sm:font-light sm:line-clamp-1'>
              +62 821 2582 3878
            </h6>
          </li>
          <li className='sm:flex sm:text-neutral-50 sm:gap-x-2 sm:items-center'>
            <RiFacebookCircleFill className='sm:w-[14px]' />
            <h6 className='sm:text-xs sm:font-light sm:line-clamp-1'>
              Mitsubishi Dipo PIK2
            </h6>
          </li>
          <li className='sm:flex sm:text-neutral-50 sm:gap-x-2 sm:items-center'>
            <RiMap2Fill className='sm:w-[14px]' />
            <h6 className='sm:text-xs sm:font-light sm:text-wrap sm:line-clamp-1'>
              Kawasan Pantai Indah Maju, Jl. Golf Island Boulevard No.01
            </h6>
          </li>
        </ul>
      </section>
      <section className='bg-neutral-950 flex justify-center'>
        <div className='relative w-[55px] h-[55px] my-2 sm:w-[60px] sm:h-[60px]'>
          <Image
            src='/logo.svg'
            alt='mitsubishi motors'
            fill
            quality={100}
            className='object-contain'
          />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
