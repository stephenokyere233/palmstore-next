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
import FooterBanner from "../components/FooterBanner";

const Home = ({ products, heroProducts, featureProducts, footerBanner }) => {
  return (
    <div>
      <Navbar />
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
