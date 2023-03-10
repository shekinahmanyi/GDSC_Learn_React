import React from 'react'
function Header({text,bgColor,textColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <div>
    <header style={headerStyles}>
        <h2>{text}</h2>
    </header>
    </div>
  )
}

Header.defaultProps = {
    text: 'Feedback-UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#0f9d58',
  }

export default Header
