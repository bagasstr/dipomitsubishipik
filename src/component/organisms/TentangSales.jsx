import Link from "next/link";

const TentangSales = () => {
  return (
    <section id='sales-section'>
      <h6 className='' id='about-us'>
        Tentang Sales
      </h6>
      <div className='' id='description'>
        <p className='' id='title-about-us'>
          "Kami berkomitmen untuk memberikan nilai terbaik kepada pelanggan kami
          melalui harga kompetitif dan penawaran menarik."
        </p>
        <h1 className=''>-Sultan Fahrezi-</h1>
        <hr />
        <h2 className=''>Sales Eksekutif</h2>
        <Link
          id='sales-cta'
          href='https://wa.me/6282125823878?text=Halo,%20Saya%20mau%20tanya%20tentang%20mobil%20mitsubishi'>
          Hubungi Kami
        </Link>
      </div>
    </section>
  );
};

export default TentangSales;
