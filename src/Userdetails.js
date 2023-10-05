// UserDetails.js
import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [userId, setUserId] = useState(1); // Initial user ID
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Fetch user details based on the userId state
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        setLoading(false);
      });
  }, [userId]); // useEffect depends on the userId state

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="Enter user ID (1-10)"
      />

      {loading ? (
        <p>Loading user details...</p>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      {/* Displaying code */}
      <pre className="codeBlock">
        {codeString}
      </pre>
    </div>
  );
}

const codeString = `
import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [userId, setUserId] = useState(1); // Initial user ID
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="Enter user ID (1-10)"
      />
      {loading ? (
        <p>Loading user details...</p>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
`;

export default UserDetails;
