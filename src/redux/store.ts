import { combineReducers, configureStore } from "@reduxjs/toolkit";
import beersReducer from "./beers/beers.slice";
import beersFiveReducer from "./beersFive/beersFive.slice";


const rootReducer = combineReducers({
    beersReducer,
    beersFiveReducer
})

export const setupStore = () => configureStore ({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']