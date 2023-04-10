import React from 'react'
import styles from "../styles/Product.module.css";
import Product from './Product';

const Featured = ({featured}) => {

  return (
    <div className={`${styles.wrapper} mx-auto max-w-[85rem]`}>
      <h1 className=" text-center text-2xl font-semibold uppercase ">
        Featured Products
      </h1>
      <p className="mb-4 text-center text-xl">
        Limited In Stock Grab yours now!
      </p>
      <div className="mb-10 grid grid-cols-1 flex-wrap place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
