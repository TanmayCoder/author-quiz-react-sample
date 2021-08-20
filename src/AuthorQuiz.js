import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}
function Book({title}){
  return(<div className="answer">
    <h4>{title}</h4>
  </div>);

}
function Turn({author, books}){
  return (<div className="row turn" style={{backgroundColor:"white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title)=><Book title={title} key={title}/>)}
    </div>
  </div>);
}
function Continue(){
  return <div/>
}
function Footer(){
  return (<div className="row">
    <div className="col-12">
      <p className="text-muted credit">All image are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikipedia Commons </a>and are in public domains</p>
    </div>
  </div>);
}
function AuthorQuiz({turnData}) {
  return <div className="container-fluid">
    <Header/>
    <Turn {...turnData}/>
    <Continue/>
    <Footer/>
  </div>;
}
export default AuthorQuiz;
