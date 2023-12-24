import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firbase/Firebase'

const Singnin = () => {
  createUserWithEmailAndPassword(auth, email, password)
  return (



    <main className='main'>
      
<Navbar/>

      <div className='   my-44  h-[100vh] items-center  '>

      <h1 className='  text-center  '> singh in page </h1>
<div className=' flex justify-center items-center my-9'>

<form className='  flex flex-col gap-9   w-56 '> 

<input  className=' shadow-stone-400 rounded-sm bg-gray-300  text-pink-500 '  type='email'  placeholder='Email'/>
<input className=' shadow-stone-400 rounded-sm bg-gray-300  text-pink-500 '   type='Pasword'  placeholder='pasword'/>

<button  onClick={()=>{
 .then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});

}} className=' bg-pink-600 rounded-2xl  shadow-2xl  '> Singnin </button>
</form>
</div>

      </div>
      <Footer/>
      
      </main>
  )
}

export default Singnin