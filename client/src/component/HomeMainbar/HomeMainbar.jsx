import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css';
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList';

const HomeMainbar = () => {
  const location = useLocation();
  const user =1;
  const nevigate=useNavigate()  
const questionsList=useSelector((state) => state.questionsReducer)
//console.log(questionsList)

  // var questionsList = [{
  //  _id: 1,
  //   votes: 3,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongo db"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered: 'Kumar',
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // },
  // {
  //   _id: 2,
  //   votes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered: 'Kumar',
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // },
  // {
  //   _id: 3,
  //   votes: 1,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongo db"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody:"Answer",
  //     userAnswered: 'Kumar',
  //     answeredOn: "jan 2",
  //     userId:2,
  //   }]
  // }
  // ]
  
  
  const checkAuth=()=>
  {
    if(user===null)
    {
      alert("login or signup to ask a question")
    nevigate('/Auth')
    }
    else{
      nevigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
             <QuestionList  questionsList={questionsList.data}/>
               
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
