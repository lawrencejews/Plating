// import { SearchParams } from "../components/SearchParams";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../IRestuarant";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home = () => {

  //Find this part in reducers: Describes the state stored.
  const userLogin = useSelector<RootState, UserState>(state => state.userLogin);

  const { userInfo } = userLogin
  const firstName = userInfo ? userInfo.firstName : null

  return (
    firstName ? (
      <h2>Welcome { firstName}</h2>) : (
        <h2>Welcome to the Home Page</h2>
      )
  
  )
}
export default Home;
