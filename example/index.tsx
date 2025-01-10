import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "mylib";

const App = () => (
  <div>
    <h1>Test My Library</h1>
    <Button label="Click Me" onClick={() => alert("Clicked!")} />
  </div>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
