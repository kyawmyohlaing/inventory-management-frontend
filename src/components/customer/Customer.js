import React, { useState, useEffect } from "react";
import axios from "axios";
//import { CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';
import "./Customer.css"; // Import CSS file

const Customer = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:2000/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make a POST request to your server endpoint to save the customer data
      const response = await axios.post("http://localhost:2000/api/customers", {
        name: customerName,
        address: customerAddress,
        contact: customerContact,
      });

      // Handle the response, e.g., show a success message to the user
      console.log("Customer saved successfully:", response.data);

      // Clear the form fields after successful submission
      setCustomerName("");
      setCustomerAddress("");
      setCustomerContact("");

      // Refresh the customer list after adding a new customer
      fetchCustomers();
    } catch (error) {
      console.error("Error saving customer:", error);
      // Handle any error that occurs during the submission process
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = customers.filter((customer) =>
      customer.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCustomers(filtered);

    // Automatically select the first matching customer if available
    if (filtered.length > 0) {
      setSelectedCustomerDetails(filtered[0]);
    } else {
      setSelectedCustomerDetails(null);
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

        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {selectedCustomerDetails && (
          <div>
            <h3>Selected Customer</h3>
            <p><b>Name:</b> {selectedCustomerDetails.name}</p>
            <p><b>Address:</b> {selectedCustomerDetails.address}</p>
            <p><b>Contact</b> {selectedCustomerDetails.contact}</p>
            {/* <CCard style={{ width: "18rem" }}>
              <CCardHeader>Selected Customer</CCardHeader>
              <CListGroup flush>
                <CListGroupItem>Name: {selectedCustomerDetails.name}</CListGroupItem>
                <CListGroupItem>Address: {selectedCustomerDetails.address}</CListGroupItem>
                <CListGroupItem>Contact: ${selectedCustomerDetails.contact}</CListGroupItem>
              </CListGroup>
            </CCard> */}
          </div>
        )}
        <div className="customer-table-container">
        <table className="customer-table">
          <thead className="customer-table thead">
            <tr className="customer-table thead tr">
              <th className="customer-table thead th" >Name</th>
              <th className="customer-table thead th">Address</th>
              <th className="customer-table thead th">Contact</th>
            </tr>
          </thead> 
          <tbody className="customer-table tbody">
            {customers.map((customer) => (
              <tr className="customer-table tbody tr" key={customer._id}>
                <td className="customer-table tbody td">{customer.name}</td>
                <td className="customer-table tbody td">{customer.address}</td>
                <td className="customer-table tbody td">{customer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div> 
      </div>
   
  );
};

export default Customer;
