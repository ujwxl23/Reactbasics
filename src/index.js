import React from 'react'; //To add components
import ReactDOM from 'react-dom';
import './index.css'; //Importing index.css


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


//Static website 
// function BookList(){
//   return( //Adding props for dynamic naming and properties (Very imp)
//     <section className='booklist'>
//       <Book authorName='Gopal' /> 
//       <Book/>
//       <Book credits='lifeDipression'/>
//     </section>
//   );
// }

// const para = 'This is a book written by Gaur Gopal Das.'; 
// const author = 'Gaur Gopal Das'

// const Book = (props) =>{
//   return (
//   <article className='book'>
//     <BookImage/>
//     <BookTitle/>
//     <BookAuthor/>
//     <p>{props.authorName}</p>
//     <p>{props.credits}</p>
//     <p>{para}</p> 
//   </article>
//   ); // {variable} -> This must be a return type only and {} is used to enter code in javascript even use js functionality.
//   };

// const BookImage = () => ( 
//   <img src='https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL600_SR600,400_.jpg' alt=''/>
//   );

// const BookTitle = () => (
//   <h1>Energize Your Mind: Learn the Art of Mastering your Mind</h1>
// );

// //JSX css must contain camel font and values must be inside single quotation.
// const BookAuthor =() => (
//   <h4 style={{ color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}> 
//     {author.toUpperCase()}</h4> //style has 2 curly braces {{}} because first one for entering to javascript and the other to create an object 
// )


//Dynamic website(content using props)

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL600_SR600,400_.jpg',
  title: 'Energize Your Mind: Learn the Art of Mastering your Mind',
  BookAuthor: 'Gaur Gopal Das',
  para: 'This is a book written by Gaur Gopal Das.'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Life Amazing Secrets',
  BookAuthor: 'Gaur Gopal Das',
  para: 'This is a book written by Gaur Goapl Das.'
}

function BookList(){
  return( //Adding props for dynamic naming and properties (Very imp)
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} BookAuthor={firstBook.BookAuthor} para={firstBook.para} /> 
      <Book img={secondBook.img} title={secondBook.title} BookAuthor={secondBook.BookAuthor} para={secondBook.para}/>
    </section>
  );
}


const Book = (props) =>{
  return (
  <article className='book'>
    <img src={props.img} alt=''/>
    <h1>{props.title}</h1>
    <h4>{props.authorName}</h4>
    <p>{props.para}</p> 
  </article>
  ); // {variable} -> This must be a return type only and {} is used to enter code in javascript even use js functionality.
  };



ReactDOM.render(<BookList/>,document.getElementById('root')); // Must contain a closing tag.... //Contains two arguments  what to render and the where to render it in html file (div id)
