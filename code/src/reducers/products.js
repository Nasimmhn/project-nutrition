import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"


import jsondata from './jsondata.json' // for testing

export const products = createSlice({
  name: "products",
  initialState: jsondata, // for testing

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  }
})


export const fetchProduct = (barcode) => {
  
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        dispatch(products.actions.setProducts(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}


