import React from "react";
import ReactDOM from "react-dom/client";
import CloseButtonExample from "./component/CloseButton";
import InputExample from "./component/Input";
import LabelInputExample from "./component/LabelInput";
import ButtonExample from "./component/Button";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>Test My Library</h1>
      <CloseButtonExample />
      <InputExample />
      <LabelInputExample />
      <ButtonExample />
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
