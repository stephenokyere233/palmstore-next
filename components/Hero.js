import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../lib/client";
import { useNextSanityImage } from "next-sanity-image";

const Hero = ({ heroSection }) => {
  const imageProps = useNextSanityImage(client, heroSection.image);
  const imageProps2 = useNextSanityImage(client, heroSection.image2);

  return (
    <main className={heroStyles.container}>
      <div className={heroStyles.imageContainer}>
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
      <section className={heroStyles.typo}>
        <h1>
          {heroSection.heading1} <br /> <span>& {heroSection.heading2}</span>
        </h1>
        <h3>Enjoy 25% off all your Headphones & Watches</h3>
        <Link href={`/product/${heroSection.product}`}>
          <button>Shop Now!</button>
        </Link>
      </section>
    </main>
  );
};

export default Hero;
