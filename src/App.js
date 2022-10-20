import React from "react";
import { useState } from 'react';
import "./App.css";

function City(props) {

fetch('https://ctp-zip-api.herokuapp.com/')

  return <div>This is the City component</div>;
}

function ZipSearchField(props) {

const [zip, setZip] = useState("");
const handleSubmit = (e) =>{
  e.preventDefault();
  const zipcode ={zip}
  console.log(zipcode)
}

  return <div>
  <form onSubmit= {handleSubmit}>
   <label> Zip Code: 
  <input 
    type="text" 
    value={zip} 
    onChange={(e) => setZip(e.target.value)}>
   </input>
    </label> 
  </form> 

  <p> {zip} </p>
   </div>;
}


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Zip Code Search</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: 400 }}>
        <ZipSearchField />
        <div>
          <City />
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
