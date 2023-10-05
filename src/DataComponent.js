// Importing required dependencies
import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    // State variable for storing the fetched data
    const [data, setData] = useState([]);
    // State variable for storing the user's message input
    const [message, setMessage] = useState('');

    // useEffect hook runs once on component mount because of the empty dependency array
    useEffect(() => {
        // Fetch the data once the component is mounted
        fetchData();
    }, []);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            // Fetch the data from the given endpoint
            const response = await fetch('http://localhost:3001/data');
            // Convert the response to a JSON object
            const jsonData = await response.json();
            // Update the state with the fetched data
            setData(jsonData);
        } catch (error) {
            // If there's an error during the fetch, log it to the console
            console.error('Failed to fetch data:', error.message);
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        try {
            // Post the message to the webhook endpoint
            const response = await fetch('http://localhost:3001/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Convert the message state to a stringified JSON object
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                // If the webhook call is successful, refresh the data
                fetchData();
            } else {
                // If there's an issue with the webhook, log the error to the console
                console.error('Webhook failed:', response.statusText);
            }

            // Clear the form after submission
            setMessage('');
        } catch (error) {
            // If there's an error during the POST request, log it to the console
            console.error('Failed to post data:', error.message);
        }
    };

    return (
        <div>
            {/* Form for users to input and submit new messages */}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={message}
                    // Update the message state whenever the input changes
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                />
                <button type="submit">Submit</button>
            </form>

            {/* Display the fetched data from the server */}
            {data.map((item) => (
                // Each data item gets its own div, using its ID as the key
                <div key={item.id}>{item.message}</div>
            ))}
            {/* Displaying code */}
       <pre className="codeBlock">
                {codeString}
            </pre>
        </div>
    );
};

const codeString = `// Importing required dependencies
import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    // State variable for storing the fetched data
    const [data, setData] = useState([]);
    // State variable for storing the user's message input
    const [message, setMessage] = useState('');

    // useEffect hook runs once on component mount because of the empty dependency array
    useEffect(() => {
        // Fetch the data once the component is mounted
        fetchData();
    }, []);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            // Fetch the data from the given endpoint
            const response = await fetch('http://localhost:3001/data');
            // Convert the response to a JSON object
            const jsonData = await response.json();
            // Update the state with the fetched data
            setData(jsonData);
        } catch (error) {
            // If there's an error during the fetch, log it to the console
            console.error('Failed to fetch data:', error.message);
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        try {
            // Post the message to the webhook endpoint
            const response = await fetch('http://localhost:3001/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Convert the message state to a stringified JSON object
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                // If the webhook call is successful, refresh the data
                fetchData();
            } else {
                // If there's an issue with the webhook, log the error to the console
                console.error('Webhook failed:', response.statusText);
            }

            // Clear the form after submission
            setMessage('');
        } catch (error) {
            // If there's an error during the POST request, log it to the console
            console.error('Failed to post data:', error.message);
        }
    };

    return (
        <div>
            {/* Form for users to input and submit new messages */}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={message}
                    // Update the message state whenever the input changes
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                />
                <button type="submit">Submit</button>
            </form>

            {/* Display the fetched data from the server */}
            {data.map((item) => (
                // Each data item gets its own div, using its ID as the key
                <div key={item.id}>{item.message}</div>
            ))}
            {/* Displaying code */}
       <pre className="codeBlock">
                {codeString}
            </pre>
        </div>
    );
};`


// Exporting the component to be used in other parts of the application
export default DataComponent;
