import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar/>
        <Alert message="Appp"/>
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<About/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;