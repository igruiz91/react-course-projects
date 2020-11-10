import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ad rerum aut similique, eaque repellat aperiam quisquam minus
            ducimus atque laboriosam! Unde quos ex asperiores officiis rerum
            reiciendis itaque reprehenderit!
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
