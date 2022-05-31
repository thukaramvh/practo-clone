import axios from 'axios';
import { toast } from 'react-toastify';
const signupUser = async ({ auth, authDispatch }) => {
  const response = await axios({
    method: 'POST',
    url: '/api/auth/signup',
    data: { ...auth },
  });
  toast.success(`Welcome Back ${response.data.createdUser.firstName}`, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  authDispatch({
    type: 'SIGNUP',
    payload: {
      user: response.data.createdUser,
      token: response.data.encodedToken,
    },
  });
};

export { signupUser };
