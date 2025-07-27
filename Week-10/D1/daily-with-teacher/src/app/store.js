import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "../redux/reducers";


const AppReducer = combineReducers({
    tasksReducer,
})
const store = configureStore({
   reducer: AppReducer,
})

export default store;