import './FormComponent.css'
import {useState} from 'react'

const FormComponent =()=>{
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repassword,setRepassword] = useState('')
  return (
    <div className="container">
      <form className="form">
        <h2>Registration Form</h2>
        <div className="form-control">
          <label>Name</label>
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Confirmation Password</label>
          <input type="password" value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
          <small>error message</small>
        </div>
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default FormComponent