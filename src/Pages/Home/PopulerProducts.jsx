import { useEffect, useState } from "react";
import PopulerProductT from "../../Components/PopulerProductT";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const PopulerProducts = () => {
    const [products, setProducts]= useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>{
            const PopulerItem = data.filter(item => item.category === "Men's Sneaker")
         setProducts(PopulerItem);
        })
    },[])
    return (
       <div>
         <SectionTitle heading={'Populer Products'} subHeading={'Populer item '}></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
            {
                products.map(item => <PopulerProductT key={item._id} item={item}></PopulerProductT>)
            }
        </div>
       </div>
    );
};

export default PopulerProducts;