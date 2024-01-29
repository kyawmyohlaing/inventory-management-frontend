// ./components/products/Products.js

import React, { useState, useEffect } from 'react';

const Products = () => {
  // Define state variable to store product data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching product data from backend
  useEffect(() => {
    // Fetch product data
    fetchProducts();
  }, []);

  // Simulated function to fetch product data from backend
  const fetchProducts = () => {
    // Simulated data for demonstration
    const productsFromBackend = [
      { id: 1, name: 'Product A', category: 'Category A', price: 10, quantity: 100 },
      { id: 2, name: 'Product B', category: 'Category B', price: 20, quantity: 200 },
      { id: 3, name: 'Product C', category: 'Category A', price: 15, quantity: 150 }
    ];
    setProducts(productsFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
