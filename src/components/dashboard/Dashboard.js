// ./components/dashboard/Dashboard.js

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // Define state variables to store dashboard data
  const [salesData, setSalesData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching sales and inventory data from backend
  useEffect(() => {
    // Fetch sales data
    fetchSalesData();
    // Fetch inventory data
    fetchInventoryData();
  }, []);

  // Simulated function to fetch sales data from backend
  const fetchSalesData = () => {
    // Simulated data for demonstration
    const salesDataFromBackend = [
      { month: 'January', revenue: 10000 },
      { month: 'February', revenue: 12000 },
      { month: 'March', revenue: 15000 }
    ];
    setSalesData(salesDataFromBackend);
  };

  // Simulated function to fetch inventory data from backend
  const fetchInventoryData = () => {
    // Simulated data for demonstration
    const inventoryDataFromBackend = [
      { product: 'Product A', quantity: 50 },
      { product: 'Product B', quantity: 100 },
      { product: 'Product C', quantity: 75 }
    ];
    setInventoryData(inventoryDataFromBackend);
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Sales Data</h3>
        <ul>
          {salesData.map((sale, index) => (
            <li key={index}>
              <strong>{sale.month}:</strong> ${sale.revenue}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Inventory Data</h3>
        <ul>
          {inventoryData.map((item, index) => (
            <li key={index}>
              <strong>{item.product}:</strong> {item.quantity} units
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
