import React from 'react';
import CaredItemA from '../../Components/CaredItemA';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import img1 from '../../assets/images/shop/01.jpg';
import img2 from '../../assets/images/shop/02.jpg';
import img3 from '../../assets/images/shop/03.jpg';
import img4 from '../../assets/images/shop/04.jpg';
import img5 from '../../assets/images/shop/05.jpg';
import img6 from '../../assets/images/shop/06.jpg';
import img7 from '../../assets/images/shop/07.jpg';
import img8 from '../../assets/images/shop/08.jpg';
import img9 from '../../assets/images/shop/09.jpg';

const CardItem = () => {

    return (
       <div>
        <div >
            <SectionTitle heading={'Card item'} subHeading={'offer now'}></SectionTitle>
        </div>
         <div className='grid md:grid-cols-3 mt-10 mb-10 gap-4 max-w-screen-xl'>
            <CaredItemA img={img1} title={'dress'} price={600}></CaredItemA>
            <CaredItemA img={img2} title={'dress'} price={555}></CaredItemA>
            <CaredItemA img={img3} title={'dress'} price={444}></CaredItemA>
            <CaredItemA img={img4} title={'dress'} price={446}></CaredItemA>
            <CaredItemA img={img5} title={'dress'} price={499}></CaredItemA>
            <CaredItemA img={img6} title={'dress'} price={406}></CaredItemA>
            <CaredItemA img={img7} title={'dress'} price={356}></CaredItemA>
            <CaredItemA img={img8} title={'dress'} price={400}></CaredItemA>
            <CaredItemA img={img9} title={'dress'} price={450}></CaredItemA>
        </div>
       </div>
    );
};

export default CardItem;