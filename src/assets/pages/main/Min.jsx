import firstProjectPhoto from './imag/img1.jpg';
import secondProjectPhoto from './imag/img2.jpg';
import thirdProjectPhoto from './imag/img3.jpg';

import './Main.css'


import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const mySlider = [
  { text: "تجربه غذای سالم و گیاهی به سبک ترخینه", link: "src/assets/pages/main/imag/img1.jpg" },
  { text: "WOMEN", link: "src/assets/pages/main/imag/img3.jpg" },
];





const Min = () => {

    
  
  return (
    <div>
      
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    
 

{mySlider.map((item)=>{

return(

<>

<SwiperSlide className=' w-2/4 m-10 '  key={item.link}>
<div className=' mt-6 '>
<img className=' shadow-2xl rounded-2xl     w-full     mx-h-[33rem] m-auto ' src={item.link} alt="" />
</div>


<div className='  text-center absolute top-2/4   left-1/3  '>
<h1 className='  text-4xl  text-center   text-white ' > {item.text} </h1>
 <button  className='  bg-green-700 py-3 text-white     my-6   ' >سفارش آنلاین غذا</button>

</div>
</SwiperSlide>
</>

)


})}
     

      </Swiper>



    </div>
  )
}

export default Min