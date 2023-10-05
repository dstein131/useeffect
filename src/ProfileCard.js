// ProfileCard.js
import React from 'react';

function ProfileCard({ name, age }) {
  return (
    <div style={cardStyles}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>

      {/* Displaying code */}
      <pre className="codeBlock">
        {codeString}
      </pre>
    </div>
  );
}

const cardStyles = {
  background: '#f5f5f5',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px 0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};

const codeString = `
import React from 'react';

function ProfileCard({ name, age }) {
  return (
    <div style={cardStyles}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

const cardStyles = {
  background: '#f5f5f5',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px 0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};

export default ProfileCard;
`;

export default ProfileCard;
