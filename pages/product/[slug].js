const ProductDetails = () => {
  return <div>ProductDetails</div>;
};

export const getStaticProps = async () => {
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

export default ProductDetails;
