import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity]=useState(0)
    const [totalCost, setTotalCost]=useState(0)
   const [addedProducts, setAddedProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        showCart,
        setShowCart,
        itemQuantity,
        setItemQuantity,
        totalQuantity,
        setTotalQuantity,
        addedProducts,
        setAddedProducts,
        totalCost, setTotalCost
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
