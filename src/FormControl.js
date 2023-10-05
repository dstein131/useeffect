import React, { useState } from 'react';

function FormControlExample() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [bioError, setBioError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const usersData = [
    { id: 1, name: 'John Doe', bio: 'Software Engineer from California' },
    { id: 2, name: 'Jane Smith', bio: 'Data Scientist from Texas' },
    { id: 3, name: 'Alice Johnson', bio: 'UI/UX Designer from New York' },
    
  ];

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (!value) {
      setUsernameError('Username cannot be empty!');
    } else if (value.length < 3) {
      setUsernameError('Username should be at least 3 characters long!');
    } else if (/[^A-Za-z0-9]/.test(value)) {
      setUsernameError('Username should not contain special characters!');
    } else {
      setUsernameError('');
    }
  };

  const handleBioChange = (e) => {
    const value = e.target.value;
    setBio(value);

    if (value.length > 150) {
      setBioError('Bio should not be more than 150 characters!');
    } else {
      setBioError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Basic email validation using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!value) {
      setEmailError('Email cannot be empty!');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format!');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Username Input Field */}
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange}
        />
      </label>
      {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
      <p>Entered Username: {username}</p>
      
      {/* Email Input Field */}
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange}
        />
      </label>
      {emailError && <p style={{color: 'red'}}>{emailError}</p>}
      <p>Entered Email: {email}</p>
      
      {/* Bio Textarea Field */}
      <label>
        Bio:
        <textarea 
          value={bio} 
          onChange={handleBioChange}
        />
      </label>
      {bioError && <p style={{color: 'red'}}>{bioError}</p>}
      <p>Entered Bio: {bio}</p>

      {/* Search Field */}
      <div style={{ margin: '20px 0' }}>
        <label>
          Search Users:
          <input 
            type="text" 
            placeholder="Search by name or bio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      
      {/* Displaying Cards */}
      {filteredUsers.map(user => (
        <div key={user.id} style={cardStyles}>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
        </div>
      ))}
       {/* Displaying code */}
       <pre className="codeBlock">
                {codeString}
            </pre>
    </div>
    
  );
}

const cardStyles = {
  background: '#fff',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '20px',
  boxShadow: '0px 0px 5px rgba(0,0,0,0.1)'
};

const codeString = `
import React, { useState } from 'react';

function FormControlExample() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [bioError, setBioError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const usersData = [
    { id: 1, name: 'John Doe', bio: 'Software Engineer from California' },
    { id: 2, name: 'Jane Smith', bio: 'Data Scientist from Texas' },
    { id: 3, name: 'Alice Johnson', bio: 'UI/UX Designer from New York' },
    
  ];

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (!value) {
      setUsernameError('Username cannot be empty!');
    } else if (value.length < 3) {
      setUsernameError('Username should be at least 3 characters long!');
    } else if (/[^A-Za-z0-9]/.test(value)) {
      setUsernameError('Username should not contain special characters!');
    } else {
      setUsernameError('');
    }
  };

  const handleBioChange = (e) => {
    const value = e.target.value;
    setBio(value);

    if (value.length > 150) {
      setBioError('Bio should not be more than 150 characters!');
    } else {
      setBioError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Basic email validation using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}$/i;
    if (!value) {
      setEmailError('Email cannot be empty!');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email format!');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Username Input Field */}
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange}
        />
      </label>
      {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
      <p>Entered Username: {username}</p>
      
      {/* Email Input Field */}
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange}
        />
      </label>
      {emailError && <p style={{color: 'red'}}>{emailError}</p>}
      <p>Entered Email: {email}</p>
      
      {/* Bio Textarea Field */}
      <label>
        Bio:
        <textarea 
          value={bio} 
          onChange={handleBioChange}
        />
      </label>
      {bioError && <p style={{color: 'red'}}>{bioError}</p>}
      <p>Entered Bio: {bio}</p>

      {/* Search Field */}
      <div style={{ margin: '20px 0' }}>
        <label>
          Search Users:
          <input 
            type="text" 
            placeholder="Search by name or bio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      
      {/* Displaying Cards */}
      {filteredUsers.map(user => (
        <div key={user.id} style={cardStyles}>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
        </div>
      ))}
       {/* Displaying code */}
       <pre className="codeBlock">
                {codeString}
            </pre>
    </div>
    
  );
}`

export default FormControlExample;
