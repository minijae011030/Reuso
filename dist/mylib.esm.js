import React from 'react';

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  return React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "10px 20px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      background: "#f0f0f0",
      cursor: "pointer"
    }
  }, label);
};

export { Button };
//# sourceMappingURL=mylib.esm.js.map
