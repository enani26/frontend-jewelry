import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you could validate input or make an API call
    navigate('/LandingPage');
  };

  return (
    <StyledWrapper>
      <div className="page-center">
        <div className="container">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <input required type="email" placeholder="Email" />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input required type="password" placeholder="Password" />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot your password?</a>
              </div>
              <button className="btn" type="submit">Login</button>
              <div className="signup-link">
                <Link to="/signup">Sign Up</Link>
              </div>
            </form>
          </div>
          {Array.from({ length: 50 }).map((_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  .page-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }

  .container {
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background: #000;
  }

  .container span {
    position: absolute;
    left: 0;
    width: 32px;
    height: 6px;
    background: #444;
    border-radius: 80px;
    transform-origin: 200px;
    transform: rotate(calc(var(--i) * (360deg / 50)));
    animation: blink 3s linear infinite;
    animation-delay: calc(var(--i) * (3s / 50));
  }

  @keyframes blink {
    0% { background: #b8860b; }
    25% { background: #444; }
  }

  .login-box {
    position: absolute;
    width: 280px;
    height: 280px;
    padding: 30px;
    border-radius: 50%;
    background-color: #000;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  h2 {
    font-size: 1.6em;
    color: #b8860b;
    text-align: center;
    margin-bottom: 15px;
  }

  .input-box {
    position: relative;
    margin: 10px 0;
  }

  input {
    width: 100%;
    height: 45px;
    background: transparent;
    border: 2px solid #b8860b;
    outline: none;
    border-radius: 40px;
    font-size: 1em;
    color: #b8860b;
    padding: 0 15px;
    transition: 0.5s ease;
  }

  input::placeholder {
    color: #b8860b;
    opacity: 0.7;
  }

  input:focus {
    border-color: #b8860b;
  }

  input:valid ~ label,
  input:focus ~ label {
    top: -10px;
    font-size: 0.8em;
    background: #000;
    padding: 0 6px;
    color: #b8860b;
  }

  label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s ease;
    color: #b8860b;
  }

  .forgot-pass {
    margin: 5px 0;
    text-align: center;
  }

  .forgot-pass a {
    font-size: 0.85em;
    color: #b8860b;
    text-decoration: none;
  }

  .btn {
    width: 100%;
    height: 45px;
    background: #b8860b;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1em;
    color: #000;
    font-weight: 600;
    margin-top: 10px;
  }

  .signup-link {
    margin: 10px 0;
    text-align: center;
  }

  .signup-link a {
    font-size: 1em;
    color: #b8860b;
    text-decoration: none;
    font-weight: 600;
  }
`;

export default LoginPage;
