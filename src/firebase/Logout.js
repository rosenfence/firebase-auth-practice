import { signOut } from 'firebase/auth';
import auth from './Firebase_config';

const Logout = async () => {
  await signOut(auth);
  return;
};

export default Logout;
