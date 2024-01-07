import { Swiper, SwiperSlide } from 'swiper/react';
import { FaEye } from "react-icons/fa";
import'./Main.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartArrowDown } from "react-icons/fa";


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// import required modules

const mySlider = [
 
    { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
     { 
        title1:"همبرگر",
        text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
     link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8.png" },
    { text: "WOMEN", link: "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-4.png" },
  ];
  

const Main2 = () => {
  return (
    <div>
        

<div className=' my-6 text-center '>
<h1 className=' text-red-500 '>  بهترین منوی غذا </h1>
<p className='  text-3xl  '>    محبوبترین غذا های ما </p>
</div>


<div className='  w-3/4  m-auto'>
      <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
   {mySlider.map((item)=>{

return(

<>

<SwiperSlide className='  '>

<div className='  card  w-72 bg-green-100 flex flex-col justify-center items-center'>

<div>
<img className=' m-auto ' width="180"   height="180" src={item.link} alt="" />
<div>
<div className=' icons' >
<FaEye  className=' faEye   '/>

<FaCartArrowDown className='faEye' />

</div>

</div>


</div>
<div className='  flex flex-col justify-center text-center '>
<h1>{item.title1}</h1>
<p>{item.text}</p>
<span className='  text-red-500 '>  $12.3  </span>

</div>
</div>

</SwiperSlide>


</>

)

   })}
    
      </Swiper>
    </div>
    </div>
  )
}


export default Main2;