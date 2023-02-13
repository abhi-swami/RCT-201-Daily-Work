import {  useRef, useState } from "react";
import InputComponent from "./InputComponent";

const InputBoxes = ({ numberOfBoxes, handleOtp }) => {
  const [inputArr, setInputArr] = useState(new Array(numberOfBoxes).fill(""));
  const elemsRef = useRef(new Array(numberOfBoxes).fill(""));
  const [flag,setFlag]=useState(false)
  const h = [...inputArr];


  const handleFocus = (ind, key) => {
    if (key === 8) {
      setFlag(false)
      if (ind === 0) {
        elemsRef.current[ind].focus();
      } else {
        if (ind > 0) {
          elemsRef.current[ind - 1].focus();
        }
      }
    } else {
      if (ind < numberOfBoxes - 1) {
        elemsRef.current[ind + 1].focus();
      }
      if (ind === numberOfBoxes - 1) {
        elemsRef.current[ind].focus();
        setFlag(true)
      }
    }
  };
  const handleLetter = (val, ind) => {
    h[ind] = val;
    setInputArr(h);
    handleOtp(h)
  };
  const handleRef = (elem, ind) => {
    elemsRef.current[ind] = elem;
  };
  const handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData.getData("Text");
    data = data.trim().split('').splice(0, numberOfBoxes);
    handleOtp(data)
    data.forEach((el, ind) => {
      elemsRef.current[ind].value = el;
      handleFocus(ind)
    });
  };
  

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPaste={handlePaste}
    >
      {inputArr.map((el, i) => (
        <InputComponent
          key={i}
          ind={i}
          flag={flag}
          ref={handleRef}
          handleFocus={handleFocus}
          handleLetter={handleLetter}
        />
      ))}
    </div>
  );
};

export default InputBoxes;
