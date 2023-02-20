import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/trainer.slice";

 const store=configureStore({
    reducer:{
        nameTrainer
    }
})

export default store