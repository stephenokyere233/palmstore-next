import Image from "next/image";
import React, { useContext, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { AppContext } from "../context/context";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../lib/client";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import styles from "../styles/Product.module.css";

const Cart = () => {
  const {
    totalQuantity,
    setTotalQuantity,
    setShowCart,
    addedProducts,
    totalCost,
    setTotalCost,
    setAddedProducts,
  } = useContext(AppContext);

  const EmptyCart = () => {
    return (
      <>
        <div className="flex h-full flex-col items-center justify-center gap-3">
          <Image
            src={"/null.png"}
            alt="no-items"
            height={300}
            width={300}
            className=""
          />
          <p>Empty Cart</p>
          <button
            className="rounded-md bg-purple-700 p-2 px-6 text-xl text-white"
            onClick={() => setShowCart(false)}
          >
            Add Items
          </button>
        </div>
      </>
    );
  };

  const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(product.itemQuantity);
    const [itemCost, setItemCost] = useState(product.price);

    const onRemoveProduct = (productToRemove, productsArray) => {
      const filteredArray = productsArray.filter(
        (product) => product !== productToRemove
      );
      console.log(filteredArray);
      setAddedProducts(filteredArray);
      localStorage.setItem("cart-items", JSON.stringify(filteredArray));
      console.log("product removed");
      setTotalQuantity(filteredArray.length);

      let sum = 0;

      for (let index = 0; index < filteredArray.length; index++) {
        const element =
          filteredArray[index].price * filteredArray[index].itemQuantity;
        sum += element;
        console.log(sum);
      }
      setTotalCost(sum);
    };

    function updateProductQuantity(
      productToUpdate,
      newQuantity,
      productsArray
    ) {
      const index = addedProducts.findIndex(
        (product) => product === productToUpdate
      );
      if (index >= 0 && product.itemQuantity >= 1) {
        console.log(index);
        console.log(addedProducts[index].itemQuantity);
        addedProducts[index] = {
          ...addedProducts[index],
          itemQuantity: addedProducts[index].itemQuantity++,
        };
        console.log("newQu", newQuantity);
        console.log(addedProducts[index]);
      }
      // const updatedProducts = productsArray.map((product) => {
      //   if (product === productToUpdate) {

      //     return { ...product, itemQuantity: Number(newQuantity) };
      //   } else {
      //     return product;
      //   }
      // });

      // setAddedProducts(updatedProducts);
    }

    // const increment = () => {
    //   // if (product.itemQuantity >= 1) {
    //     setQuantity((prev) => prev + 1);
    //     // setItemCost((prev) => prev * product.itemQuantity);
    //     updateProductQuantity(product, quantity, addedProducts);
    //     // console.log(product);
    //     // console.log(itemCost);
    //   // }
    //   return;
    // };
    console.log(addedProducts);
    const decrement = () => {
      if (product.itemQuantity >= 2) {
        setQuantity((prev) => prev - 1);
        //  setTotalCost((prev) => prev - product.price);
      }
      return;
    };
    const imageProps = useNextSanityImage(client, product.image[0]);
    return (
      <div className="flex select-none gap-2">
        <Image
          className="h-[150px] w-[180px] rounded-lg bg-white object-contain"
          src={product.image[0]}
          alt={product.name}
          {...imageProps}
        />
        <div className="flex flex-1 flex-col justify-between">
          <span className="flex justify-between text-xl font-semibold">
            <h2>{product.name}</h2>
            <h2>${product.price}</h2>
          </span>
          <span className="flex text-xl font-medium justify-center text-center gap-2">
            <p> Quantity:</p>
            <p> {quantity} pcs</p>
          </span>
          <div className="flex justify-center pb-3">
            <button
              className="flex text-sm items-center gap-2 rounded-md bg-red-400 p-2 text-white"
              onClick={() => onRemoveProduct(product, addedProducts)}
            >
              <p>Remove From Cart</p>
              <AiOutlineDelete size={28} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute right-0 top-0 z-[20] h-[100vh] w-full bg-[#ebf5f0] p-4 py-8 md:w-[500px]">
      <div className="h-full">
        <span className="flex items-center gap-2 text-xl font-bold">
          <MdArrowBackIos
            className="cursor-pointer"
            onClick={() => setShowCart(false)}
          />{" "}
          Your Cart
          <p className="text-purple-700">({totalQuantity} items)</p>
        </span>
        {addedProducts && addedProducts.length > 0 ? (
          <div className="relative flex h-full flex-col gap-4 pt-4  ">
            <div className="flex flex-1 flex-col gap-4 overflow-y-scroll">
              {addedProducts?.map((product) => {
                return <CartItem key={product.name} product={product} />;
              })}
            </div>
            <div className="my-6 flex w-full flex-col gap-2 px-4 ">
              <span className="flex justify-between text-xl font-semibold">
                <h2>Subtotal</h2>
                <h2>${totalCost}</h2>
              </span>
              <button className="w-full rounded-md bg-purple-700 p-2 text-2xl text-white ">
                Proceed to checkout
              </button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
