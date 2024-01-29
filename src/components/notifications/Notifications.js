// ./components/notifications/Notifications.js

import React, { useState, useEffect } from 'react';

const Notifications = () => {
  // Define state variable to store notifications
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching notifications from backend
  useEffect(() => {
    // Fetch notifications
    fetchNotifications();
  }, []);

  // Simulated function to fetch notifications from backend
  const fetchNotifications = () => {
    // Simulated data for demonstration
    const notificationsFromBackend = [
      { id: 1, message: 'Low stock for Product A' },
      { id: 2, message: 'New order received' },
      { id: 3, message: 'Payment processed successfully' }
    ];
    setNotifications(notificationsFromBackend);
    setLoading(false); // Set loading to false once data is fetched
  };

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
