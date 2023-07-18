import './FormComponent.css'

const FormComponent =()=>{
  return (
    <div className="container">
      <form className="form">
        <h2>Registration Form</h2>
        <div className="form-control">
          <label>Name</label>
          <input type="text"/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email"/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password"/>
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Confirmation Password</label>
          <input type="password"/>
          <small>error message</small>
        </div>
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default FormComponent