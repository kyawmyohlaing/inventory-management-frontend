// ./components/backup/Backup.js

import React, { useState } from 'react';

const Backup = () => {
  // Define state variable to store backup status
  const [backupStatus, setBackupStatus] = useState('Not Started');

  // Simulated function to start backup process
  const startBackup = () => {
    setBackupStatus('In Progress');
    // Simulated asynchronous operation to start backup
    setTimeout(() => {
      setBackupStatus('Completed');
    }, 2000); // Simulate a 2-second delay for the backup process
  };

  return (
    <div>
      <h2>Backup</h2>
      <p>Backup Status: {backupStatus}</p>
      {backupStatus === 'Not Started' && (
        <button onClick={startBackup}>Start Backup</button>
      )}
    </div>
  );
};

export default Backup;
