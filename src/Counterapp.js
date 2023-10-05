import React, { useState, useEffect } from 'react';

function CounterApp() {
  // The `useState` hook initializes 'count' state with a default value of 0.
  // 'setCount' is the function used to update the 'count' state.
  const [count, setCount] = useState(0);

  // The `useEffect` hook is used for side-effects in function components.
  useEffect(() => {
    // This side effect updates the document's title every time 'count' changes.
    document.title = `Count is ${count}`;

    // Optional: You can return a cleanup function in useEffect.
    // For example, if you want to reset the title when the component is unmounted:
    return () => {
      document.title = `React App`;
    };
  }, [count]);  // The dependency array with 'count' means this effect runs every time 'count' changes.

  return (
    <div>
      {/* Displaying the current count */}
      <h1>Counter: {count}</h1>
      {/* A button that, when clicked, increments the count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterApp;
