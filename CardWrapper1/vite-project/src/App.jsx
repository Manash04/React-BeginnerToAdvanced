import React from "react";

function App() {
  return <CardWrapper innerComponent={TextComponent} />;
}

function TextComponent() {
  return <div>hi there</div>;
}

function CardWrapper({ innerComponent: InnerComponent }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <InnerComponent />
    </div>
  );
}

export default App;
