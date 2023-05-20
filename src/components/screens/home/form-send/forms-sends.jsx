import React from 'react';
import { useNavigate  } from 'react-router-dom';

const FormSends = () => {
  const navigateTo = useNavigate();


return (
  
  <header style={styles.header}>
    <div style={styles.left}>
      <img src="src/assets/logo.png" alt="Logo" style={styles.logo} />
    </div>
    <div style={styles.middle}>
      <button style={styles.button}><span onClick={() => navigateTo('/about')}>About</span></button>
      <button style={styles.button}><span onClick={() => navigateTo('/profile')}>Profile</span></button>
      <button style={styles.button}><span onClick={() => navigateTo('/serchpeope')}>Wyszukaj</span></button>

    </div>
  </header>
);
};

const styles = {
header: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#14FFF7',
  padding: '10px',
  borderRadius: '20px',
},
left: {},
logo: {
  height: '60px',
  width: 'auto',
},
middle: {
  display: 'flex',
  justifyContent: 'center',
},
button: {
  height:'60px',
  fontSize:'30px',
  margin: '0 50px',
  padding: '8px 16px',
  background: 'transparent',
  color: '#ffffff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
},
};

      
export default FormSends

