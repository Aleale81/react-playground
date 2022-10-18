import { useState } from "react";

export default function Header() {
    const [counter, setCounter] = useState(0);
    //let classString = condition ? expresssionIfTrue : expresssionIfFalse;
    let nameOfClass = counter>=10 ? "highlighted" : "";

    const inlineStyle = {
      color: "purple",
      marginBottom: "2rem"
  }

    const increaseCounter = () => {
      setCounter((prevCounter) => {
        const newValue = prevCounter + 1;
        return newValue;
      }) 
    }
    const decreaseCounter = () => {
      if(counter > 0){
        setCounter((prevCounter) => {
          const newValue = prevCounter - 1;
          return newValue;
        })
      }
    }


  return (
    <header style={inlineStyle} className={nameOfClass}>
      <h1>This is the header</h1>
      <h2>Number of time the user has clicked: {counter}</h2>
      <button onClick={increaseCounter} >Increase Counter</button>
      <button onClick={decreaseCounter} >Decrease Counter</button>
    </header>
  );
}
