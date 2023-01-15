import './ali.css'
// import Slider from "../../components/client/Home/Slider"
import Slider from "react-slick";
import { GalWrapper, SliderItem } from "../../components/client/Home/Slider/styled-index";
function News() {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    };
    return (
        <body className='bodyy'>
            <GalWrapper>
                <Slider {...settings}>
               
               <SliderItem>
                       <div className="alibox">
                       
                       < h3 className='alih3' data-aos="zoom-out-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>

                       <img className='aliimg' src="https://hayatmed.uz/uploads/articles/88/content-original-526x526.jpg" alt="" />

                     
                       </div>
                     </SliderItem>
            
                 
                     <SliderItem>
                       <div className="alibox">
                       
                       < h3 className='alih3' data-aos="zoom-out-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>

                       <img className='aliimg' src="https://picsum.photos/300" alt="" />

                     
                       </div>
                     </SliderItem>
                   
                   
                     <SliderItem>
                       <div className="alibox">
                       
                       < h3 className='alih3' data-aos="zoom-out-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>

                       <img className='aliimg' src="https://picsum.photos/300" alt="" />

                     
                       </div>
                     </SliderItem>
                    
                </Slider>
            </GalWrapper>

            
        </body>
    )
}
export default News