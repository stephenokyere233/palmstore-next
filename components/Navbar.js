import navStyles from '../styles/Navbar.module.css'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.logo}>PALMSTORE</div>
      <nav>
        <FaShoppingCart
          style={{ fontSize: "2.5em", color: "rgb(65, 65, 65)" }}
        />
      </nav>
    </header>
  );
}

export default Navbar
