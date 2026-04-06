import React from 'react';

const Error = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px', 
      color: 'white',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '6rem', color: '#4a90e2', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '2rem' }}>Oups ! La page est introuvable.</h2>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
        Il semble qu'il y ait eu un court-circuit dans la navigation...
      </p>
    </div>
  );
};

export default Error;