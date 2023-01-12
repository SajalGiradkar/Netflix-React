import React, { useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');


  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    if (email == '') {
      event.preventDefault();
      setEmailError('Please enter valid email.')
    } if (pass == '') {
      event.preventDefault();
      setPassError('Please enter valid pass.')
    } if (email != '' && pass != '') {
      navigate('/');
    }
  };
  return (
    <>
      <Container>
        <div className="main-section">
          <div className="signin-div">
            <div className="sign-in-form">
              <h2>Sign In</h2>
              <form onSubmit={(e) => handleSubmit(e)} >
                <input onChange={(e) => setEmail(e.target.value)} className='input-box' type="email" placeholder='Email or Phone number' /> <br />
                <span className='errorMsg'>{emailError}</span>
                <input onChange={(e) => setPass(e.target.value)} className='input-box' type="password" placeholder='Password' /> <br />
                <span className='errorMsg'>{passError}</span>
                <input className='submit' type="submit" value='Sign In' /> <br />
                <span className='checkbox'>
                  <input type="checkbox" id='checked' checked={isChecked} onChange={handleOnChange} /> <label htmlFor="checked"> Remember me</label> <span>Need Help?</span>
                </span>
              </form>

              <span className='sign-up'><strong>New to Netflix?</strong> <Link to='/sign-up'>Sign Up Now</Link></span> <br />
              <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span> </small>
            </div>
          </div>
        </div >
        <Footer />
      </Container>
    </>
  )
}
const Container = styled.div`
background-color: black;
    .main-section{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .signin-div{
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    display: flex;
    width: 32%;
    min-height: 60rem;
    align-items: center;
    justify-content: center;
    padding: 10rem 5rem;
    }
    .sign-in-form{
      align-self: stretch;
      padding: 1rem;
    }
    .sign-in-form .input-box{
      width: 100%;
      padding: 1.7rem;
      margin: 1rem 0;
      border-radius: 4px;
      outline: none;
      border: none;
      background: #333;
      font-size: 1.6rem;
      color: white;
    }
    .sign-in-form h2{
        font-size: 4rem;
        font-weight: 600;
        color: white;
        margin-bottom: 1.5rem;
    }
    .submit{
      padding: 1.5rem;
      font-size: 1.7rem;
      color: white;
      background-color: #f40612;
      width: 100%;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      margin-top: 2.5rem;
      &:hover{
          background-color: #f40612eb;
      }
    }
    .checkbox{
      display: inline-block;
      color: #b3b3b3;
      font-size: 1.4rem;
      padding: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
      gap: .5rem;
      margin-bottom: 2.5rem;
    }
    .checkbox span{
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    .checkbox label{
      margin-right:10rem;
    }
      
    .sign-up{
      font-size: 1.7rem;
      color: #333;
      margin-bottom: 2.5rem;
      color: #b3b3b3;
      font-weight: 500;
    }
    .sign-up a{
      &:hover{
        text-decoration: underline;
      }
    }
    small{
      display: inline-block;
      width: 100%;
      color: #333;
      padding:1rem;
      margin-top: 1.5rem;
      font-size: 1.3rem;
      color: #b3b3b3;
    }
    small>span{
      color: blue;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    @media only screen and (max-width:1100px){
      .signin-div{
        width: 100%;
      }
    }
    .errorMsg{
      font-size: 1.4rem;
      color: yellow;
    }
`;
export default SignIn