import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Obtener producto desde el backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5510/productos/${id}`);
        if (!response.ok) throw new Error("Error al obtener el producto");

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success("Producto añadido al carrito");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-content">
          <h1>{product.descripcion}</h1>
          <div className="product-detail-description">
            <p>{product.caracteristica || "No hay descripción disponible."}</p>
          </div>
          <div className="product-detail-form">
            <div className="quantity-input">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                aria-label="Cantidad"
              />
            </div>
            <button onClick={handleAddToCart} className="buy-button">
              <ShoppingCart className="button-icon" />
              <span>Comprar</span>
              <ArrowRight className="button-icon" />
            </button>
          </div>
        </div>
        <div className="product-detail-image">
          <img src={product.imagen_url} alt={product.descripcion} />
        </div>
      </div>
    </div>
  );
}
