
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


</div>

      </div>
      <Footer/>
      
      </main>
  )
}

export default Singnin