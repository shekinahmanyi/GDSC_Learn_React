import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'

function App() {
const [feedback,setFeedback] = useState(FeedbackData)
  return (
    <>
    <Header />
    <div className='container'>
        
        <FeedbackForm/>
     <FeedbackList feedback= {feedback}/>
    </div>
    </>
  )
}

export default App
