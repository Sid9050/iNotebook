import React from 'react'

const Alert = (props) => {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt
  }
  return (
    <div>
        <div className="alert alert-primary" role="alert">
            {props.message}
        </div>
    </div>
  )
}

export default Alert