// ./components/purchases/Purchases.js

import React, { useState, useEffect } from 'react';

const Purchases = () => {
  // Define state variable to store purchase data
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching purchase data from backend
  useEffect(() => {
    // Fetch purchase data
    fetchPurchases();
  }, []);

  // Simulated function to fetch purchase data from backend
  const fetchPurchases = () => {
    // Simulated data for demonstration
    const purchasesFromBackend = [
      { id: 1, product: 'Product A', quantity: 10, unitPrice: 20, totalPrice: 200 },
      { id: 2, product: 'Product B', quantity: 5, unitPrice: 15, totalPrice: 75 },
      { id: 3, product: 'Product C', quantity: 8, unitPrice: 25, totalPrice: 200 }
    ];
    setPurchases(purchasesFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Purchases</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map(purchase => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.product}</td>
              <td>{purchase.quantity}</td>
              <td>${purchase.unitPrice}</td>
              <td>${purchase.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
