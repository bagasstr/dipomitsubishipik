import Finance from "@/component/organisms/Finance";
import TentangSales from "@/component/organisms/TentangSales";
import Layanan from "@/component/organisms/Layanan";
import Katalog from "@/component/organisms/Katalog";
import Footer from "@/component/organisms/Footer";
import Hero from "@/component/organisms/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Finance />
      <TentangSales />
      <Layanan />
      <Katalog />
      <Footer />
    </>
  );
};

export default Home;
