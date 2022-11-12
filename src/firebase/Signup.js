import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase_config';

const Signup = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then((event) => {});
  } catch (error) {
    return error.message.replace('Firebase: Error ', '');
  }
};

export default Signup;
