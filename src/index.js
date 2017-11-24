import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ReactDOM from "react-dom";

console.log("App is running!");

const app = {
  title: "Update the DOM",
  subtitle: "Do you See it? its getting updated",
  options: []
};

const capture = e => {
  e.preventDefault();
  const option = e.target.elements.opt.value;

  if (app.options) {
    app.options.push(option);
    e.target.elements.opt.value = " ";
    renders();
  }
  console.log(option);
};
const clear = e => {
  e.preventDefault();
  app.options = [];
  console.clear();
  renders();
};
const renders = () => {
  const App = (
    <div>
      <h1> {app.title} </h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={capture}>
        <input type="text" name="opt" />
        <button>Update</button>
      </form>
      <button onClick={clear}>Clear-ALL</button>
    </div>
  );

  const root = document.getElementById("root");
  ReactDOM.render(App, root);
};
renders();
