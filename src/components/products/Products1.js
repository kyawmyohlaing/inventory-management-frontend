import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:2000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const calculateTotalAmount = () => {
      return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    setTotalAmount(calculateTotalAmount());
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: 'auto' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount">Total Amount: ${totalAmount}</div>
    </div>
  );
};

export default Products;
