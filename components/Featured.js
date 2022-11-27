import React from 'react'
import styles from "../styles/Product.module.css";
import Product from './Product';

const Featured = ({featured}) => {

  return (
    <div className={styles.wrapper}>
      <h1>Featured Products</h1>
      <p className={styles.sub}>Limited In Stock Grab yours now!</p>
      <div className={styles.container}>
        {featured.map((product) => (
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
}

export default Featured
