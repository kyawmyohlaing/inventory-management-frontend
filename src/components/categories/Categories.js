// ./components/categories/Categories.js

import React, { useState, useEffect } from 'react';

const Categories = () => {
  // Define state variable to store category data
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching category data from backend
  useEffect(() => {
    // Fetch category data
    fetchCategories();
  }, []);

  // Simulated function to fetch category data from backend
  const fetchCategories = () => {
    // Simulated data for demonstration
    const categoriesFromBackend = [
      { id: 1, name: 'Category A' },
      { id: 2, name: 'Category B' },
      { id: 3, name: 'Category C' }
    ];
    setCategories(categoriesFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
