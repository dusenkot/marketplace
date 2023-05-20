import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Future</h1>
      <p style={styles.heading1}>starts here</p>
      <p style={styles.text}>Why should you choose us?</p>
      <p style={styles.text_main}>
        So, we have user-friendly interface, convenience and security, smart communication, quality feedback, development and improvement of the platform
      </p>
      <p style={styles.users_proposals}>Our users and their proposals</p>
      <div style={styles.main_div}></div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'red',
    color: '#ffffff',
    padding: '50px',
    textAlign: 'left',
  },
  heading: {
    paddingLeft: '20px',
    fontSize: '75px',
    marginBottom: '0px',
  },
  heading1: {
    fontSize: '67px',
    marginBottom: '150px',
    marginLeft: '200px',
    marginTop: '0px',
  },
  text: {
    paddingLeft: '15px',
    fontSize: '30px',
  },
  text_main: {
    fontSize: '22px',
  },
  users_proposals: {
    marginLeft: '37%',
    fontSize: '34px',
  },

  main_div: {
    display: 'flex',
  },
};

export default About;
