import React from 'react'
import { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7);
    const handleClick = () =>  {
        setRating( (prev) => {
            return prev + 1;
        })

    }
  return (
    <div>
      <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
            This is an Example of Using States in React
        </div>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  )
}

export default FeedbackItem
