import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/useContacts"
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { RootState } from "../store";

// Type checking login components 
function loginRedux(email: string, password: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction > {
    return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction >): Promise<void> => {
      try {
        dispatch({
          type: USER_LOGIN_SUCCESS
        });
        // Fetch data from Backend(userInfo)
        const response = await fetch('http://localhost/3001', {
          method: "POST",
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify({
            credentials: "include",
            email,
            password
          })
        })

        const data = await response.json();
        const userData = { firstName: data.first_name, lastName: data.last_name }
        
        //Pass the data to the reducer in the payload of the dispatch
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: userData,
        })

        // Create local storage for login 
        localStorage.setItem("userInfo", JSON.stringify(userData))

      } catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
      }
    };
}
  
export default loginRedux;

export const logout = (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async(
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
): Promise<void> => {
  dispatch({
    type: USER_LOGOUT,
  })
  // Remove local storage 
  localStorage.removeItem("userInfo");

  await fetch("http://localhost:3001/logout", {
    headers: { "Content-Type": "applcation/json" },
    credentials: "include",
  })
}