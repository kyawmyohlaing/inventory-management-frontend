import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

const Products = () => {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [supplierSku, setSupplierSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [regularPrice, setRegularPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [grossProfit, setGrossProfit] = useState(0);
  const [currentStock, setCurrentStock] = useState(0);
  const [lowStockThreshold, setLowStockThreshold] = useState(0);
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({
    productId: null,
    field: null,
  });
  const [loading, setLoading] = useState(true);

  const calculateGrossProfit = () => {
    const profit = salePrice - purchasePrice;
    setGrossProfit(profit);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Generate unique identifiers for SKU and supplier SKU
      const generatedSKU = generateUniqueSKU(); // Implement the logic to generate a unique SKU
      const generatedSupplierSKU = generateUniqueSupplierSKU(); // Implement the logic to generate a unique supplier SKU

      const response = await axios.post("http://localhost:2000/api/products", {
        productName,
        sku: generatedSKU,
        supplier,
        supplierSku: generatedSupplierSKU,
        barcode,
        regularPrice,
        salePrice,
        purchasePrice,
        grossProfit,
        currentStock,
        lowStockThreshold,
      });

      console.log("Product saved successfully:", response.data);

      // Clear form fields after successful submission
      setProductName("");
      setSku(generatedSKU);
      setSupplier("");
      setSupplierSku(generatedSupplierSKU);
      setBarcode("");
      setRegularPrice(0);
      setSalePrice(0);
      setPurchasePrice(0);
      setGrossProfit("");
      setCurrentStock(0);
      setLowStockThreshold(0);

      // Refresh product list after adding a new product
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Function to generate a unique SKU
  const generateUniqueSKU = () => {
    // Implement your logic to generate a unique SKU
    const uniqueSKU = generateRandomSKU(); // Implement the logic to generate a unique SKU
    return uniqueSKU;
  };

  // Function to generate a unique Supplier SKU
  const generateUniqueSupplierSKU = () => {
    // Implement your logic to generate a unique supplier SKU
    const uniqueSupplierSKU = generateRandomSupplierSKU(); // Implement the logic to generate a unique supplier SKU
    return uniqueSupplierSKU;
  };

  // Function to generate a random SKU (example implementation)
  const generateRandomSKU = () => {
    // Implement your logic to generate a random SKU
    // For example, you can generate a random string of characters or numbers
    return "SKU" + Math.random().toString(36).substr(2, 9); // Example: Generates a random 9-character SKU
  };

  // Function to generate a random Supplier SKU (example implementation)
  const generateRandomSupplierSKU = () => {
    // Implement your logic to generate a random supplier SKU
    // For example, you can generate a random string of characters or numbers
    return "SUP" + Math.random().toString(36).substr(2, 9); // Example: Generates a random 9-character supplier SKU
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2000/api/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCellClick = (productId, field) => {
    setEditedProduct({ productId, field });
  };

  const handleCellChange = (event, productId, field) => {
    const { value } = event.target;

    // Find the product being edited
    const updatedProducts = products.map((product) => {
      if (product._id === productId) {
        return { ...product, [field]: value };
      }
      return product;
    });

    // Update the state with the edited product
    setProducts(updatedProducts);
  };

  const handleCellBlur = async (productId, field) => {
    try {
      await axios.patch(`http://localhost:2000/api/products/${productId}`, {
        [field]: editedProduct[field],
      });
      setEditedProduct({ productId: null, field: null });
      // Refresh product list after updating the product field
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form inputs go here */}
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
        <label>SKU:</label>
        <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
      </div> */}
        <div className="form-group">
          <label>Supplier:</label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
        <label>Supplier SKU:</label>
        <input type="text" value={supplierSku} onChange={(e) => setSupplierSku(e.target.value)} />
      </div> */}
        <div className="form-group">
          <label>Barcode:</label>
          <input
            type="text"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Regular Price:</label>
          <input
            type="number"
            value={regularPrice}
            onChange={(e) => setRegularPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sale Price:</label>
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            onBlur={calculateGrossProfit}
          />
        </div>
        <div className="form-group">
          <label>Purchase Price:</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            onBlur={calculateGrossProfit}
          />
        </div>
        <div className="form-group">
          <label>Gross Profit:</label>
          <input type="number" value={grossProfit} readOnly />
        </div>
        <div className="form-group">
          <label>Current Stock:</label>
          <input
            type="number"
            value={currentStock}
            onChange={(e) => setCurrentStock(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Low Stock Threshold:</label>
          <input
            type="number"
            value={lowStockThreshold}
            onChange={(e) => setLowStockThreshold(e.target.value)}
          />
        </div>
        <button type="submit">Save Product</button>
      </form>

      <div className="container">
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              {/* Table headers */}
              <th>Product Name</th>
              <th>SKU</th>
              <th>Supplier</th>
              <th>Supplier SKU</th>
              <th>Barcode</th>
              <th>Regular Price</th>
              <th>Sale Price</th>
              <th>Purchase Price</th>
              <th>GrossProfit</th>
              <th>Current Stock</th>
              <th>LowStock Threshold</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                {/* Table cells */}
                <td
                  onClick={() => handleCellClick(product._id, "productName")}
                  contentEditable={
                    editedProduct?.productId === product._id &&
                    editedProduct.field === "productName"
                  }
                  onInput={(event) =>
                    handleCellChange(event, product._id, "productName")
                  }
                  // Add a tabIndex attribute to make the cell focusable
                  tabIndex={0}
                  // Handle the onBlur event by preventing the default action and calling handleCellBlur
                  onBlur={(event) => {
                    event.preventDefault();
                    handleCellBlur(product._id, "productName");
                  }}
                >
                  {product.productName}
                </td>
                <td>{product.sku}</td>
                <td>{product.supplier}</td>
                <td>{product.supplierSku}</td>
                <td>{product.barcode}</td>
                <td>${product.regularPrice}</td>
                <td>${product.salePrice}</td>
                <td>${product.purchasePrice}</td>
                <td>${product.salePrice - product.purchasePrice}</td>
                <td>{product.currentStock}</td>
                <td>{product.lowStockThreshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;

