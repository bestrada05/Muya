import { Trash2, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const handlePayment = (productId) => {
    console.log("Processing payment for product:", productId);
    // Implementar lógica de Pago acá
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
                <p>x {item.quantity}</p>
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
                <button
                  onClick={() => handlePayment(item.id)}
                  className="cart-action-button pay"
                  aria-label="Pagar producto"
                >
                  <CreditCard className="button-icon" />
                  <span>Pagar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-decoration">
        <img
          src="/fotos/PlantaCarrito.jpg"
          alt="Cart Plant"
          className="decoration-image"
        />
      </div>
    </div>
  );
}
