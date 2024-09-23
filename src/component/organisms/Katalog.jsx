import Tabs from "../atom/Tabs";
import data from "../../../data.json";

const Katalog = async () => {
  return (
    <section id='katalog'>
      <div className='' id='katalog-section'>
        <section className='' id='katalog-header'>
          <h6 className='' id='title-katalog'>
            Katalog Kami
          </h6>
          <p className='' id='description-katalog'>
            Kami menyediakan berbagai macam mobil untuk memenuhi kebutuhanmu
          </p>
        </section>
        <section className='' id='card-katalog'>
          <Tabs data={data} />
        </section>
      </div>
    </section>
  );
};

export default Katalog;
