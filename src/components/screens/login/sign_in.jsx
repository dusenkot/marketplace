import styles from './sing_in.css'

function sing_in() {

    return (
        <div style={styles.container}>
          <h2 style={styles.heading}>Sign In</h2>
          <form style={styles.form}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input type="email" id="email" name="email" required style={styles.input} />
    
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <input type="password" id="password" name="password" required style={styles.input} />
    
            <input type="submit" value="Sign In" style={styles.submitButton} />
          </form>
        </div>
      );
};
        
    export default SignInWindow;
