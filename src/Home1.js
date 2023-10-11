import { useUser } from './UserContext';
//import { Navigate } from 'react-router-dom';
import Login from "./Login"
import Home from './Home';
function Home1 (){
    const { currentUser } = useUser();
    return(
        currentUser != null ? (
            <Home currentUser={currentUser}/>
        ):(
            <>
            <h1> Please login to use the app.</h1>
            <Login/>
            </>
        )
    );
        }

export default Home1;
