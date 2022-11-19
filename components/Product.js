import styles from "../styles/Product.module.css";
import Link from "next/link";
// import pic from "./watch.webp";
import Image from "next/image";
import { client, urlFor } from "../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import {FaArrowRight} from 'react-icons/fa'

const Product = ({ src, name, price ,link}) => {
  const imageProps = useNextSanityImage(client, src);
  return (
    <div className={styles.card}>
      <Image src={src} alt={name} {...imageProps} />
      <div className={styles.desc}>
        <div>
          <span className={styles.title}>{name}</span>
          <span className={styles.price}>${price}</span>
        </div>
        <span >
          <Link className={styles.arrow} href={`/product/${link}`}>
            <FaArrowRight />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Product;
