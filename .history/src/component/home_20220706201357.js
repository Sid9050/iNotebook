import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'
import { Notes } from './Notes'

const Home = () => {

  return (
    <div>
      
      <Notes/>
    </div>
  )
}

export default Home
