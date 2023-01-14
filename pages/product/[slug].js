import { client } from "../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import styles from "../../styles/ProductDetails.module.css";
import Navbar from "../../components/Navbar";

const ProductDetails = ({ product, products }) => {
  const { description, name, image, price } = product;
  const imageProps = useNextSanityImage(client, image[0]);

  console.log(product);
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.imageCon}>
            <Image
              {...imageProps}
              width={350}
              className={styles.image}
              alt=""
              height={350}
              priority
            />
            <div className={styles.btns}>
              <button
                type="button"
                className={styles.addCart}
                // onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className={styles.buyNow}
                // onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className={styles.desc}>
            <section>
              <h1>{name}</h1>
              <div className={styles.reviews}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div className={styles.details}>
                <h3>Details:</h3>
                {description}
                Skilled frontend developer with expertise in React, Next.js, and
                Tailwind. I craft stunning, intuitive websites and mobile apps
                that deliver exceptional user experiences. Turning your vision
                into reality on the web, one pixel at a time. I recently built
                this music streaming app with NextJS, Tailwind CSS, Shazam API,
                Redux and Context API. The app takes all the music data from the
                shazam api and displays it with good UI, where you&apos;re able to
                find lyrics song details and artist details
              </div>
            </section>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <section>
              <div className={styles.quantity}>
                <h3>Quantity:</h3>
                <p className={styles.quantityChange}>
                  <span className={styles.minus}>
                    <AiOutlineMinus />
                  </span>
                  <span className={styles.num}>10</span>
                  <span className={styles.plus}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
            </section>
          </div>
        </header>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
