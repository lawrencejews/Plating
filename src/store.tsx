import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducer';

const reducers = combineReducers({
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")!) : undefined

const initialState = {
  userLogin: {userInfo: userInfoFromStorage},
// eslint-disable-next-line @typescript-eslint/ban-types
} as {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
export type RootState = ReturnType<typeof store.getState>