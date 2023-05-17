import { TextField } from "@mui/material";
import "./App.css";
import Items from "./components/Items.js";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (event) => {
    setInputText(event.target.value.toLowerCase());
  };
  return (
    <div className="App">
      <div className="Title">
        <h1>Monster friends</h1>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
        ></TextField>
      </div>
      <div className="Cards">
        <Items input={inputText}></Items>
      </div>
    </div>
  );
}

export default App;
