import Image from "next/image";
import bg from "../../../public/background.jpg";
import imgHero from "../../../public/img-jumbotron-resizes.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section id='hero-section' className=''>
      <div className='relative'>
        <Image
          src={bg}
          alt='hero'
          id='bg-hero'
          width={1000}
          height={1000}
          priority
          className=''
        />
        <section id='title-hero-section'>
          <h1 className=''>Mobil Baru, Gaya Hidup Baru</h1>
          <p className=''>
            Dapatkan mobil impian Anda dengan harga terbaik. Nikmati promo
            menarik dan cicilan ringan.
          </p>
          <section id='button-hero'>
            <Link
              id='button-test-drive'
              href='https://wa.me/6282125823878?text=Halo,%20Saya%20mau%20test%20drive'>
              Test Drive
            </Link>
            <Link id='button-katalog-mobil' href='#katalog'>
              Katalog Mobil
            </Link>
          </section>
        </section>
        <section id='img-hero-section'>
          <Image
            src={"/img-jumbotron-resizes.png"}
            alt='hero'
            id='img-hero'
            width={400}
            priority
            height={400}
            className=''
          />
        </section>
      </div>
    </section>
  );
};

export default Hero;
