import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
     <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for my product and services if You Like them</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
        <p>        
        </p>
     </div>
    </Card>
  )
}

export default AboutPage
