import React, { useState } from "react";
import { LabelInput } from "mylib";

const LabelInputExample = () => {
  const [id, setId] = useState("");

  return (
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
  );
};

export default LabelInputExample;
