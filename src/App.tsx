import { useState } from "react";
import ChipContainer from "./ui/chipContainer";
import { IOptionInterface } from "./types/common";

import { options } from "./constants";
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<IOptionInterface[]>(
    []
  );

  return (
    <div className="container">
      <div className="info">
        <ul>
          <li>Click on Input to start typing </li>
          <li>Click on a suggestion or press enter </li>
          <li>press Backspace 2 time to remove last selected element </li>
          <li>
            {" "}
            use arrow keys to navigate left(⬅️) right(➡️) to highlighted text
          </li>
          <li>
            {" "}
            use arrow keys to navigate up(⬆️) down(⬇️) in autocomplete options
          </li>

          {/* <li>press Ecs to remove a selected element </li> */}
        </ul>
      </div>
      <ChipContainer
        width="70%"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </div>
  );
}

export default App;
