import Banner from "../Banner/Banner";
import CardItem from "../CardItem";
import Category from "../Category";
import PopulerProducts from "../PopulerProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerProducts></PopulerProducts>
            <CardItem></CardItem>
        </div>
    );
};

export default Home;