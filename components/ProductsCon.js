import styles from "../styles/Product.module.css";
// import { urlFor } from "../lib/client";
import Product from "./Product";

const ProductsCon = ({ productSection }) => {
  return (
    <div className="mx-auto max-w-[85rem]">
      <h1 className="mb-4 text-center text-2xl font-semibold uppercase ">
        CHECK OUT OUR BESTSELLERS
      </h1>
      <div className="mb-10 grid grid-cols-1 flex-wrap place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
