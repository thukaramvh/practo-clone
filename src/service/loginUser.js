import axios from 'axios';
const loginUser = async ({ auth, authDispatch }) => {
  const response = await axios({
    method: 'POST',
    url: '/api/auth/login',
    data: { ...auth },
  });
  console.log(response);
  authDispatch({
    type: 'LOGIN',
    payload: {
      user: response.data.foundUser,
      token: response.data.encodedToken,
    },
  });
};

export { loginUser };
