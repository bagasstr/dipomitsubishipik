import Link from "next/link";
import TentangSales from "../TentangSales";

const Footer = () => {
  return (
    <section id='footer-section'>
      <h6>Developed By CodeBagas</h6>
      <div id='footer'>
        <h5>Dapatkan Penawaran Terbaik, Hubungi Kami!</h5>
        <p className=''>
          Nikmati kenyamanan, keamanan, dan performa terbaik dengan Mitsubishi.
        </p>
        <div id='cta-container'>
          <Link
            id='footer-cta'
            href='https://wa.me/6282125823878?text=Halo,%20Saya%20mau%20tanya%20tentang%20mobil%20mitsubishi%20'
            target='_blank'>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
