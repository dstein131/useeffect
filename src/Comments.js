// Importing required React hooks: useState and useEffect
import React, { useState, useEffect } from 'react';

// Defining a functional component called 'Comments'
const Comments = () => {
  
  // Define the state for comments with its updater function setComments.
  // Initialize it with an empty array.
  const [comments, setComments] = useState([]);
  
  // Define the state for loading status with its updater function setLoading.
  // Initialize it as true indicating that data is currently being fetched.
  const [loading, setLoading] = useState(true);

  // The useEffect hook allows for side effects (like data fetching) in functional components.
  useEffect(() => {
    
    // Inside the useEffect, fetch comments from the JSONPlaceholder API.
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json()) // Parse the response data as JSON.
      .then(data => {
        // Once data is fetched, set the comments state to the first 10 items from the fetched data.
        setComments(data.slice(0, 10)); 
        // Set the loading state to false indicating that data has been fetched.
        setLoading(false);
      })
      .catch(error => {
        // Log any errors encountered during fetching.
        console.error("Error fetching the comments:", error);
        // If an error occurs, also set the loading state to false.
        setLoading(false);
      });
      
  }, []); // An empty dependency array means this useEffect will only run once, similar to componentDidMount in class components.

  // Render the component's JSX
  return (
    <div>
      {loading ? ( // Conditional rendering based on the 'loading' state.
        <p>Loading comments...</p> // Display this if data is still being fetched.
      ) : (
        <ul>
          {/* Map through the 'comments' state and display each comment. */}
          {comments.map(comment => (
            <li key={comment.id}>
              {/* Display the name of the commenter in bold and their comment body. */}
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Export the 'Comments' component so it can be imported and used in other parts of the application.
export default Comments;
