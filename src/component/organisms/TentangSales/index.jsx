import Link from "next/link";

const TentangSales = () => {
  return (
    <section className='py-[4rem] px-2 text-center'>
      <h6 className='font-bold text-neutral-800 text-[clamp(1rem,4vw,1.75rem)] underline underline-offset-8 decoration-2 decoration-red-600'>
        Tentang Sales
      </h6>
      <div className='mt-[1.5rem]'>
        <p className='text-[clamp(1rem,3vw,.75rem)] font-medium text-neutral-700/70 w-[80%] mx-auto'>
          "Kami berkomitmen untuk memberikan nilai terbaik kepada pelanggan kami
          melalui harga kompetitif dan penawaran menarik."
        </p>
        <h2 className='text-neutral-700 mt-4 text-[clamp(1rem,4vw,1.75rem)] font-semibold'>
          -Sultan Fahrezi-
        </h2>
        <hr className='mb-2' />
        <h3 className='text-neutral-50 bg-neutral-700 px-3 py-1 rounded-full w-fit mx-auto text-[clamp(.75rem,3vw,1rem)] font-medium mb-6'>
          Sales Eksekutif
        </h3>
        <Link
          className='bg-red-600 text-neutral-50 px-4 py-2.5 text-[clamp(.6rem,3.5vw,1rem)] font-medium rounded-md'
          href='https://wa.me/6282125823878?text=Halo,%20Saya%20mau%20tanya%20tentang%20mobil%20mitsubishi'>
          Hubungi Kami
        </Link>
      </div>
    </section>
  );
};

export default TentangSales;
