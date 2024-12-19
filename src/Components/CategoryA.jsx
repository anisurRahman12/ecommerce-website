import React from 'react';

const CategoryA = ({img,title, price}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='h-[200px]'
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy now</button>
    </div>
  </div>
</div>
    );
};

export default CategoryA;