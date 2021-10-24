import './App.css';
import  {useState} from 'react'

function App() {
  const [password, showPassword] = useState('password')

  const handleClick = () =>{
    let type = password=== 'text'?'password': 'text'
    showPassword(type)
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
              <img src='/undraw_Data_trend_red.svg' alt='' className="description-image"/>
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
                    <input type={password} placeholder="password" className="password"/>
                    <div className= 'show-password' onClick={handleClick}>
                      <i class="far fa-eye"></i>
                    </div>
                  </div>
                  <input type="submit" value="sign in"/>
                  
                </form>
                <div className="other-links">
                  <a href="#" className="primary-link">forgot your password?</a>
                  <a href="#" className="secondary-link">contact</a>
                </div>
              </div>
            </div>
            <div className="footer">
              <p>&copy; {new Date().getFullYear()} NeyX. All Rights Reserved</p>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}

export default App;
