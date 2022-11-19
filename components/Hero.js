import heroStyles from "../styles/Hero.module.css";
import Image from "next/image";
// import pic from "./watch.webp";
import Link from "next/link";
import { client, urlFor } from "../lib/client";
// import ReactImageFallback from "react-image-fallback";
import { useNextSanityImage } from "next-sanity-image";

const Hero = ({ heroSection }) => {
  const imageProps = useNextSanityImage(client, heroSection.image);
  const imageProps2 = useNextSanityImage(client, heroSection.image2);


  return (
    <main className={heroStyles.container}>
      <div className={heroStyles.imageContainer}>
        <Image
          // src={urlFor(heroSection.image)}
          alt={heroSection.product}
          className={heroStyles.heroImage}
          {...imageProps}
          priority
        />
        <Image
          // src={urlFor(heroSection.image)}
          alt={heroSection.product}
          className={heroStyles.heroImageTwo}
          {...imageProps2}
          // priority
        />
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
    //   <main className={heroStyles.container}>
    //     <div className={heroStyles.imageContainer}>
    //       <Image src={pic} alt="nopic" className={heroStyles.heroImage} />
    //       <div className={heroStyles.desc}>
    //         <h3>Y68 Smart Watch</h3>
    //         <span>Never miss a notification</span>
    //       </div>
    //     </div>
    //     <section className={heroStyles.typo}>
    //       <h1>
    //         Headphones <br /> &nbsp; &nbsp; & watches
    //       </h1>
    //       <h3>Enjoy 25% off all your Headphones & Watches</h3>
    //       <Link href={`/product/ID`}>
    //         <button>Shop Now!</button>
    //       </Link>
    //     </section>
    //   </main>
  );
};

export default Hero;
