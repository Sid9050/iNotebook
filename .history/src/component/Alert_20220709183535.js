import React from 'react'

const Alert = (props) => {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div style={{height:"50px"}}>
        {props.alert && <div className={``}}
    </div>
  )
}

export default Alert