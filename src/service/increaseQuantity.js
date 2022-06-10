import axios from 'axios';

const increaseQuantity = async (_id, token, cartDispatch) => {
  const response = await axios({
    method: 'POST',
    url: `/api/user/cart/${_id}`,
    headers: { authorization: token },
    data: {
      action: {
        type: 'increment',
      },
    },
  });
  console.log(response);
  cartDispatch({ type: 'INC_ITEM', payload: response.data.cart });
};

export { increaseQuantity };
