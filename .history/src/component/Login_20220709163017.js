import React from 'react'

const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/api/auth/getuser")
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWNhZmFhMzU2MjZkZTYyZTkxY2VhIn0sImlhdCI6MTY1NjE1NDgzN30.7WYGeHoNmX5BVhuHHlqskYQiPj7PL5JLV6NMGVhKVXY'
            },
          });
          const json= await response.json();
          setNotes(json)
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name='password' id="password"/>
                </div>
                <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login