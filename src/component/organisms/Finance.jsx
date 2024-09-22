import Image from "next/image";
import adiraFinance from "../../../public/logo-adira-finance.png";
import megaFinance from "../../../public/logo-mega-finance.webp";
import mtFinance from "../../../public/logo-mtf.png";
import dipoStarFinance from "../../../public/logo-dsf.png";

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
