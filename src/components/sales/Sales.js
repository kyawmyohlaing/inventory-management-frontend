import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sales.css'; // Import CSS file

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]); // State to manage sold items

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:2000/api/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);

    // Automatically select the first matching product if available
    if (filtered.length > 0) {
      setSelectedProduct(filtered[0]);
    } else {
      setSelectedProduct(null);
    }
  };

  const handleAddToInvoice = () => {
    if (selectedProduct) {
      setInvoiceItems([...invoiceItems, selectedProduct]);
      setSelectedProduct(null); // Clear selected product after adding to invoice
      // Add selected product to invoice logic
    }
  };

  // Function to handle sale (add invoice to sold list and update product stock)
  const handleSale = async () => {
    try {
      // Add invoice to sold list
      setSoldItems([...soldItems, ...invoiceItems]);

      // Update product stock in the database
      await axios.put('http://localhost:2000/api/products/update-stock', invoiceItems);

      // Clear the invoice after sale
      setInvoiceItems([]);
    } catch (error) {
      console.error('Error selling products:', error);
    }
  };



  return (
    <div>
      <h2>Sales</h2>
      <div>
        <h3>Select Product</h3>
        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select onChange={(e) => handleProductSelect(JSON.parse(e.target.value))}>
          <option value="">Select a Product</option>
          {filteredProducts.map((product) => (
            <option key={product._id} value={JSON.stringify(product)}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      {selectedProduct && (
        <div>
          <h3>Selected Product</h3>
          <p>Name: {selectedProduct.name}</p>
          <p>Quantity: {selectedProduct.quantity}</p>
          <p>Price: ${selectedProduct.price}</p>
          <button onClick={handleAddToInvoice}>Add to Invoice</button>
          <button onClick={handleSale}>Sale</button>
        </div>
        
      )}
       <div>
        <h3>Invoice</h3>
        <ul>
          {invoiceItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  
  );
};

export default Sales;
