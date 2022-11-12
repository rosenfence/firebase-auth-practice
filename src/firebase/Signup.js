import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase_config';

const Signup = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

export default Signup;
