// ./components/reports/Reports.js

import React, { useState, useEffect } from 'react';

const Reports = () => {
  // Define state variable to store report data
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching report data from backend
  useEffect(() => {
    // Fetch report data
    fetchReports();
  }, []);

  // Simulated function to fetch report data from backend
  const fetchReports = () => {
    // Simulated data for demonstration
    const reportsFromBackend = [
      { id: 1, name: 'Sales Report', type: 'Monthly', date: '2022-01-01' },
      { id: 2, name: 'Inventory Report', type: 'Weekly', date: '2022-01-05' },
      { id: 3, name: 'Profit Report', type: 'Quarterly', date: '2022-01-15' }
    ];
    setReports(reportsFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Reports</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.type}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
