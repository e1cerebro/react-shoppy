import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_PRODUCT,
  FIND_ORDER,
  EDIT_PRODUCT,
  PROCESS_ORDER,
  DELETE_PRODUCT
} from "../reducer/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case PROCESS_ORDER:
      return { ...state, orders: [...state.orders, action.payload], cart: [] };
    case FETCH_PRODUCT:
      return {
        ...state,
        singleProduct: state.products.filter(item => item.id == 2)
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload.id) {
            item.id = action.payload.id;
            item.name = action.payload.name;
            item.regularPrice = action.payload.regularPrice;
            item.salesPrice = action.payload.salesPrice;
            item.shortdescription = action.payload.shortdescription;
            item.maindescription = action.payload.maindescription;
          }
          return item;
        })
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload),
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case FIND_ORDER:
      return "hello";
    default:
      return state;
  }
};
