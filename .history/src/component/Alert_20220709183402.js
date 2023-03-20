import React from 'react'

const Alert = (props) => {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+
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