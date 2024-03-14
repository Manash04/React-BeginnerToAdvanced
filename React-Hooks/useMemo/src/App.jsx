import { useState, useMemo, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount = finalCount + 1;
    }
    return finalCount;
  }, [inputValue]);

  // useEffect(()=>{
  //   let finalCount = 0;
  //   for (let i = 0; i <= inputValue;i++) {
  //     finalCount = finalCount + i;
  //   }
  //   setCount(finalCount);
  // },[inputValue]);
  

  return (
    <div>
      <input
        onChange={function (e) {
          console.log(e.target.value);
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button 
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;

//When you press the count button the rerendering happens So that why we use the useMemo
