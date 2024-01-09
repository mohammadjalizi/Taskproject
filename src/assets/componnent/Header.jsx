import Main2 from "../pages/main/Main2";
import { auth } from "../../firbase/Firebase";
import Footer from "../pages/footer/Footer"
import Min from "../pages/main/Min"
import Navbar from "../pages/navbar/Navbar"
import { useAuthState } from 'react-firebase-hooks/auth';
import Main3 from "../pages/main/Main3";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <main className="main" >
{user && <h1>doneeee</h1>}
        <Navbar/>

<Min/>
<Main2/>
<Main3/>
<Footer/>

    </main>

  )
}

export default Header