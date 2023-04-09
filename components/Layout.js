import React, { useContext,useEffect } from "react";
import { AppContext } from "../context/context";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast"

const Layout = ({ children }) => {
  const { showCart, setShowCart,setTotalQuantity,setTotalCost,setAddedProducts,setItemQuantity } = useContext(AppContext);

    useEffect(() => {
    const cartItems = localStorage.getItem("cart-items");
    console.log(cartItems)
    if (!cartItems) return;
    const cartArray = JSON.parse(cartItems);
    setAddedProducts(cartArray);
    console.log(cartArray);
    console.log(cartArray.length);

    setTotalQuantity(cartArray.length);

    let sum = 0;
    for (let index = 0; index < cartArray.length; index++) {
      const element = cartArray[index].price * cartArray[index].itemQuantity;
      sum += element;
      console.log(sum);
    }
    setTotalCost(sum);

    setItemQuantity(1);
  }, []);


  return (
    <>
      <div className={` ${showCart && "overflow-hidden blur-md h-screen"}`}>
        <Toaster/>
        <Navbar />
        <div onClick={()=>setShowCart(false)}>{children}</div>
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default Layout;
