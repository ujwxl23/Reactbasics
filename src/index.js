import React from 'react'; //To add components
import ReactDOM from 'react-dom';
import './index.css';


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
// function Greeting(){ 
//   return (
//   <div>
//     <Person/>
//     <Message/>
//   </div>
//   ); //Here, we are calling the components made in const.
// }
// const Person = () => <h4>This is React Project</h4>; //Value in const 
// const Message = () => {
//   return <p>By Ujwal Kumar</p>;
// };


//METHOD-3
// const Greeting = () => { // Using arrow function 
//   return React.createElement('div',{},React.createElement('h1',{},"hello world")); //Same as above html return function 
// }


function BookList(){
  return(
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () =>{
  return (
  <article className='book'>
    <BookImage/>
    <BookTitle/>
    <BookAuthor/>
  </article>
  );
  };

const BookImage = () => ( 
  <img src='https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL600_SR600,400_.jpg' alt=''/>
  );

const BookTitle = () => (
  <h1>Energize Your Mind: Learn the Art of Mastering your Mind</h1>
);

const BookAuthor =() => (
  <h4>Gaur Gopal Das</h4>
)


ReactDOM.render(<BookList/>,document.getElementById('root')); // Must contain a closing tag.... //Contains two arguments  what to render and the where to render it in html file (div id)
