'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

exports.Button = Button;
//# sourceMappingURL=mylib.cjs.development.js.map
