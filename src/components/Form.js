import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="Form">
      <h1>Form Page</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;