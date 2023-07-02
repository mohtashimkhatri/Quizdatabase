// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getDatabase, ref, onChildAdded, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAYyCgo8aqb-ffjJbbUs4c4zz4loEeXSA",
  authDomain: "quiz-app-database-a6fee.firebaseapp.com",
  projectId: "quiz-app-database-a6fee",
  storageBucket: "quiz-app-database-a6fee.appspot.com",
  messagingSenderId: "453927013187",
  appId: "1:453927013187:web:5690255b5085e972d6bdf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getDatabase();


function getdataformDatabase() {
  const refrence = ref(db, 'questions/')
  onChildAdded(refrence, function (data) {
    console.log(data.val());
    question.push(data.val());
    renderQuestion()
  })
}
getdataformDatabase();

var question = [
  // {
  //   question: "HTML Stands for ______________",
  //   options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
  //   correctAnswer: "Hypertext Markup Language",
  // },
  // {
  //   question: "CSS Stands for ______________",
  //   options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
  //   correctAnswer: "Cascading Style Sheet",
  // },
  // {
  //   question: "JS Stands for ______________",
  //   options: ["JS", "JS", "JavaScript", "JS"],
  //   correctAnswer: "JavaScript",
  // },
  // {
  //   question: "RAM Stands for ______________",
  //   options: ["RAM", "RAM", "Random Access Memory", "RAM"],
  //   correctAnswer: "Random Access Memory",
  // },
  // {
  //   question: "SQL Stands for ______________",
  //   options: ["SQL", "SQL", "Structured Query Language", "SQL"],
  //   correctAnswer: "Structured Query Language",
  // },
  // {
  //   question: "is HTML is Programming Language?",
  //   options: ["YES", "NO"],
  //   correctAnswer: "NO",
  // },
];

var indexvl = 0;
var Mark = 0;

var QuerentQueetion = document.getElementById('QuerentQueetion');
var totalQueation = document.getElementById('totalQueation');
var displayQueastion = document.getElementById('displayQueastion')
var optionQuestion = document.getElementById('optionQuestion')
window.renderQuestion = function () {
  
  var que = question[indexvl];
  displayQueastion.innerHTML = que.question;
  totalQueation.innerHTML = question.length;
  QuerentQueetion.innerHTML = indexvl + 1;

  optionQuestion.innerHTML = '';
  for (var i = 0; i < que.options.length; i++) {
    optionQuestion.innerHTML += `<div class="col-md-6 mb-3">
    <button class="p-3 text-center bg-danger a text-white  fs-2 w-100" onclick ="checkAns('${que.correctAnswer}','${que.options[i]}')" class="bg-info-subtle w-100 p-3  a">${que.options[i]}</button>
</div>
`;

  }
}

// var fgfdgdfg = 454;
var buttondiv = document.getElementById('buttondiv');
window.renderQuestionqqq = function () {
  if (totalQueation.innerHTML === QuerentQueetion.innerHTML) {
    var button = document.createElement('button');
    var btnVal = document.createTextNode('Submit');
    button.appendChild(btnVal);
    buttondiv.appendChild(button);
    button.setAttribute('class', 'btn  btn-outline-danger px-4 py-2')

    button.setAttribute('onclick', 'result()')
  } else {
    indexvl++;
    renderQuestion();
  }
}

var main = document.getElementById('main');
var mainunder = document.getElementById('mainunder');

window.result = function () {

  main.innerHTML = '';
  var h3 = document.createElement('h3');
  var h3val = document.createTextNode('Your Quiz Is Your Result ' + Mark + ' Mark')
  h3.appendChild(h3val);
  mainunder.appendChild(h3);
  h3.setAttribute('class', 'pera rounded text-white py-3  ')



}

window.checkAns = function (a, b) {
  // console.log(a)
  // console.log(b)
  if (a == b) {
    Mark++;
    // alert('dfsdgdf');
    // alert('jklhjkl');
  }
  // console.log(Mark);
  renderQuestionqqq();
}
// renderQuestion();


