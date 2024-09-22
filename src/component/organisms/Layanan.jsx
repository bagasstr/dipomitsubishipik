import Image from "next/image";
// import bgLayanan from "../../../public/mitsubishi.jpg";
import exchange from "exchange.svg";
import invoice from "invoice.svg";
import streering from "streering.svg";

const Layanan = () => {
  return (
    <section id='layanan-section'>
      <div id='content-layanan' className=''>
        <section className='' id='layanan-header'>
          <h6 className='' id='title-layanan'>
            Layanan Kami
          </h6>
          <h5 className='' id='subtitle-layanan'>
            kami memiliki layanan terbaik untuk membeli mobil
          </h5>
          <p className='' id='description-layanan'>
            Nikmati pengalaman membeli mobil dengan mudah dan menyenangkan.
            Layanan kami dirancang khusus untuk memenuhi kebutuhan Anda
          </p>
        </section>
        <section className='' id='card-layanan'>
          <div className='card-1' id='card'>
            <Image
              id='img-card'
              src={streering}
              alt='test drive'
              width={80}
              height={80}
            />
            <h3 className='title-card-layanan'>Test Drive</h3>
            <p className='description-card-layanan'>
              Memberikan kesempatan kepada kamu sebelum membeli mobil untuk
              mencoba langsung mobil yang diminati.
            </p>
          </div>
          <div className='card-2' id='card'>
            <Image
              id='img-card'
              src={invoice}
              alt='credit'
              width={80}
              height={80}
            />
            <h3 className='title-card-layanan'>Credit</h3>
            <p className='description-card-layanan'>
              Membantu kamu pembeli dalam proses pengajuan kredit dan memilih
              opsi pembiayaan yang paling sesuai.
            </p>
          </div>
          <div className='card-3' id='card'>
            <Image
              id='img-card'
              src={exchange}
              alt='tuker tambah'
              width={80}
              height={80}
            />
            <h3 className='title-card-layanan'>Tukar Tambah</h3>
            <p className='description-card-layanan'>
              Mobil lama kamu bisa ditukar tambah dengan mobil baru
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layanan;
