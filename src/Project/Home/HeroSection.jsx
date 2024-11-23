// import React from 'react';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function HeroSection() {
//   return (
//     <div className="flex items-center justify-center w-full h-screen"> 
//       <img 
//         src="/shoeimages/homepage3.png" 
//         alt="Cat and Dog" 
//         className="w-[800px] h-[400px] object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
//       />
//     </div>
//   );
// }

// export default HeroSection;



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 600, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    arrows: true, 
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-[800px] h-auto shadow-lg overflow-hidden rounded-md">
        <Slider {...settings}>
          <div>
            <img
              src="/shoeimages/homepage3.png"
              alt="Shoe 1"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <img
              src="/shoeimages/homepage2.png"
              alt="Shoe 2"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <img
              src="/shoeimages/homepage4.jpg"
              alt="Shoe 3"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeroSection;
