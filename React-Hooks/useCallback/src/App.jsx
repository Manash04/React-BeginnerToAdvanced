import React, { useState, memo, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("Hello there!");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button onClick={() => {
        setCount(count + 1);
      }}>Click me {count}</button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("Child render");

  return (
    <div>
      <button onClick={inputFunction}>Button Clicked</button>
    </div>
  );
});

export default App;
