import {
  RiFacebookCircleFill,
  RiMap2Fill,
  RiWhatsappFill,
} from "@remixicon/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <section className='' id='information-contact-section'>
        <ul>
          <li className=''>
            <RiWhatsappFill />
            <h6 className=''>+62 821 2582 3878</h6>
          </li>
          <li>
            <RiFacebookCircleFill />
            <h6>Mitsubishi Dipo PIK2</h6>
          </li>
          <li>
            <RiMap2Fill />
            <h6>Kawasan Pantai Indah Maju, Jl. Golf Island Boulevard No.01</h6>
          </li>
        </ul>
      </section>
      <section id='logo-section'>
        <Image
          src='/logo.svg'
          alt='mitsubishi motors'
          width={55}
          height={55}
          id='logo'
        />
      </section>
    </header>
  );
};

export default Navbar;
