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
    
    const styles = {
      container: {
        backgroundColor: '#263238',
        color: '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '400px',
        margin: '0 auto',
      },
      heading: {
        textAlign: 'center',
        marginBottom: '20px',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      label: {
        marginBottom: '8px',
      },
      input: {
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
    };
    
    export default SignInWindow;
