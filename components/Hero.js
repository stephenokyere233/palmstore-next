import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../lib/client";
import { useNextSanityImage } from "next-sanity-image";

const Hero = ({ heroSection }) => {
  const imageProps = useNextSanityImage(client, heroSection.image);
  const imageProps2 = useNextSanityImage(client, heroSection.image2);

  return (
    <main className="relative lg:flex-row flex min-h-[85vh] items-center justify-around flex-col-reverse">
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
        className={`flex w-full lg:max-w-[800px] flex-col items-center justify-center `}
      >
        <h1 className="text-[#152238] whitespace-nowrap text-[3em] md:text-[6em] font-bold uppercase">
          {heroSection.heading1} <br />{" "}
          <span className="w-full justify-end">& {heroSection.heading2}</span>
        </h1>
        <h3 className="py-4 text-lg font-light text-gray-600 text-center px-4">
          Enjoy 25% off all your Headphones & Watches
        </h3>
        <Link href={`/product/${heroSection.product}`}>
          <button className="rounded-10 cursor-pointer rounded-md border-none bg-purple-700 px-20 py-6 text-2xl lg:text-3xl font-semibold text-white">
            Shop Now!
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
