import React, { useState } from "react";
import { DropdownInput } from "mylib";

const DropdownInputExaxmple = () => {
  const [selected, setSelected] = useState("option1");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <DropdownInput
      label="내가 좋아하는것"
      description="젤루 좋아하는것은?"
      options={options}
      selectedValue={selected}
      onChange={setSelected}
      variant="default"
    />
  );
};

export default DropdownInputExaxmple;
