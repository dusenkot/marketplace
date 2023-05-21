import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2023 Your Website. All rights reserved.</p>
        <p style={styles.text}>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#666',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  text: {
    color: '#EAEAEA',
    fontSize: '14px',
    margin: '10px 0',
  },
};

export default Footer;