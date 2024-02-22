
import './App.css';
import { useSelector, useDispatch} from "react-redux";
import { fetchUsers} from "./userSlice.js";
function App() {
  const state = useSelector((state)=>state);
  console.log(state);
  const dispatch = useDispatch();
  if(state.users.isLoading){
    return <h1>Loading...</h1>
  }
  if(state.users.isError){
    return <h2>Error...</h2>
  }
  return (
    <div className="App">
      <h1>Sanskar here...</h1>
      <button onClick={(e) => dispatch(fetchUsers())}>Fetch Users</button>
      {
        state.users.data && state.users.data.map((item) => (
          <div className='eachuser'>
            <h4> Name: {item.name}</h4>
            <h4> Username: {item.username}</h4>
            <h4>Email: {item.email}</h4>
          </div>
        ))
      }
     </div>
  )
}

export default App;
