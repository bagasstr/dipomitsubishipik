import Image from "next/image";
// import bgLayanan from "../../../public/mitsubishi.jpg";
// import exchange from "../../../public/exchange.svg";
// import invoice from "../../../public/invoice.svg";
// import streering from "../../../public/streering.svg";

const Layanan = () => {
  return (
    <section className='py-[4rem] bg-red-600'>
      <div className=''>
        <section className='text-center px-2'>
          <h6 className='text-neutral-50 font-bold text-[clamp(1rem,4vw,1.75rem)] underline underline-offset-8 decoration-2 decoration-neutral-50'>
            Layanan Kami
          </h6>
          <h5 className='mt-[1.5rem] font-bold text-[clamp(1rem,4.5vw,1.75rem)] text-neutral-50 w-[80%] mx-auto'>
            kami memiliki layanan terbaik untuk membeli mobil
          </h5>
          <p className='mt-[1.5rem] text-[clamp(1rem,3vw,1.75rem)] text-neutral-50/85 w-[90%] mx-auto'>
            Nikmati pengalaman membeli mobil dengan mudah dan menyenangkan.
            Layanan kami dirancang khusus untuk memenuhi kebutuhan Anda
          </p>
        </section>
        <section className='grid grid-cols-1 grid-rows-3 mt-[3rem] gap-4 md:grid-cols-3'>
          <div className='bg-neutral-50 flex flex-col items-center text-center w-[80%] mx-auto rounded-md p-4'>
            <Image
              className=''
              src={"/streering.svg"}
              alt='test drive'
              priority
              width={80}
              height={80}
            />
            <h3 className='text-neutral-800 font-semibold'>Test Drive</h3>
            <p className='text-neutral-700 text-sm mt-2'>
              Memberikan kesempatan kepada kamu sebelum membeli mobil untuk
              mencoba langsung mobil yang diminati.
            </p>
          </div>
          <div className='bg-neutral-50 flex flex-col items-center text-center w-[80%] mx-auto rounded-md p-4'>
            <Image
              className=''
              src={"/invoice.svg"}
              alt='credit'
              width={80}
              height={80}
            />
            <h3 className='text-neutral-800 font-semibold'>Credit</h3>
            <p className='text-neutral-700 text-sm mt-2'>
              Membantu kamu pembeli dalam proses pengajuan kredit dan memilih
              opsi pembiayaan yang paling sesuai.
            </p>
          </div>
          <div className='bg-neutral-50 flex flex-col items-center text-center w-[80%] mx-auto rounded-md p-4'>
            <Image
              className=''
              src={"/exchange.svg"}
              alt='tuker tambah'
              width={80}
              height={80}
            />
            <h3 className='text-neutral-800 font-semibold'>Tukar Tambah</h3>
            <p className='text-neutral-700 text-sm mt-2'>
              Mobil lama kamu bisa ditukar tambah dengan mobil baru
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layanan;
