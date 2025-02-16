import { Trash2, CreditCard, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handlePayment = () => {
    console.log("Processing payment for all items:", cartItems);
    // Implementar lógica de Pago acá
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <p>No hay artículos en el carrito</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Carrito de Compra</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <div className="quantity-controls">
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    <Minus className="button-icon" />
                  </button>
                  <span className="quantity-display">x {item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <Plus className="button-icon" />
                  </button>
                </div>
                <p className="item-price">${item.price * item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cart-action-button delete"
                  aria-label="Eliminar producto"
                >
                  <Trash2 className="button-icon" />
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="total-section">
            <h2>Total a Pagar:</h2>
            <span className="total-amount">${calculateTotal()}</span>
          </div>
          <button
            onClick={handlePayment}
            className="pay-all-button"
            aria-label="Pagar todo"
          >
            <CreditCard className="button-icon" />
            <span>Pagar Todo</span>
          </button>
        </div>
      </div>
      <div className="cart-decoration">
        <img
          src="https://res.cloudinary.com/dcv4katvi/image/upload/v1738533331/PlantaCarrito_qofcce.jpg"
          alt="Cart Plant"
          className="decoration-image"
        />
      </div>
    </div>
  );
}
