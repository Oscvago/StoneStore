import { ALL_VENTAS_REQUEST, 
    ALL_VENTAS_SUCCESS, 
    ALL_VENTAS_FAIL,
    CLEAR_ERRORS} from "../constants/ventasConstants";
  
    //Status of all ventas --> Reducer
  export const ventaReducer = (state = { ventas: [] }, action) => {
    switch (action.type) {
      case ALL_VENTAS_REQUEST:
        return {
          loading: true,
          ventas: []
        };
  
      case ALL_VENTAS_SUCCESS:
        return {
          loading: false,
          ventas: action.payload.ventas,
          quantity: action.payload.quantity
        };
  
      case ALL_VENTAS_FAIL:
        return {
          loading: false,
          error: action.payload
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        }
  
      default:
        return state;
    }
  }