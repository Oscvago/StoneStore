import axios from "axios";

import {
  ALL_VENTAS_REQUEST,
  ALL_VENTAS_SUCCESS,
  ALL_VENTAS_FAIL,
  CLEAR_ERRORS
} from '../constants/ventasConstants';

export const getVentas = async () => {
  const response = await axios.get("api/ventas")
  const data = await response.data.ventas
  return data
}

export const getVentasAx = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_VENTAS_REQUEST })

    const { data } = await axios.get("api/ventas")

    dispatch({
      type: ALL_VENTAS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ALL_VENTAS_FAIL,
      payload: error.response.data.message
    })
  }
}

// Clear error in dispatch

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}