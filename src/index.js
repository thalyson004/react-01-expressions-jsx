import React from "react";
import ReactDOM from "react-dom";

var name = "Thalyson";
var date = new Date();
var year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyrigth {year}.</p>
  </div>,

  document.getElementById("root")
);
