import React from "react";
import ReactDOM from "react-dom/client"; // React 18 이상에서는 react-dom/client 사용
import { Button } from "mylib";

const App = () => (
  <div>
    <h1>Test My Library</h1>
    <Button label="Click Me" onClick={() => alert("Clicked!")} />
  </div>
);

// React 18 방식으로 수정
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // createRoot 사용
  root.render(<App />);
}
