import React from 'react';

const BannerA = ({ img, title }) => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content grid md:grid-cols-2 ">
                <div>
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    
                    <button className="btn btn-primary w-[300px] mb-20">Order</button
                    >
                    <h3 style={{borderRadius: '0px 100px 0px 100px' }} className='w-[150px] h-[150px] bg-green-400 hover:bg-slate-900 mb-17'></h3>

                </div>

            </div>
        </div>
    );
};

export default BannerA;