import './App.css';

function login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {

        const requestBody = {
            additionalProp1: "string",
            additionalProp2: "string",
            additionalProp3: "string",
          };
          
        const response = await fetch('https://yu-sb.yeems214.xyz/user/login', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Accept': '*/*',
              'Accept-Language': 'en-US,en;q=0.9',
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000',
              'Referer': 'http://localhost:3000/',
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
            },
            body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data.success) {
        // Login successful, redirect to dashboard or whatever
        console.log('Login successful!');
        localStorage.setItem('token', data.data.token);
      } else {
        // Login failed, display error message
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <p>Not registered yet? <a href="#">Sign Up</a></p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email address" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">SIGN IN</button>
      </form>

      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>

      
    </div>
  );
}

export default login;