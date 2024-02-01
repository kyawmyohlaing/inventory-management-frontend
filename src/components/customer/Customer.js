import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customer.css'; // Import CSS file

const Customer = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:2000/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make a POST request to your server endpoint to save the customer data
      const response = await axios.post('http://localhost:2000/api/customers', {
        name: customerName,
        address: customerAddress,
        contact: customerContact
      });

      // Handle the response, e.g., show a success message to the user
      console.log('Customer saved successfully:', response.data);

      // Clear the form fields after successful submission
      setCustomerName('');
      setCustomerAddress('');
      setCustomerContact('');

      // Refresh the customer list after adding a new customer
      fetchCustomers();
    } catch (error) {
      console.error('Error saving customer:', error);
      // Handle any error that occurs during the submission process
    }
  };

  return (
    <div className="customer-container">
      <div className="customer-form-container">
        <h2 className="customer-title">Customer Details</h2>
        <form className="customer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Contact"
            value={customerContact}
            onChange={(e) => setCustomerContact(e.target.value)}
            required
          />
          <br></br>
          <button type="submit">Save Customer</button>
        </form>
      </div>
      <div className="customer-list-container">
        <h2 className="customer-list-title">Customer List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
