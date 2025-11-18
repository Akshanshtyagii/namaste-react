/*        
  <div>
  
    <div>
        <h1></h1>
        <h2></h2>

    </div>
  
  </div>
*/      

const parent =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"i am in h1 tag")));
        
        const heading2=React.createElement("h1",{},"Hello from my side in react");

        const root=ReactDOM.createRoot(document.getElementById("root"));
        console.log(parent);

        root.render(parent);