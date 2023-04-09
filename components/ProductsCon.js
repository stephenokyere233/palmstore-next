import styles from "../styles/Product.module.css";
// import { urlFor } from "../lib/client";
import Product from "./Product";

const ProductsCon = ({ productSection }) => {
  return (
    <div className={styles.wrapper}>
      <h1>CHECK OUT OUR BESTSELLERS</h1>
      <div className={styles.container}>
        {productSection.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            link={product.slug.current}
            price={product.price.toFixed(2)}
            src={product.image[0]}
          />
        ))}
      </div>
    </div>
  );
};
//    <Product name={product.name} price={product.price} src={product.image} />;

export default ProductsCon;
