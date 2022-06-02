import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios({ method: 'GET', url: '/api/products' });
      console.log(response);
      setProduct(response.data.products);
    }
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
