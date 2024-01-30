import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Purchases = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', quantity: 1, price: 10 },
    { id: 2, name: 'Product B', quantity: 2, price: 20 },
    // Initial product entries
  ]);

  const addProduct = () => {
    const newProduct = { id: products.length + 1, name: '', quantity: 0, price: 0 };
    setProducts([...products, newProduct]);
  };

  const handleNameChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].name = value;
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = value;
    setProducts(updatedProducts);
  };

  const handlePriceChange = (index, value) => {
    const updatedProducts = [...products];
    updatedProducts[index].price = value;
    setProducts(updatedProducts);
  };

  const calculateAmount = (quantity, price) => {
    return quantity * price;
  };

  const calculateTotalAmount = () => {
    return products.reduce((total, product) => total + calculateAmount(product.quantity, product.price), 0);
  };

  const saveToDatabase = async () => {
    try {
      // Make a POST request to your backend API to save the products to the database
      await axios.post('/api/products', products);
      alert('Products saved to database successfully!');
    } catch (error) {
      console.error('Error saving products to database:', error);
      alert('Failed to save products to database.');
    }
  };

  return (
    <div>
      <h2>Purchases</h2>
      <button onClick={addProduct}>Add Product</button>
      <button onClick={saveToDatabase}>Save to Database</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>
                <input 
                  type="text" 
                  value={product.name} 
                  onChange={(e) => handleNameChange(index, e.target.value)} 
                />
              </td>
              <td>
                <input 
                  type="number" 
                  value={product.quantity} 
                  onChange={(e) => handleQuantityChange(index, e.target.value)} 
                />
              </td>
              <td>
                <input 
                  type="number" 
                  value={product.price} 
                  onChange={(e) => handlePriceChange(index, e.target.value)} 
                />
              </td>
              <td>{calculateAmount(product.quantity, product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total Amount: {calculateTotalAmount()}</div>
    </div>
  );
};

export default Purchases;
