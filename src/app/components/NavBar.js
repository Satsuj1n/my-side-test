import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../services/cartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav style={styles.navbar}>
      <Link href="/" style={styles.titleContainer}>
        <h1 style={styles.title}>MySide</h1>
        <Image
          src="/main-icon.png"
          alt="icon"
          width={40}
          height={40}
          style={styles.icon}
        />
      </Link>
      <div style={styles.cartIcon}>
        <Link href="/cart">
          <Image src="/cart-icon.png" alt="Cart" width={30} height={30} />
        </Link>
        {cartItems.length > 0 && (
          <span style={styles.cartCount}>{cartItems.length}</span>
        )}
      </div>
    </nav>
  );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#F0EFFB",
        backdropFilter: "blur(40px)",
        border: "1px solid rgba(255, 255, 255, 0.625)",
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none", // remove underline do link
        color: "inherit",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#7065F0",
        marginRight: "10px",
    },
    cartIcon: {
        position: "relative",
        marginRight: "30px",
    },
    cartCount: {
        position: "absolute",
        top: "-10px",
        right: "-10px",
        backgroundColor: "#7065F0",
        borderRadius: "50%",
        color: "#fff",
        padding: "5px",
        fontSize: "12px",
        width: "10px", 
        height: "10px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
    },
};

export default Navbar;
