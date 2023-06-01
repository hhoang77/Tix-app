import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer as carousel } from "./reducers/CarouselReducer";
const rootReducer = combineReducers({
  CarouselReducer: carousel,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
