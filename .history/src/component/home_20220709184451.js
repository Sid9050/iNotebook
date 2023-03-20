import React from 'react'
import { Notes } from './Notes'

const Home = () => {

  return (
    <div>
      
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
