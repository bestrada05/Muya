import { Link } from "react-router-dom";
import { Eye, ShoppingCart } from "lucide-react";

export function Products() {
  const products = [
    {
      id: 1,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-1",
    },
    {
      id: 2,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-2",
    },
    {
      id: 3,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-3",
    },
    {
      id: 4,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-4",
    },
    {
      id: 5,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-5",
    },
    {
      id: 6,
      name: "Nombre Producto",
      description: "Descripción",
      price: "Precio",
      image: "/placeholder.svg?height=300&width=300",
      slug: "product-6",
    },
  ];

  return (
    <section className="products">
      <div className="products-container">
        <h2>Productos</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-actions">
                <Link
                  to={`/products/${product.slug}`}
                  className="product-button view"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver más</span>
                </Link>
                <button className="product-button buy">
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
