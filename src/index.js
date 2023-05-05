import React from 'react'; //To add components
import ReactDOM from 'react-dom';


//JSX Rules
//Return single element 
//div/section/article or fragment  (do not only use div)
//use camelCase for html attributes
//className instrad of class 
//close every element 
//formatting

//METHOD-1
// function Greeting(){ //first letter must be capital to tell react that it is a component and not a simple function
//   return (
//   <div>
//     <h4>This is React Project</h4>
//     <p>By Ujwal Kumar</p>
//   </div>
//   ); //return part html and css part called jsx
// }

//METHOD-2
function Greeting(){ 
  return (
  <div>
    <Person /> 
    <Message />
  </div>
  ); //Here, we are calling the components made in const.
}
const Person = () => <h4>This is React Project</h4>; //Value in const 
const Message = () => {
  return <p>By Ujwal Kumar</p>;
};


//METHOD-3
// const Greeting = () => { // Using arrow function 
//   return React.createElement('div',{},React.createElement('h1',{},"hello world")); //Same as above html return function 
// }

ReactDOM.render(<Greeting/>,document.getElementById('root')); // Must contain a closing tag.... //Contains two arguments  what to render and the where to render it in html file (div id)
