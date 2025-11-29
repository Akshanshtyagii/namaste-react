/*        
  <div>
  
    <div>
        <h1></h1>
        <h2></h2>

    </div>
  
  </div>
*/      
import React from "react";

import ReactDOM from "react-dom/client";

//react.createElement=>it is an object=>when we render this object on DOM then we get HTML element
//const heading=React.createElement("h1",{id:"heading"},"Hello World from core React");


//react jsx element
const jsxheading=<h1 id ="jsxheading">This is jsx Heading 🚀</h1>;


//react component
const Title =()=>{
  return <h1 className="head"> This is Title Component </h1>
};

const number=1000;


//component composition=>component inside component
const HeadingComponent =()=>{
  return(
    <div id="container">
      {jsxheading}
      <h2>{100+200}</h2>
      {number}
    <Title/>
    <h1>This is a Heading component</h1>
  </div>
  );
  
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);