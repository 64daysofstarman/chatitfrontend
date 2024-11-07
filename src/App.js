import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend if available
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://your_domain.com/api/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    }
  }, []);

  // More frontend code...

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          {/* Rest of the app UI */}
        </div>
      ) : (
        <div>
          {/* Login and registration UI */}
        </div>
      )}
    </div>
  );
}

export default App;