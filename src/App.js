import React from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import Global from './components/global'


function App() {
  return (
    <div className='container'>
     <Header />
     <FeedbackItem props={Global}/>
    </div>
  )
}

export default App
