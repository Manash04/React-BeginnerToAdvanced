import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("My name is Manash");
  return (
    <div>
      <button
        onClick={function () {
          setTitle(" My name is" + Manash.random());
        }}
      >
        {" "}
        Update the title
      </button>
      <Header title={title}></Header>
      <Header title="Manash"></Header>
      <Header title="Manash"></Header>
      <Header title="Manash"></Header>
      <Header title="Manash"></Header>
    </div>
  );
}

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is Manash");

//   function updateTitle() {
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="Manash2"></Header>
//       <Header title="Manash3"></Header>
//       <Header title="Manash4"></Header>
//     </div>
//   );
// }

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});
export default App;
