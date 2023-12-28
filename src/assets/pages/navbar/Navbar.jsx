import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
 <header className=' flex justify-between items-center  md:mx-16'>


<h1 onClick={() => { 

navigate("/")

 }} className=' cursor-pointer '>  mohammadjalizi</h1>


<ul className=' flex  border gap-20  border-b-green-500 p-4 '>

<li className=' cursor-pointer ' onClick={()=>{

    
    navigate("/singin")
}}>             Sign-in  </li>
<li onClick={()=>{

navigate("/singup")

}} className=' cursor-pointer '>       Sign-up</li>
<li className=' cursor-pointer '>    Sign-out</li>
<li className=' cursor-pointer '>         About</li>
<li className=' cursor-pointer '>Profile</li>
</ul>




        </header>

    </div>
  )
}

export default Navbar