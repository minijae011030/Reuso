'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Color = _interopDefault(require('color'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_button__7BLGt{align-items:center;cursor:pointer;display:flex;justify-content:center;text-align:center;transition:background-color .3s ease,color .3s ease,border-color .3s ease}.Button-module_button__7BLGt:hover{filter:brightness(.95)}.Button-module_button_transparent__C4axA{align-items:center;cursor:pointer;display:flex;justify-content:center;text-align:center;transition:background-color .3s ease,color .3s ease,border-color .3s ease}";
var styles = {"button":"Button-module_button__7BLGt","button_transparent":"Button-module_button_transparent__C4axA"};
styleInject(css_248z);

var Button = function Button(_ref) {
  var color = _ref.color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 170 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 50 : _ref$height,
    children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant,
    onClick = _ref.onClick;
  if (variant === "transparent") {
    return React.createElement("button", {
      className: styles.button_transparent,
      onClick: onClick,
      style: {
        width: width,
        height: height,
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        background: "white",
        color: color
      }
    }, children);
  }
  if (variant === "light") {
    var lighterColor = Color(color).lighten(0.9).hex();
    return React.createElement("button", {
      className: styles.button,
      onClick: onClick,
      style: {
        width: width,
        height: height,
        fontSize: "16px",
        border: "1px solid " + color,
        borderRadius: "5px",
        background: lighterColor,
        color: color
      }
    }, children);
  }
  if (variant === "outline") {
    return React.createElement("button", {
      className: styles.button,
      onClick: onClick,
      style: {
        width: width,
        height: height,
        fontSize: "16px",
        border: "1px solid " + color,
        borderRadius: "5px",
        background: "white",
        color: color
      }
    }, children);
  }
  if (variant === "filled") {
    return React.createElement("button", {
      className: styles.button,
      onClick: onClick,
      style: {
        width: width,
        height: height,
        fontSize: "16px",
        border: "2px solid " + color,
        borderRadius: "5px",
        background: color,
        color: "#fff"
      }
    }, children);
  }
  return React.createElement("button", {
    className: styles.button,
    onClick: onClick,
    style: {
      width: width,
      height: height,
      fontSize: "16px",
      border: "1px solid rgb(160, 160, 160)",
      borderRadius: "5px",
      background: "white",
      color: "#000"
    }
  }, children);
};

exports.Button = Button;
//# sourceMappingURL=mylib.cjs.development.js.map
