import './register.css'
import { Room, Close } from '@material-ui/icons'
import { useRef } from 'react';
import axios from 'axios';

export default function Register({setShowRegister}) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    };
    try {
      await axios.post('http://localhost:3001/routes/users/register', newUser)
      setShowRegister(false);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='registerContainer'>
      <div className='logo'>
        Movie Mapper
        <Room />
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' ref={nameRef}/>
        <input type='email' placeholder='email' ref={emailRef}/>
        <input type='password' placeholder='password' ref={passRef}/>
        <button className='registerButton'>Register</button>
      </form>
      <Close className='registerClose' onClick={()=>setShowRegister(false)}/>
    </div>
  )
}