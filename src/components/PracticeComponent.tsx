import { ReactHTMLElement } from "react";
import React from "react";

const ChildComponent = React.forwardRef((props:any, ref:any) => {
  const handleClick = () => {
    // Trigger an event in the child component
    props.onClick();
  };
  
  return (
    <div ref={ref}>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
});

const PracticeComponent = () => {
  const childRef = React.useRef<any>(null);

  const handleClick = () => {
    // Trigger the child component's onClick function
    if (childRef.current) {
      // Simulate a button click within the child component
      const buttonElement = childRef.current.querySelector('button');
      if (buttonElement) {
        buttonElement.click();
      }
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} onClick={() => alert("Child component clicked!")} />
      <button onClick={handleClick}>Click child component</button>
    </div>
  );
};

export default PracticeComponent