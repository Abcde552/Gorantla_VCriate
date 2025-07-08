import { configureStore } from "@reduxjs/toolkit";
import  reducer  from "./reducer";
import Newcomment from "./Newcomment";
import Newsub from "./Newsub";

export const store = configureStore({
  reducer: {
    counter:reducer,
    newsubs:Newsub,
    newcomment:Newcomment
},
});

