import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Obtención de productos desde el backend:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5510/productos");
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Producto añadido al carrito");
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="products">
      <div className="products-container">
        <h2>Productos</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.imagen_url} alt={product.descripcion} />
              </div>
              <div className="product-info">
                <h3>{product.descripcion}</h3>
                <p className="product-description">{product.caracteristica}</p>
                <p className="product-price">{product.precio}</p>
              </div>
              <div className="product-actions">
                <Link
                  to={`/products/${product.id}`}
                  className="product-button view"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver más</span>
                </Link>
                <button
                  className="product-button buy"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
