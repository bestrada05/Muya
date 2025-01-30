import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Aca debemos extraer los productos de la base de Datos
  // Dejo esto a modo de eejmplo para visualizar 1 producto
  const product = {
    name: "Nombre Producto",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis at eu vulputate magna faucibus elementum. Quam nisi lobortis ligula ante dolor rhoncus. Massa porta fringilla mus ut enim. Volutpat morbi feugiat magna magnis ligula odio praesent.",
    image: "/fotos/planta4.jpg",
    price: "$29.990",
  };

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding to cart:", { productId: id, quantity });
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-content">
          <h1>{product.name}</h1>
          <div className="product-detail-description">
            <p>{product.description}</p>
          </div>
          <form onSubmit={handleSubmit} className="product-detail-form">
            <div className="quantity-input">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                aria-label="Cantidad"
              />
            </div>
            <button type="submit" className="buy-button">
              <ShoppingCart className="button-icon" />
              <span>Comprar</span>
              <ArrowRight className="button-icon" />
            </button>
          </form>
        </div>
        <div className="product-detail-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
        </div>
      </div>
    </div>
  );
}
