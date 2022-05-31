import { v4 as uuid } from 'uuid';
import bcyrpt from 'bcryptjs';

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    email: 'adarshbalika@gmail.com',
    password: bcyrpt.hashSync('adarshBalika123', 5),
  },
];
