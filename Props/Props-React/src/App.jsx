import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistant "
        price={59.99}
      />

      <Product
        name="iPhone"
        description="The best iPhone"
        price={1500}
      />

      <Product
        name="Macbook Pro"
        description="Your Favorite computer"
        price={59.99}
      />
    </div>
  );
}

export default App;
