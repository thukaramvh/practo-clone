import { createContext, useContext, useReducer } from 'react';
const authReducer = (state, { payload, type }) => {
  console.log(payload);
  switch (type) {
    case 'LOGIN':
      return { ...state, user: payload.user, token: payload.token };
    default:
      return new Error('Error in auth reducer');
  }
};
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
