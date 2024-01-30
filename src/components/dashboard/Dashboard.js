import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file

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
    setLoading(false); // Set loading to false once data is fetched
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container"> {/* Apply CSS class to the main container */}
      <h2>Dashboard</h2>
      <div className="sales-data-container"> {/* Apply CSS class to the sales data container */}
        <h3>Sales Data</h3>
        <ul className="sales-list"> {/* Apply CSS class to the sales list */}
          {salesData.map((sale, index) => (
            <li key={index} className="sales-item"> {/* Apply CSS class to each sales item */}
              <strong>{sale.month}:</strong> ${sale.revenue}
            </li>
          ))}
        </ul>
      </div>
      <div className="inventory-data-container"> {/* Apply CSS class to the inventory data container */}
        <h3>Inventory Data</h3>
        <ul className="inventory-list"> {/* Apply CSS class to the inventory list */}
          {inventoryData.map((item, index) => (
            <li key={index} className="inventory-item"> {/* Apply CSS class to each inventory item */}
              <strong>{item.product}:</strong> {item.quantity} units
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
