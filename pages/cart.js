// pages/cart.js
import { useContext } from "react";
import { CartContext } from "../src/app/services/cartContext";
import { BackButton } from "../styles/products.styles";
import Link from "next/link";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div style={styles.cartContainer}>
      <BackButton>
        <Link href="/">🠔 Voltar para produtos</Link>
      </BackButton>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.title} style={styles.cartImage} />
              <div>
                <h2>
                  {item.title.length > 65
                    ? `${item.title.substring(0, 65)}`
                    : item.title}
                </h2>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
          <h2>Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: "20px",
  },
  cartItem: {
    display: "flex",
    marginBottom: "20px",
  },
  cartImage: {
    width: "100px",
    marginRight: "20px",
  },
};

export default Cart;
