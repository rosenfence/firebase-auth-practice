import { Login, Signup, Logout, auth } from './firebase/Index';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <div className='Signup'>
        <h1>Signup</h1>
        <input
          placeholder='Email'
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder='Password'
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={() => Signup(registerEmail, registerPassword)}>Sign Up</button>
      </div>
      <div className='Login'>
        <h1>Login</h1>
        <input
          placeholder='Email'
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder='Password'
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button onClick={() => Login(loginEmail, loginPassword)}>Log in</button>
        <h1>Now Log in User</h1>
        <div>{user?.email}</div>
        <button onClick={() => Logout()}>Log out</button>
      </div>
    </div>
  );
};

export default App;
