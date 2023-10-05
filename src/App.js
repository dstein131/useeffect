//useeffect.js

// Importing necessary modules for our React app
import React from 'react';
// BrowserRouter, Route, and Routes are components from the 'react-router-dom' library, which enables navigation and routing in our app.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Importing styles specific to the App component
import Navbar from './Navbar'; // Navbar component for navigation
import Comments from './Comments'; // Comments component displays comments data
import UserProfile from './UserProfile'; // UserProfile component displays user profile data
import UserDetails from './Userdetails'; // UserDetails component displays user-specific data
import DataComponent from './DataComponent'; 
import ControlledForm from './FormControl';




const userProfiles = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 30 },
  { name: "Eve", age: 26 }
];

// This is the main App component, which serves as the root component for our application.
function App() {
  return (
    // We're wrapping our application inside the Router component, which provides the routing capabilities.
    <Router>
      <div className="App">
        {/* Navbar component is rendered here, which will be visible on every page/route. */}
        <Navbar />
     
        {/* Routes component wraps all Route components, determining which component to show based on the current URL. */}
        <Routes>
          {/* When the URL matches '/', the following elements will be rendered: */}
          <Route path="/" element={<><h1>Welcome Home</h1><p>Select a page from the navbar to navigate.</p></>} />

          {/* When the URL matches '/comments', the Comments component is rendered along with a heading. */}
          <Route path="/comments" element={<><h1>Comments from JSONPlaceholder API</h1><Comments /></>} />

          {/* When the URL matches '/user-details', the UserDetails component is rendered along with a heading. */}
          <Route path="/user-details" element={<><h1>User Details from JSONPlaceholder API</h1><UserDetails /></>} />

          {/* When the URL matches '/data-components', the DataComponent is rendered with its heading. */}
          <Route path="/data-components" element={<><h1>Data Components</h1><DataComponent /></>} />

            {/* When the URL matches '/form-control', the ControlledForm is rendered with its heading. */}
            <Route path="/form-control" element={<><h1>Form Control</h1>   <ControlledForm /></>} />
          {/* Introduce the PropsDisplay component with and without the content prop */}
          
        <Route path="/user-profile" element={
          <>
            <h1>Passing Props Example</h1>
            <UserProfile profiles={userProfiles} />
          </>
        } />
        </Routes>
            {/* Displaying code */}
            <pre className="codeBlock">
                {codeString}
            </pre>
      </div>
    </Router>
  );
}

const codeString = `
// Importing necessary modules for our React app
import React from 'react';
// BrowserRouter, Route, and Routes are components from the 'react-router-dom' library, which enables navigation and routing in our app.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Importing styles specific to the App component
import Navbar from './Navbar'; // Navbar component for navigation
import Comments from './Comments'; // Comments component displays comments data
import UserProfile from './UserProfile'; // UserProfile component displays user profile data
import UserDetails from './Userdetails'; // UserDetails component displays user-specific data
import DataComponent from './DataComponent'; // 
import ControlledForm from './FormControl';


const userProfiles = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 30 },
  { name: "Eve", age: 26 }
];

// This is the main App component, which serves as the root component for our application.
function App() {
  return (
    // We're wrapping our application inside the Router component, which provides the routing capabilities.
    <Router>
      <div className="App">
        {/* Navbar component is rendered here, which will be visible on every page/route. */}
        <Navbar />
     
        {/* Routes component wraps all Route components, determining which component to show based on the current URL. */}
        <Routes>
          {/* When the URL matches '/', the following elements will be rendered: */}
          <Route path="/" element={<><h1>Welcome Home</h1><p>Select a page from the navbar to navigate.</p></>} />

          {/* When the URL matches '/comments', the Comments component is rendered along with a heading. */}
          <Route path="/comments" element={<><h1>Comments from JSONPlaceholder API</h1><Comments /></>} />

          {/* When the URL matches '/user-details', the UserDetails component is rendered along with a heading. */}
          <Route path="/user-details" element={<><h1>User Details from JSONPlaceholder API</h1><UserDetails /></>} />

          {/* When the URL matches '/data-components', the DataComponent is rendered with its heading. */}
          <Route path="/data-components" element={<><h1>Data Components</h1><DataComponent /></>} />

            {/* When the URL matches '/form-control', the ControlledForm is rendered with its heading. */}
            <Route path="/form-control" element={<><h1>Form Control</h1>   <ControlledForm /></>} />
          {/* Introduce the PropsDisplay component with and without the content prop */}
          
        <Route path="/user-profile" element={
          <>
            <h1>Passing Props Example</h1>
            <UserProfile profiles={userProfiles} />
          </>
        } />
        </Routes>
            {/* Displaying code */}
            <pre className="codeBlock">
                {codeString}
            </pre>
      </div>
    </Router>
  );
}`

// Exporting the App component so that it can be imported and used in other parts of our application (like index.js).
export default App;
