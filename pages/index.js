import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import ProductsCon from "../components/ProductsCon";
import Featured from "../components/Featured";
import Newsletter from "../components/Newsletter";
import FooterBanner from "../components/FooterBanner";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/context";

const Home = ({ products, heroProducts, featureProducts, footerBanner }) => {
  const {
    itemQuantity,
    setItemQuantity,
    addedProducts,
    setAddedProducts,
    setTotalQuantity,
    totalCost,
    setTotalCost,
  } = useContext(AppContext);

  // useEffect(() => {
  //   const cartItems = localStorage.getItem("cart-items");
  //   console.log(cartItems)
  //   if (!cartItems) return;
  //   const cartArray = JSON.parse(cartItems);
  //   setAddedProducts(cartArray);
  //   console.log(cartArray);
  //   console.log(cartArray.length);

  //   setTotalQuantity(cartArray.length);

  //   let sum = 0;
  //   for (let index = 0; index < cartArray.length; index++) {
  //     const element = cartArray[index].price * cartArray[index].itemQuantity;
  //     sum += element;
  //     console.log(sum);
  //   }
  //   setTotalCost(sum);

  //   setItemQuantity(1);
  // }, []);

  return (
    <div>
      <Hero heroSection={heroProducts.length && heroProducts[0]} />
      <ProductsCon productSection={products.length && products} />
      <Featured featured={featureProducts} />
      <FooterBanner footerProducts={footerBanner.length && footerBanner[0]} />
      <Newsletter />
      <Footer />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const heroQuery = '*[_type=="hero"]';
  const heroProducts = await client.fetch(heroQuery);
  const featureQuery = '*[_type=="features"]';
  const featureProducts = await client.fetch(featureQuery);
  const footerQuery = '*[_type=="footer"]';
  const footerBanner = await client.fetch(footerQuery);

  return {
    props: { products, heroProducts, featureProducts, footerBanner },
  };
};

export default Home;
