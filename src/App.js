import { auth, Signup } from './firebase/Index';
import React, { useState } from 'react';
import { signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const App = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginUserData, setLoginUserData] = useState('');

  const [userData, setUserData] = useState(null);

  const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setLoginUserData(data.user.email);
        console.log(loginUserData);
        console.log('logged in');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const Logout = async () => {
    await signOut(auth).then(() => {
      setLoginUserData('');
      console.log(auth);
      console.log('logged out');
    });
  };

  const GoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    await signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        // console.log(data); // console로 들어온 데이터 표시
        console.log(auth);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='signup'>
        <h1>Sign Up</h1>
        <input placeholder='Email' onChange={(e) => setSignupEmail(e.target.value)} />
        <input placeholder='Password' type='password' onChange={(e) => setSignupPassword(e.target.value)} />
        <button
          onClick={() => {
            Signup(signupEmail, signupPassword);
          }}
        >
          Sign Up
        </button>
      </div>
      <div className='login'>
        <h1>Login</h1>
        <input placeholder='Email' onChange={(e) => setLoginEmail(e.target.value)} />
        <input placeholder='Password' type='password' onChange={(e) => setLoginPassword(e.target.value)} />
        <button
          onClick={() => {
            Login(loginEmail, loginPassword);
          }}
        >
          Login
        </button>
      </div>
      <div className='logout'>
        <h1>User Info</h1>
        <div>
          {loginUserData ? `${loginUserData}` : null}
          {userData ? userData.displayName : null}
        </div>
        <button
          onClick={() => {
            Logout();
          }}
        >
          Logout
        </button>
      </div>
      <div className='google-login'>
        <h1>Google AOuth</h1>
        <button
          onClick={() => {
            GoogleLogin();
          }}
        >
          Google Login
        </button>
      </div>
    </div>
  );
};

export default App;
