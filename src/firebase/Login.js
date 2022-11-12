import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase_config';

const Login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(user);
    });
  } catch (error) {
    return error.message.replace('Firebase: Error ', '');
  }
};

export default Login;
