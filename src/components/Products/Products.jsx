import { useState, useEffect } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { supabase } from "../../lib/supabase";
import { useNotification } from "../../context/NotificationContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { showNotification } = useNotification();

  // Fetch products from database on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(8);

        if (error) throw error;

        // Transform data to match component format
        const transformedProducts = data.map((product, index) => ({
          id: product.id,
          img: product.image,
          title: product.name,
          price: product.price.toString(),
          rating: product.rating,
          discount: product.discount,
          description: product.description,
          category: product.category,
          stock: product.stock,
          aosDelay: (index % 4) * 200, // Stagger animation
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        showNotification('Failed to load products. Please try again.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [showNotification]);

  const handleProductClick = (product) => {
    console.log('📦 Opening modal for product:', product.title);
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  if (loading) {
    return (
      <div className="container py-10">
        <Heading title="Featured Products" subtitle={"Discover the Latest Tech Innovation"} />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Featured Products" subtitle={"Discover the Latest Tech Innovation"} />
        {/* Body section */}
        {products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No products available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6">
            {products.map((data) => (
              <ProductCard 
                key={data.id} 
                data={data}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal - Outside of card */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          isOpen={showDetailModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Products;