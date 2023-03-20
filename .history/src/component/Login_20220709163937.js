import React,{useState} from 'react'

const Login = () => {
    const [credentials, setCredentials] = useState({email:"",password:""})

    const handleSubmit=async (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/api/auth/getuser")
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
          });
          const json= await response.json();
          console.log(json)
    }

    const onClick=(e)
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={email} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={password} id="password"/>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login