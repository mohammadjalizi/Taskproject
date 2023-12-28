import { auth } from "../../firbase/Firebase";
import Footer from "../pages/footer/Footer"
import Min from "../pages/main/Min"
import Navbar from "../pages/navbar/Navbar"
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <main className="main" >
{user && <h1>doneeee</h1>}
        <Navbar/>

<Min/>
<Footer/>

    </main>
  )
}

export default Header