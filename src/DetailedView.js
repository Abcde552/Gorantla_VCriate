import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './DetailedView.css';



const DetailedView = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Getting the id from the URL
  

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAdded, setIsAdded] =useState(false)

  

  const [relatedProducts, setRelatedProducts] = useState([]); // To store the related products
  const [fetchingRelated, setFetchingRelated] = useState(false); // Loading state for fetching related products










  // Fetch product details based on the id

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
       
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProductDetails();
  }, [id]); // The useEffect will re-run every time the id changes

  
  
  
  // Add to cart function
 const handleAddToCart = () => {
   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

   const existingProductIndex = existingCart.findIndex(
     (item) => item.id === product.id
   );

   if (existingProductIndex !== -1) {
     // Product already in cart → increase quantity
     existingCart[existingProductIndex].quantity += 1;
   } else {
     // Add new product
     existingCart.push({ ...product, quantity: 1 });
   }

   localStorage.setItem("cart", JSON.stringify(existingCart));
   alert("Added to cart!");
   
   
   setIsAdded(true);
    
   
 };

  // Save cart to localStorage whenever it changes
  

  // Fetch related products on button click
  const fetchRelatedProducts = async () => {
    setFetchingRelated(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=10");
      if (!response.ok) throw new Error("Failed to fetch related products");
      const data = await response.json();
      setRelatedProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setFetchingRelated(false);
    }
  };

  // Loading state
  if (loading) return <div>Loading...</div>;

  // Error state
  if (error) return <div>Error: {error}</div>;

  // Display the fetched data
  return (
    <div className="align">
      <div className="product-container">
        {product && (
          <div className="product-details">
            <h1>{product.title}</h1>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            
            >
              Add to Cart
            </button>
          </div>
        )}

        {/* Related Products Section */}
        <button
          className="fetch-related-btn"
          onClick={fetchRelatedProducts}
          disabled={fetchingRelated}
        >
          {fetchingRelated ? "Fetching..." : "See Similar Products "}
        </button>
      </div>

      {/* Displaying Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3>Related Products:</h3>
          <div className="related-products">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="product-card">
                <h4>{relatedProduct.title}</h4>
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.title}
                  className="product-image"
                />
                <p className="product-price">${relatedProduct.price}</p>
                <button
                  className="view-details-btn"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedView;
