import Image from "next/image";
import adiraFinance from "logo-adira-finance.png";
import megaFinance from "logo-mega-finance.webp";
import mtFinance from "logo-mtf.png";
import dipoStarFinance from "logo-dsf.png";

const Layanan = () => {
  return (
    <section id='finance-section'>
      <figure className=''>
        <Image
          src={adiraFinance}
          width={100}
          height={100}
          alt='adira finance'
          id='img-finance'
        />
      </figure>
      <figure className=''>
        <Image
          src={megaFinance}
          width={100}
          height={100}
          alt='mega finance'
          id='img-finance'
        />
      </figure>
      <figure className=''>
        <Image
          src={mtFinance}
          width={100}
          height={100}
          alt='mandiri tunas finance'
          id='img-finance'
        />
      </figure>
      <figure className=''>
        <Image
          src={dipoStarFinance}
          width={100}
          height={100}
          alt='dipo star finance'
          id='img-finance'
        />
      </figure>
    </section>
  );
};

export default Layanan;
