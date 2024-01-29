// ./components/settings/Settings.js

import React, { useState } from 'react';

const Settings = () => {
  // Define state variables to store settings data
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  // Handle currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Save settings
  const saveSettings = () => {
    // Simulated function to save settings to backend
    console.log('Settings saved:', { currency, language });
    // You can add logic here to save settings to the backend
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div>
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
};

export default Settings;
