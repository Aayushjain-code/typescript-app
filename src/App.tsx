import React from 'react';
import './App.css';


let name: string;
let age: number|string;
let isStudent: any;
let hobbies: string[];
let role: [number, string];



// isStudent="ds"
// role=[5,5];
// role=[5,"aayush"];

type Person={
  name:string;
  age?:number;
}

let person:Person={
  name:"Aayush",
  age:56
}

age="dsds"

function printName(name:string){
  console.log(name)
}
printName("Hello")
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
