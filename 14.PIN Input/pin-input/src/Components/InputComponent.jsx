import React, {  useState } from "react";

const InputComponent = React.forwardRef(
  ({ handleLetter, ind, handleFocus, flag }, ref) => {
    const [changeColor, setChangeColor] = useState(false);
    const handleKeyUp = (e) => {
      handleFocus(ind, e.keyCode);
      handleLetter(e.target.value, ind);
    };
    const handleInputRef = (e) => {
      ref(e, ind);
    };

      if (flag) {
        setInterval(() => {
          setChangeColor(true);
        }, 1000);
      }
  
    return (
      <div>
        <input
          type="text"
          style={{
            x:50,
            width: 15,
            margin: 3,
            padding: 3,
            fontSize: 20,
            paddingLeft: 10,
            caretColor: "transparent",
            color: changeColor ? "green" : "black",
          }}
          ref={handleInputRef}
          maxLength={1}
          onKeyUp={handleKeyUp}
        />
      </div>
    );
  }
);

export default InputComponent;
