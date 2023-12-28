import { signOut } from 'firebase/auth';
import { auth } from '../../../firbase/Firebase';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

  return (
    <div>
 <header className=' flex justify-between items-center  md:mx-16'>


<h1 onClick={() => { 

navigate("/")

 }} className=' cursor-pointer '>  mohammadjalizi</h1>


<ul className=' flex  border gap-20  border-b-green-500 p-4 '>

{!user&& 
  <li className=' cursor-pointer ' onClick={()=>{

    
navigate("/singin")
}}>             Sign-in  </li>


}
{!user &&  



<li onClick={()=>{

navigate("/singup")

}} className=' cursor-pointer '>       Sign-up</li>



}
{user && 
  <li onClick={()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });



  }} className=' cursor-pointer '>    Sign-out</li>

}
<li className=' cursor-pointer '>         About</li>
<li className=' cursor-pointer '>Profile</li>
</ul>




        </header>

    </div>
  )
}

export default Navbar