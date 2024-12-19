import React from 'react';

const PopulerProductT = ({item}) => {
    const {img,name,price,shipping}=item;
    return (
        <div className='flex gap-6'>
            <img className='h-[150px]' src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
                <p className='text-orange-400'>{shipping}</p>
            </div>
        </div>
    );
};

export default PopulerProductT;