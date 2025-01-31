import { createSlice } from "@reduxjs/toolkit"

const basketSlice=createSlice({
    name:"basket",
    initialState:{items:[]},
    reducers:{
        addToCart: (state,action)  => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if(existingProduct) {
                existingProduct._count += action.payload._count || 1
            } else {
                state.items.push({...action.payload,_count:1})
            }
        },
        removeFromBasket: (state,action) => {
        
          state.items = state.items.filter(item => item.id !== action.payload)
        },
        countUp:(state,action) => {
         state.items.find((item) => item.id === action.payload)._count++

        },
        countDown:(state,action) => {
        
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (itemIndex !== -1) {
              if (state.items[itemIndex]._count > 1) {
                state.items[itemIndex]._count--;
              } else {
                state.items.splice(itemIndex, 1);
              }
            }

        },
        
    }

})
export const selectTotalPrices = (state, id) => {
  const foundItem = state.basket.items.find((item) => item.id === id)
  return foundItem ? foundItem._count * foundItem.price : 0
}

export const {addToCart,removeFromBasket,countDown,countUp,totalPrice} = basketSlice.actions  
export const basketReducer=basketSlice.reducer