import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../lib/client";
import { useNextSanityImage } from "next-sanity-image";


const Hero = ({ heroSection }) => {
  const imageProps = useNextSanityImage(client, heroSection.image);
  const imageProps2 = useNextSanityImage(client, heroSection.image2);

  return (
    <main className="relative flex min-h-[85vh] flex-col-reverse items-center justify-around lg:flex-row">
      <div className={`${heroStyles.imageContainer} border `}>
        <Image
          alt={heroSection.product}
          className={heroStyles.heroImage}
          {...imageProps}
          priority
        />
        <Image
          alt={heroSection.product}
          className={heroStyles.heroImageTwo}
          {...imageProps2}
        />
        <div className={heroStyles.desc2}>
          <h3>Bass Booster X5000</h3>
          <span>Live the music</span>
        </div>
        <div className={heroStyles.desc}>
          <h3>{heroSection.product}</h3>
          <span>{heroSection.desc}</span>
        </div>
      </div>
      <section
        className={`flex w-full flex-col items-center justify-center lg:max-w-[800px] `}
      >
        <h1 className="whitespace-nowrap text-[3em] font-bold uppercase text-[#152238] md:text-[6em]">
          {heroSection.heading1} <br />{" "}
          <span className="w-full justify-end">& {heroSection.heading2}</span>
        </h1>
        <h3 className="px-4 py-4 text-center text-lg font-light text-gray-600">
          Enjoy 25% off all your Headphones & Watches
        </h3>
        <Link href={`/product/${heroSection.slug.current}`}>
          <button className="rounded-10 cursor-pointer rounded-md border-none bg-purple-700 px-20 py-6 text-2xl font-semibold text-white lg:text-3xl">
            Shop Now!
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
