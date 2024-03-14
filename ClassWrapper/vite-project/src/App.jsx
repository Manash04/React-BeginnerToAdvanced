import React from "react";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card>Hi there!</Card>
      <Card>
        <div>Hello from the 2nd card</div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
      }}>
      {children}
    </div>
  );
}

export default App;
