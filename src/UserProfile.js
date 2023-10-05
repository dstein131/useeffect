import React from 'react';

function UserProfile({ profiles }) {
    return (
        <div>
            {profiles.map(profile => (
                <div key={profile.name}>
                    <h3>{profile.name}</h3>
                    <p>Age: {profile.age}</p>
                </div>
            ))}

            {/* Displaying code */}
            <pre className="codeBlock">
                {codeString}
            </pre>
        </div>
    );
}

const codeString = `
import React from 'react';

function UserProfile({ profiles }) {
    return (
        <div>
            {profiles.map(profile => (
                <div key={profile.name}>
                    <h3>{profile.name}</h3>
                    <p>Age: {profile.age}</p>
                </div>
            ))}
        </div>
    );
}

export default UserProfile;
`;

export default UserProfile;
