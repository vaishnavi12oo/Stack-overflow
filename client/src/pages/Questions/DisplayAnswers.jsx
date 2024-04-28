import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import QuestionsDetails from './QuestionsDetails'
import Avatar from '../../component/Avatar/Avatar'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswers = ({question, handleShare}) => {
  const User = useSelector((state) => (state.currentUserReducer))
  const {id}=useParams();
  const dispatch=useDispatch()



 const handleDelete =(answerId, noOfAnswers) => {
  dispatch(deleteAnswer( id, answerId, noOfAnswers - 1  ))
 }

  return (
    <div>
    {
      question.answer.map((ans)=>
      (
             <div className='display-ans' key={ans._id}>
              
                <p>{ans.answerBody} </p>
                <div className='question-actions-user'>
                  <div>
                    <button type='button' onClick={handleShare} >Share</button>
                    {
                                   User?.result?._id === ans?.userId && (
                                    <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers )}>Delete</button>
                                  )
                            }
                    </div>
                    <div>
                      <p>answered {moment(ans.answeredOn).fromNow()}</p>
                      <Link to={`/Users/${ans.userId}`} className='user-link' style={{color: '#0086d8'}}>
                          <Avatar backgroundColor="green" px='4px' py='8px' borderRadius='4px'>{ ans.userAnswered?.charAt(0).toUpperCase()}</Avatar>
                          <div>
                          {ans.userAnswered}
                         </div>
                         </Link>
                    </div>
                </div>
             </div>
      ))
    }
    </div>
  )
}

export default DisplayAnswers
