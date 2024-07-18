import './App.css';
import { useState } from 'react';

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const age = event.target.elements.age.value;

    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://yu-sb.yeems214.xyz/user/Signup', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json', // Ensure this is set
            'Origin': 'http://localhost:3000', // Set the origin if needed
            'Referer': 'http://localhost:3000/', // Set the referer if needed
          },
        body: JSON.stringify({ name, email, username, password, age })
      });

      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        console.log('Signup successful!');
        alert('Signup successful!');
      } else {
        console.error('Signup failed:', data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error fetching API:', error);
      setError('Error fetching API: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
