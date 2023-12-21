import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className=' flex justify-between  md:mx-16'>


<h1>  mohammadjalizi</h1>


<ul className=' flex  border gap-20  border-b-green-500 p-4 '>

<li className=' cursor-pointer '>             Sign-in  </li>
<li className=' cursor-pointer '>       Sign-up</li>
<li className=' cursor-pointer '>    Sign-out</li>
<li className=' cursor-pointer '>         About</li>
<li className=' cursor-pointer '>Profile</li>
</ul>




        </header>

    </div>
  )
}

export default Navbar