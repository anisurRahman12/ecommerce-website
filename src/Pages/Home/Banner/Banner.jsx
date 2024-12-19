import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import im1 from '../../../assets/images/banner/01.png';
import im2 from '../../../assets/images/banner/02.png';
import im3 from '../../../assets/images/banner/03.png';
import BannerA from "../../../Components/BannerA";
const Banner = () => {
    return (
        <div className="bg-green-200 h-600px">
            
            <Carousel>
               <BannerA img={im1} title={'coar show room'}></BannerA>
               <BannerA img={im2} title={'class room '}></BannerA>
               <BannerA img={im3} title={'zero world'}></BannerA>
            </Carousel>
        </div>
    );
};

export default Banner;