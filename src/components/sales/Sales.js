// ./components/sales/Sales.js

import React, { useState, useEffect } from 'react';

const Sales = () => {
  // Define state variable to store sales data
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching sales data from backend
  useEffect(() => {
    // Fetch sales data
    fetchSales();
  }, []);

  // Simulated function to fetch sales data from backend
  const fetchSales = () => {
    // Simulated data for demonstration
    const salesFromBackend = [
      { id: 1, product: 'Product A', quantity: 10, unitPrice: 30, totalPrice: 300 },
      { id: 2, product: 'Product B', quantity: 8, unitPrice: 25, totalPrice: 200 },
      { id: 3, product: 'Product C', quantity: 15, unitPrice: 20, totalPrice: 300 }
    ];
    setSales(salesFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Sales</h2>
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
          {sales.map(sale => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>${sale.unitPrice}</td>
              <td>${sale.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
