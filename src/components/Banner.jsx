import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className='relative'>
          <Carousel
         autoPlay
         infiniteLoop
         showStatus={false}
         showIndicators={false}
         showThumbs={false}
         interval={5000}
         >
                <div  >
                    <img  loading='lazy' alt='banner-img' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD23/PC_Hero_1500x600_KV__FT_eng._CB601620523_.jpg" />
                     
                </div>
                <div>
                    <img loading='lazy' alt='banner-img' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/Events/PD/12C/12C/D88130303_INWLD_PD_Redmi12C_PC_Hero_3000x1200_1._CB601630331_.jpg" />
                    
                </div>
                <div>
                    <img loading='lazy' alt='banner-img' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Hero/revised/pd23/GW_Tallhero_3000x1200_cam._CB601659979_.jpg" />
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Banner