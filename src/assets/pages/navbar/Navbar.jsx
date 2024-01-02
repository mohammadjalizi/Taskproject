import { signOut } from 'firebase/auth';
import { auth } from '../../../firbase/Firebase';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

  return (
    <div>
 <header className=' flex justify-between items-center  md:mx-16'>


<img src='https://tarkhineh-food.vercel.app/assets/Logo-9ec2c6ab.svg'/>

<ul className=' flex  border gap-20  border-b-green-500 p-4 '>

{!user&& 
  <li className=' cursor-pointer ' onClick={()=>{

    
navigate("/singin")
}}>            صحفه اصلی </li>


}
{!user &&  



<li onClick={()=>{

navigate("/singup")

}} className=' cursor-pointer '>        شعبه  </li>



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
<li className=' cursor-pointer '>        اعطای نمایندگی</li>
<li className=' cursor-pointer '>درباره ما</li>
</ul>
<div className=' flex gap-6 '>
<MdOutlineProductionQuantityLimits className=' size-8 cursor-pointer    rounded-2xl border  text-green-400' />
<CgProfile className=' size-8   cursor-pointer rounded-2xl border text-green-400'/>
  
</div>



        </header>

    </div>
  )
}

export default Navbar