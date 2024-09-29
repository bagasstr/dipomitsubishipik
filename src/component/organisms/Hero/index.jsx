import Image from "next/image";
import bg from "../../../../public/background.jpg";
import Link from "next/link";
// import styles from "./index.module.css";

const Hero = () => {
  return (
    <section className='pt-[4.3rem] sm:pt-[6.2rem]'>
      <div className='relative'>
        <Image
          src={bg}
          alt='hero'
          className='brightness-[50%] [mask-image:linear-gradient(180deg,rgba(0,0,0,1)40%,rgba(225,225,225,0)100%)] object-cover h-[18rem]'
          width={1000}
          height={1000}
          priority
        />
        <section className='px-2 text-center absolute h-fit pt-14 inset-0'>
          <h1 className='text-red-600 text-[clamp(1rem,5vw,1.25rem)] font-bold bg-neutral-200/70 backdrop-blur-sm w-fit mx-auto px-4 rounded-full'>
            Mobil Baru, Gaya Hidup Baru
          </h1>
          <p className='pt-[1.5rem] text-neutral-50/70 w-[80%] mx-auto text-[clamp(.75rem,4vw,1rem)] font-medium'>
            Dapatkan mobil impian Anda dengan harga terbaik. Nikmati promo
            menarik dan cicilan ringan.
          </p>
          <section className='mt-[2.5rem] flex gap-x-4 items-center justify-center'>
            <Link
              className='bg-red-600 text-neutral-50 px-4 py-2.5 text-[clamp(.6rem,3.5vw,1rem)] font-medium rounded-md'
              href='https://wa.me/6282125823878?text=Halo,%20Saya%20mau%20test%20drive'>
              Test Drive
            </Link>
            <Link
              className='text-neutral-800 underline decoration-neutral-800 underline-offset-8 decoration-2 text-[clamp(.6rem,3.5vw,1rem)] font-semibold'
              href='#katalog'>
              Katalog Mobil
            </Link>
          </section>
        </section>
        <section className=''>
          <div className='relative w-[100%] mx-auto h-[20vh]'>
            <Image
              src={"/img-jumbotron-resizes.png"}
              alt='hero'
              fill
              className='object-contain'
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
