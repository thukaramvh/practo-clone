import axios from 'axios';

async function addToCart({ product, token, cartDispatch }) {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/user/cart',
      headers: { authorization: token },
      data: { product },
    });
    cartDispatch({ type: 'ADD_TO_CART', payload: response.data.cart });
  } catch (err) {
    toast.error(`Please Login to access this feature`, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export { addToCart };
