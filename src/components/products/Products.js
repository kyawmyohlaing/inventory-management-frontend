import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Product.css'; // Import the CSS file

const Products = () => {
  // Define state variables to store product data, loading state, and total amount
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  // Define the fetchProducts function
  const fetchProducts = useCallback(async () => {
    try {
      // Make a GET request to fetch products from the backend API
      const response = await axios.get('http://localhost:2000/api/products');
      setProducts(response.data); // Update state with fetched products
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  }, []);

  // Calculate the total amount of all products
  useEffect(() => {
    const calculateTotalAmount = () => {
      return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    setTotalAmount(calculateTotalAmount());
  }, [products]);

  // Fetch product data from backend when the component mounts
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Add fetchProducts to the dependency array

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
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td> {/* Amount calculation */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total Amount: ${totalAmount}</div>
    </div>
  );
};

export default Products;
