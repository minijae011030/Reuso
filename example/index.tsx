import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button, CloseButton, DropdownInput, Input, LabelInput } from "mylib";

const App = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [selected, setSelected] = useState("option1");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const sumbmit = () => {
    alert(name);
  };

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
      <CloseButton onClick={() => alert("click")} size={25} />
      <Input
        id="name"
        name="name"
        autocomplete="name"
        value={name}
        onChange={setName}
        placeholder="우편번호"
        variant="unstyled"
        clearButton
        isDisabled
      />
      <LabelInput
        id="id"
        name="id"
        autocomplete="id"
        value={id}
        onChange={setId}
        clearButton
        variant="default"
        placeholder="Input placeholder"
        label="Input label"
        description="Input description"
        error="Input error"
        width={300}
      />
      <Button
        color="#333"
        width={250}
        height={45}
        onClick={sumbmit}
        variant="filled"
      >
        제출하기
      </Button>
      <DropdownInput
        label="내가 좋아하는것"
        description="젤루 좋아하는것은?"
        options={options}
        selectedValue={selected}
        onChange={setSelected}
        variant="default"
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
