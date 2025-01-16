import React from "react";
import { CloseButton } from "mylib";

const CloseButtonExample = () => {
  return <CloseButton onClick={() => alert("click")} size={25} />;
};

export default CloseButtonExample;
