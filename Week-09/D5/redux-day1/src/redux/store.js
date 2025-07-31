import { configureStore } from "@reduxjs/toolkit";

import { countReducer } from "./reducers";

const store = configureStore({
    reducer: {
        countReducer
    }
})

export default store