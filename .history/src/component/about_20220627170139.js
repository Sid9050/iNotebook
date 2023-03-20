import React,{useContext} from 'react'
import NoteContext from '../context/noteContext'

const About = () => {
  const a=useContext(NoteContext)
  return (
    <div>
      this is About {a.name}
    </div>
  )
}

export default About
