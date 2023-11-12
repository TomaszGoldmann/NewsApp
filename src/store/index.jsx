import { createStore } from 'redux';
import rootReducer from "src/reducers/index.jsx";

const store = createStore(rootReducer());

export default store;
