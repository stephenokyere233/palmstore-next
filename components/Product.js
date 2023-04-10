import styles from "../styles/Product.module.css";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import { FaArrowRight } from "react-icons/fa";

const Product = ({ src, name, price, link }) => {
  const imageProps = useNextSanityImage(client, src);
  return (
    <div className="max-h-[330px] w-[300px] rounded-2xl border-2  border-[#dcdcdc] p-4">
      <Image
        className="h-[200px] rounded-tl-lg rounded-tr-lg border-2  border-[#dcdcdc] bg-cover object-cover"
        src={src}
        alt={name}
        {...imageProps}
      />
      <div className={styles.desc}>
        <div>
          <span className={styles.title}>{name}</span>
          <span className={styles.price}>${price}</span>
        </div>
        <span>
          <Link className={styles.arrow} href={`/product/${link}`}>
            <FaArrowRight />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Product;
