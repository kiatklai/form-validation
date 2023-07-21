import './FormComponent.css'
import {useState} from 'react'

const FormComponent =()=>{
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repassword,setRepassword] = useState('')

  const [errorUserName,setErrorUserName] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('Password must more than 8 characters')
  const [errorRePassword,setErrorRePassword] = useState('Comfirmation Password is not match password')

  const [userNameColor,setUserNameColor] = useState('')
  const [emailColor,setEmailColor] = useState('')

  const validateForm = (e) =>{
    e.preventDefault()
    if(userName.length>6){
      setErrorUserName('')
      setUserNameColor('green')
    }else{
      setErrorUserName('Please insert more than 6 characters')
      setUserNameColor('red')
    }
    if(email.includes("@")){
      setErrorEmail('')
      setEmailColor('green')
    }else{
      setErrorEmail('Email is incorrect')
      setEmailColor('red')
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Registration Form</h2>
        <div className="form-control">
          <label>Name</label>
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
          <small style={{color:userNameColor}}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
          <small style={{color:emailColor}}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirmation Password</label>
          <input type="password" value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
          <small>{errorRePassword}</small>
        </div>
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default FormComponent