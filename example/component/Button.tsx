import React from "react";
import { Button } from "mylib";

const ButtonExample = () => {
  const sumbmit = () => {
    alert(name);
  };

  return (
    <Button
      color="#333"
      width={250}
      height={45}
      onClick={sumbmit}
      variant="filled"
    >
      제출하기
    </Button>
  );
};

export default ButtonExample;
