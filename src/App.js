import React from "react";
import "./App.css";
import { MyContext } from "./context";

function App() {
  return <Family />;
}

function Family() {
  return <Person />;
}

function Person() {
  return (
    // Create a Consumer
    <MyContext.Consumer>
      {context => {
        const { name, age } = context.teacher;
        return (
          <div>
            <p>Hey, my name is {name}</p>
            <p>I'm {age} years old.</p>
            <button onClick={context.getYearOlder}>+ 1 year</button>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

export default App;
