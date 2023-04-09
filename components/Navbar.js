import navStyles from '../styles/Navbar.module.css'
import {FaShoppingCart} from 'react-icons/fa'
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/context";

const Navbar = () => {
  const {setShowCart}=useContext(AppContext)
  return (
    <header className={navStyles.header}>
      <Link href="/">
      <div className={navStyles.logo}>PALMSTORE</div>
      </Link>
      <nav>
        <FaShoppingCart
        onClick={()=>setShowCart(true)}
          style={{ fontSize: "2.5em", color: "rgb(65, 65, 65)" }}
        />
      </nav>
    </header>
  );
}

export default Navbar
