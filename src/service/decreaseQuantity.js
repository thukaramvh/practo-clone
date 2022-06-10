import axios from 'axios';

const decreaseQuantity = async (_id, token, cartDispatch) => {
  const response = await axios({
    method: 'POST',
    url: `/api/user/cart/${_id}`,
    data: { action: { type: 'decrement' } },
    headers: { authorization: token },
  });
  console.log(response);
  cartDispatch({ type: 'DEC_ITEM', payload: response.data.cart });
};

export { decreaseQuantity };
