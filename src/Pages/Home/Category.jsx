
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import CategoryA from '../../Components/CategoryA';
import img1 from '../../assets/images/shop/01.jpg';
import img2 from '../../assets/images/shop/02.jpg';
import img3 from '../../assets/images/shop/03.jpg';

const Category = () => {
    return (
        <div className=''>
            <SectionTitle heading={'select'} subHeading={'choose '}></SectionTitle>
        <div className='flex gap-5 mt-10 mb-10'>
            
            <CategoryA img={img1} title={'Good quality'} price={450}></CategoryA>
            <CategoryA img={img2} title={'Best seller'} price={999}></CategoryA>
            <CategoryA img={img3} title={'good'} price={99}></CategoryA>
        </div>
        </div>
    );
};

export default Category;