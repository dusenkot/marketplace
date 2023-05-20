import React from 'react';

function SignUp() {

  return (
    
    <form style={styles.form}>
      <label htmlFor="name" style={styles.label}>Name:</label>
      <input type="text" id="name" name="name" required style={styles.input} />

      <label htmlFor="surname" style={styles.label}>Surname:</label>
      <input type="text" id="surname" name="surname" required style={styles.input} />

      <label htmlFor="login" style={styles.label}>Login:</label>
      <input type="text" id="login" name="login" required style={styles.input} />

      <label htmlFor="email" style={styles.label}>Email:</label>
      <input type="email" id="email" name="email" required style={styles.input} />

      <label htmlFor="password" style={styles.label}>Password:</label>
      <input type="password" id="password" name="password" required style={styles.input} />

      <input type="submit" value="Submit" style={styles.submitButton} />
    </form>
  );
};
const styles = {
  form: {
    backgroundColor: '#263238',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    width: '30%',
    maxWidth: '400px',
    marginLeft: '35%',
    margin: '0 auto',
},
label: {
    display: 'block',
    marginBottom: '8px',
},
input: {
    width: '95%',
    padding: '10px',
    border: '1px solid #78909c',
    borderRadius: '3px',
    marginBottom: '15px',
    color: '#ffffff',
    backgroundColor: '#37474f',
},
submitButton: {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
},
}

export default SignUp;