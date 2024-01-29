// ./components/suppliers/Suppliers.js

import React, { useState, useEffect } from 'react';

const Suppliers = () => {
  // Define state variable to store supplier data
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching supplier data from backend
  useEffect(() => {
    // Fetch supplier data
    fetchSuppliers();
  }, []);

  // Simulated function to fetch supplier data from backend
  const fetchSuppliers = () => {
    // Simulated data for demonstration
    const suppliersFromBackend = [
      { id: 1, name: 'Supplier A', email: 'supplierA@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Supplier B', email: 'supplierB@example.com', phone: '987-654-3210' },
      { id: 3, name: 'Supplier C', email: 'supplierC@example.com', phone: '456-789-0123' }
    ];
    setSuppliers(suppliersFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Suppliers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
