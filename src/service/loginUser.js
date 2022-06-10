import axios from 'axios';
import { toast } from 'react-toastify';
const loginUser = async ({ auth, authDispatch, navigate }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/auth/login',
      data: { ...auth },
    });
    toast.success(`Welcome Back ${response.data.foundUser.firstName}`, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    authDispatch({
      type: 'LOGIN',
      payload: {
        user: response.data.foundUser,
        token: response.data.encodedToken,
      },
    });
    navigate('/');
  } catch (e) {
    toast.error(`Some Error occured`, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export { loginUser };
