import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";
import ProductsCon from "../components/ProductsCon";
import Featured from "../components/Featured";
import Newsletter from "../components/Newsletter";

const Home = ({ products, heroProducts,featureProducts}) => {
  // console.log(featureProducts);
  // const []
  return (
    <div>
      <Navbar />
      <Hero
        heroSection={heroProducts.length && heroProducts[0]}
        // src={heroProducts[0].image}
      />
      <ProductsCon productSection={products.length && products}/>
      <Featured featured={featureProducts}/>
      <Newsletter/>
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

  return {
    props: { products, heroProducts,featureProducts},
  };
};

export default Home;
