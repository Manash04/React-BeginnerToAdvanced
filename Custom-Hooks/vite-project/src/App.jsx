import React, { useState, useEffect } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebounced] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDebounced(value);
    }, 1000);
  },[value]);
  return debouncedValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
