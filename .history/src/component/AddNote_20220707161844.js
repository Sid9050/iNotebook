import React,{useState} from 'react'

const AddNote = () => {
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handelClick=()=>{}
    const onChange=()=>{}
  return (
    <div className='container my-3'>
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="email" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="descriotion" className="form-label">Description</label>
          <input type="text" className="form-control" id="descriotion" name="descriotionc" onChange={onChange}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handelClick}>Submit</button>
      </form>
      </div>
  )
}

export default AddNote