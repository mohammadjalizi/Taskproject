import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft } from "react-icons/fa6";

const Min = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      
<div    className=' m-12  relative '>

<img src="src\assets\pages\main\imag\img1.jpg" alt="" />

<div className=' absolute top-2/4   right-52  shadow-2xl   font-bold ' data-aos="fade-up">  

<h1 className=' text-red-500'>سفارش آنلاین غذا</h1>
<p>بهترین را دریافت کنید
غذای با کیفیت
از ما</p>
<button  className=' flex items-center justify-center bg-red-500 text-white   pl-4 p-2  '  >ثبت سفارش <FaArrowLeft />
</button>
 </div>
</div>



    </div>
  )
}

export default Min