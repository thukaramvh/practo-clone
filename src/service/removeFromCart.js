import axios from 'axios';

const removeFromCart = async (_id, token, cartDispatch) => {
  const response = await axios({
    method: 'DELETE',
    url: `/api/user/cart/${_id}`,
    headers: { authorization: token },
  });
  console.log(response);
  cartDispatch({ type: 'REMOVE_FROM_CART', payload: response.data.cart });
};
export { removeFromCart };
