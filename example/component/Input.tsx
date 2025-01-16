import React, { useState } from "react";
import { Input } from "mylib";

const InputExample = () => {
  const [name, setName] = useState("");

  return (
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
  );
};

export default InputExample;
