import styles from "../styles/FooterBanner.module.css";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client, urlFor } from "../lib/client";
import Link from "next/link";

const FooterBanner = ({ footerProducts }) => {
  const {
    buttonText,
    desc,
    discount,
    product,
    image,
    slug,
    heading1,
    heading2,
    saleTime,
  } = footerProducts;
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        {...imageProps}
        width={200}
        height={200}
        alt=""
      />
      <div className={styles.container}>
        <section className={styles.section}>
          <p className={styles.smallText}>{discount}</p>
          <span className={styles.largeText}>{heading1}</span>
          <span className={styles.smallText}>{saleTime}</span>
        </section>
        <section className={styles.section}>
          <p className={styles.smallText}>{product}</p>
          <span className={styles.largeText}>{heading2}</span>
          <span className={styles.smallText}>{desc}</span>
          {/* <Link href={`/product/${slug}`}> */}
            <Link href={`/product/${slug.current}`}>

          <button>{buttonText}</button>
            </Link>
          {/* </Link> */}
        </section>
      </div>
    </div>
  );
};

export default FooterBanner;
