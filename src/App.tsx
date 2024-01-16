import { useState } from "react";
import ChipContainer from "./ui/chipContainer";
import { IOptionInterface } from "./types/common";

import { options } from "./constants";
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<IOptionInterface[]>(
    []
  );
  const handleButtonClick = () => {
    if(selectedOptions.length > 0){
      alert("Opps! you are not allowed to use Zepto pro. please reach out to gauravtewari111@gmail.com ;)")
    }else {
      alert(
        "Sharing is caring. please share this link with your friends to get access to Zepto Pro. "
      )
    }
  }

  return (
    <>
    <div className="header"> Zepto Pro  </div>
    <div className="container">
      <div className="card">
        Hi 👋, <br/>
        you are invited to a cool demo of Zepto Pro. <br/>
        now delivering the best experience. 
        plus groceries. <br/>
        sorry <br/>
        groceries,fruits,vegetables, personal care, electronics & much more to you in just secs. <br/>
        yes, you heard it right. <br/>
        <br/>
        get all you need delivered right to your doorstep. <br/>
        faster then ever. <br/>
        invite all your friends now :)
      <ChipContainer
        width="100%"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <button className="invite" onClick={handleButtonClick}> Invite </button>
      </div>
    </div>
    </>
  );
}

export default App;
