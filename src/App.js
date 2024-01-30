import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Purchases from './components/purchases/Purchases';
import Sales from './components/sales/Sales';
import Suppliers from './components/suppliers/Suppliers';
import Reports from './components/reports/Reports';
import Settings from './components/settings/Settings';
import Backup from './components/backup/Backup';
import Notifications from './components/notifications/Notifications'; // Import your Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />} /> {/* Render Dashboard component for root route */}
          {/* Define other routes for your application */}
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Suppliers" element={<Suppliers />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Backup" element={<Backup />} />
          <Route path="/Notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
