import { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();
const filterReducer = (state, { payload, type }) => {
  switch (type) {
    case 'HIGH_TO_LOW':
      return { ...state, sortBy: 'HIGH_TO_LOW' };
    case 'LOW_TO_HIGH':
      return { ...state, sortBy: 'LOW_TO_HIGH' };
  }
};
const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    price: 20000,
    sortBy: null,
    jersey: false,
    boots: false,
    sneakers: false,
    football: false,
    rating: null,
    outOfStock: false,
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
