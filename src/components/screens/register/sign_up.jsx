import React from 'react';
import styles from './sign_up.css'

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

export default SignUp;
