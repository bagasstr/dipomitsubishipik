import Image from "next/image";
// import adiraFinance from "../../../public/logo-adira-finance.png";
// import megaFinance from "../../../public/logo-mega-finance.webp";
// import mtFinance from "../../../public/logo-mtf.png";
// import dipoStarFinance from "../../../public/logo-dsf.png";

const Layanan = () => {
  return (
    <section className='flex justify-center gap-x-4 px-2 opacity-70 rounded-b-xl pb-4 shadow-md grayscale items-center'>
      <figure className=''>
        <Image
          src='/logo-adira-finance.png'
          width={100}
          height={100}
          alt='adira finance'
          className='grayscale'
          priority
        />
      </figure>
      <figure className=''>
        <Image
          src={"/logo-mega-finance.webp"}
          width={100}
          priority
          height={100}
          alt='mega finance'
          className=''
        />
      </figure>
      <figure className=''>
        <Image
          src={"/logo-mtf.png"}
          priority
          width={100}
          height={100}
          alt='mandiri tunas finance'
          className=''
        />
      </figure>
      <figure className=''>
        <Image
          src={"/logo-dsf.png"}
          width={100}
          priority
          height={100}
          alt='dipo star finance'
          className=''
        />
      </figure>
    </section>
  );
};

export default Layanan;
