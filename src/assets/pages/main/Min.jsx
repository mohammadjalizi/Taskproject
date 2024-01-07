import firstProjectPhoto from './imag/img1.jpg';
import secondProjectPhoto from './imag/img2.jpg';
import thirdProjectPhoto from './imag/img3.jpg';



import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const mySlider = [
  { text: "تجربه غذای سالم و گیاهی به سبک ترخینه", link: "src/assets/pages/main/imag/img1.jpg" },
  { text: "WOMEN", link: "src/assets/pages/main/imag/img2.jpg" },
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

<SwiperSlide className=' w-2/4 '  key={item.link}>
<div>
<img src={item.link} alt="" />
</div>
<h1 className='  absolute top-2/4 left-2/4 bg-cyan-500 ' > {item.text} </h1>

</SwiperSlide>
</>

)


})}
     

      </Swiper>



    </div>
  )
}

export default Min