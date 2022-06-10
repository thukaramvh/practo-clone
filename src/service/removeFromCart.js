import axios from 'axios';

const removeFromCart = async () => {
  const response = await axios({
    method: 'DELETE',
    url: `/api/user/cart/${id}`,
  });
};
