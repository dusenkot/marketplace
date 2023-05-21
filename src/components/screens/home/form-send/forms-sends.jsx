import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigateTo = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = (route) => {
    navigateTo(route);
    setIsDropdownOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <img src="src/assets/logo.png" alt="Logo" style={styles.logo} onClick={() => navigateTo('/home')} />
      </div>
      <div style={styles.middle}>
        <div style={styles.dropdownContainer} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          <button style={styles.button}>
            <span>Menu</span>
          </button>
          {isDropdownOpen && (
            <div style={styles.dropdownMenu}>
              <button style={styles.dropdownButton} onClick={() => handleButtonClick('/profile')}>
                Profile
              </button>
              <button style={styles.dropdownButton} onClick={() => handleButtonClick('/serchpeope')}>
                Search People
              </button>
              <button style={styles.dropdownButton} onClick={() => handleButtonClick('/wallet')}>
                Wallet
              </button>
              <button style={styles.dropdownButton} onClick={() => window.location.href='http://localhost/login-register/registration.php#'}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: '10px',
  },
  left: {},
  logo: {
    marginLeft: '80px',
    height: '70px',
    width: 'auto',
  },
  middle: {
    display: 'flex',
    justifyContent: 'center',
  },
  dropdownContainer: {
    position: 'relative',
  
  },
  button: {
    height: '60px',
    fontSize: '30px',
    margin: '0',
    padding: '8px 16px',
    background: 'transparent',
    color: '#ffffff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    borderRadius: '15px',
    padding: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  dropdownButton: {
    fontSize: '18px',
    margin: '4px 0',
    padding: '8px',
    background: 'transparent',
    color: '#ffffff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default App;
