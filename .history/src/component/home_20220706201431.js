import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'
import AddNote from './AddNote'
import { Notes } from './Notes'

const Home = () => {

  return (
    <div>
      <AddNote/>
      <Notes/>
    </div>
  )
}

export default Home
