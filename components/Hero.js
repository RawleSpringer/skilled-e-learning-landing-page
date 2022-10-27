import Image from 'next/image';
import heroImg from '../public/image-hero-mobile.webp';

const Hero = () => {
  return (
    <section className="m-4">
      <h1 className=" text-4xl font-bold">Maximize skill, minimize budget</h1>

      <p className="mt-4">
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>

      <button className="mt-4 bg-sky-700 px-6 py-3 rounded-full w-36">
        Get Started
      </button>

      <div className="mt-6">
        <Image src={heroImg} alt="image of female drinking coffee" />
      </div>
    </section>
  );
};

export default Hero;
