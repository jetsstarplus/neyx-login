import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../App.css';


const Login = () => {
    const [password, showPassword] = useState(
      {
        type: 'password',
        icon: 'fa-eye',
        isOpen: true
      })

  const handleClick = () =>{
    let icon = 'fa-eye-slash';
    let type = 'text'
    let openState = password.isOpen=== false?true: false
    // console.log(password)
    if (openState === true){
      icon = 'fa-eye'
      type='password'
    }
    showPassword({type:type, icon:icon, isOpen:openState})
  }
    return (
        <>
        <div className="container">
          <div className="login-box">
            <div className="left-box">
              <div className="logo-container">
                <img src='/logo.svg' alt='logo' className="logo"/>
              </div>
              <div className="description-image-box">
                <img src='/images/undraw_Data_trend_red.svg' alt='' className="description-image"/>
              </div>
            </div>
            <div className="right-box">
              <div className="login-container">
                <div>
                  <div className="login-text">
                    <h1 className="login-header">Sign In</h1>
                    <p className="primary-text">please signin with the credentials provided to you</p>
                  </div>
                  <form className="login-box-form">
                    <input type="text" placeholder="customer id" />
                    <div className="password-box">
                      <input type={password.type} placeholder="password" className="password"/>
                      <div className= 'show-password' onClick={handleClick}>
                        <i class={`far ${password.icon}`}></i>
                      </div>
                    </div>
                    <button type="submit">sign in</button>
                    
                  </form>
                  <div className="other-links">
                    <Link to="/" className="primary-link">forgot your password?</Link>
                    <Link to="/" className="secondary-link">contact</Link>
                  </div>
                </div>
              </div>
              <div className="simple-footer">
                <p>&copy; {new Date().getFullYear()} NeyX. All Rights Reserved</p>
              </div>
            </div>
          </div>        
        </div>
      </>
    )
}

export default Login
