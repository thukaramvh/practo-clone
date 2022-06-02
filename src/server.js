import { Server, Model, RestSerializer } from 'miragejs';
import {
  loginHandler,
  signupHandler,
} from './backend/controllers/AuthController';
import {
  getAllProductsHandler,
  getProductHandler,
} from './backend/controllers/ProductController';
import { users } from './backend/db/users';
import { products } from './backend/db/products';
import { initialUserData } from './backend/utils/authUtils';

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      products: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      users.forEach(item =>
        server.create('user', {
          ...item,
          ...initialUserData,
        })
      );
      products.forEach(item => {
        server.create('product', { ...item });
      });
    },

    routes() {
      this.namespace = 'api';
      // auth routes (public)
      this.post('/auth/signup', signupHandler.bind(this));
      this.post('/auth/login', loginHandler.bind(this));
      this.get('/products', getAllProductsHandler.bind(this));
      this.get('/products/:productId', getProductHandler.bind(this));
    },
  });
  return server;
}
