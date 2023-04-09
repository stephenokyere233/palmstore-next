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

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import { toast } from "react-hot-toast";
import Product from "../../components/Product";

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const featureQuery = '*[_type=="features"]';
  const featureProducts = await client.fetch(featureQuery);

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product, featureProducts },
  };
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

const ProductDetails = ({ products, product, featureProducts }) => {
  const { description, name, image, price } = product;
  const imageProps = useNextSanityImage(client, image[0]);
  const {
    itemQuantity,
    setItemQuantity,
    addedProducts,
    setAddedProducts,
    setTotalQuantity,
    setTotalCost,
    totalCost,
  } = useContext(AppContext);
  console.log(product);

  const increment = () => {
    if (itemQuantity >= 0) {
      setItemQuantity((prev) => prev + 1);
    }
    return;
  };
  const decrement = () => {
    if (itemQuantity >= 2) {
      setItemQuantity((prev) => prev - 1);
    }
    return;
  };

  const handleAddProduct = (product, quantity) => {
    if (quantity < 1) {
      console.log("cant add ");
      return;
    }
    const newProduct = { ...product, itemQuantity: quantity };
    let newArray = [...addedProducts];
    const index = newArray.findIndex((p) => p.name === product.name);
    if (index >= 0) {
      console.log(newArray[index].itemQuantity);
      newArray[index] = {
        ...newArray[index],
        itemQuantity: newArray[index].itemQuantity + quantity,
      };
      toast.success(`updating ${newArray[index].name} in cart`);
      console.log("updating existing product");

      console.log("newArray update", newArray);
    } else {
      console.log("adding new product");
      toast.success(`${newProduct.name} has been added to cart`);
      newArray.push(newProduct);
      console.log("newArray", newArray);
    }
    setAddedProducts(newArray);
    let sum = 0;
    for (let index = 0; index < newArray.length; index++) {
      const element = newArray[index].price * newArray[index].itemQuantity;
      sum += element;
      console.log(sum);
    }
    setTotalCost(sum);
    localStorage.setItem("cart-items", JSON.stringify(newArray));
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cart-items");
    if (!cartItems) return;
    const cartArray = JSON.parse(cartItems);

    setTotalQuantity(cartArray.length);
  }, [addedProducts, setTotalQuantity]);

  return (
    <>
      <div className={`${styles.wrapper} mx-auto max-w-[85rem] select-none`}>
        <header className={`flex flex-col gap-5 px-4  md:flex-row`}>
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
                onClick={() => handleAddProduct(product, itemQuantity)}
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
              <h1 className="text-2xl font-bold md:text-3xl ">{name}</h1>
              <div className={styles.reviews}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div className={`${styles.details}`}>
                <h3>Details:</h3>
                {description}
                Skilled frontend developer with expertise in React, Next.js, and
                Tailwind. I craft stunning, intuitive websites and mobile apps
                that deliver exceptional user experiences. Turning your vision
                into reality on the web, one pixel at a time. I recently built
                this music streaming app with NextJS, Tailwind CSS, Shazam API,
                Redux and Context API. The app takes all the music data from the
                shazam api and displays it with good UI, where you&apos;re able
                to find lyrics song details and artist details
              </div>
            </section>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <section>
              <div className="flex items-center">
                <h3>Quantity:</h3>
                <p className={styles.quantityChange}>
                  <span
                    onClick={decrement}
                    className={`${styles.minus} cursor-pointer`}
                  >
                    <AiOutlineMinus />
                  </span>
                  <input
                    value={itemQuantity}
                    className="w-[50px] text-center outline-none"
                  />
                  <span
                    onClick={increment}
                    className={`${styles.plus} cursor-pointer`}
                  >
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
            </section>
          </div>
        </header>
        <section className="mt-10">
          <div>
            {products.map((product) => {
              const { name, price, slug, image } = product;
              return (
                <Product
                  key={name}
                  name={name}
                  link={slug.current}
                  price={price.toFixed(2)}
                  src={image[0]}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
