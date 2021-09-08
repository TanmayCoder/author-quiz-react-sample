import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import { shuffle, sample } from 'underscore';
const authors = [
  {
    name: 'Mark Twain',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/marktwain.jpg',
    imageSource: 'Wikipedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life On Missisipi',
      'Roughing It'
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/josephconrad.png',
    imageSource: 'Wikipedia Commons',
    books: ['Heart of Darknes']
  },
  {
    name: 'J. K. Rowling',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/jkrowling.jpg',
    imageSource: 'Wikipedia Commons',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/stephenking.jpg',
    imageSource: 'Wikipedia Commons',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Carles Dickens',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/charlesdickens.jpg',
    imageSource: 'Wikipedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl:
      'https://raw.githubusercontent.com/TanmayCoder/author-quiz-react-sample/master/public/images/shakespeare.jpg',
    imageSource: 'Wikipedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];
function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).splice(0, 4);
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
}

const state = {
  turnData: getTurnData(authors)
};
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
