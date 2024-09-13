import { useContext } from "react";
import { CartContext } from "../src/app/services/cartContext";
import { BackButton } from "../styles/products.styles";
import Link from "next/link";
import {
  CartContainer,
  CartItem,
  CartImage,
  CartDetails,
  CartTitle,
  TotalPrice,
  QuantityCounter,
} from "../styles/cart.styles";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Create an object to track quantity of each item
  const cartSummary = cartItems.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = cartSummary.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <CartContainer>
      <BackButton>
        <Link href="/">🠔 Back to products</Link>
      </BackButton>
      <h1>Shopping Cart</h1>
      {cartSummary.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartSummary.map((item, index) => (
            <CartItem key={index}>
              <CartImage src={item.image} alt={item.title} />
              <CartDetails>
                <CartTitle>
                  {item.title.length > 65
                    ? `${item.title.substring(0, 65)}...`
                    : item.title}
                </CartTitle>
                <p>Price: ${item.price.toLocaleString()}</p>
                <QuantityCounter>Quantity: {item.quantity}</QuantityCounter>
              </CartDetails>
            </CartItem>
          ))}
          <TotalPrice>Total Price: ${totalPrice.toLocaleString()}</TotalPrice>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
