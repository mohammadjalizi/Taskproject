
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { auth } from "../../../firbase/Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Singnin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  createUserWithEmailAndPassword(auth, email, password)

  return (



    <main className='main'>
      
<Navbar/>

      <div className='   my-44  h-[100vh] items-center  '>

      <h1 className='  text-center  '> singh in page </h1>
<div className=' flex justify-center items-center my-9'>

<form className='  flex flex-col gap-9   w-56 '> 

<input  onChange={(e)=>{

setemail(e.target.value)
console.log(e.target.value)

}} className=' shadow-stone-400 rounded-sm bg-gray-300  text-pink-500 '  type='email'  placeholder='Email'/>
<input onChange={(e)=>{
setpassword(e.target.value)


}} className=' shadow-stone-400 rounded-sm bg-gray-300  text-pink-500 '   type='Pasword'  placeholder='pasword'/>

<button  onClick={(eo)=>{
  
eo.preventDefault()



createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log("doneeeeeeeeee")
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage)

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