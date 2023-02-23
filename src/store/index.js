import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/trainer.slice";
import arraypoke from "./slices/array.slice";

 const store=configureStore({
    reducer:{
        nameTrainer,
        arraypoke
    }
})

export default store