import React from 'react';





export const Order = ({ closeHour, openHour }) => {




    




    return (


        <div className='order'>
            <p>We're open from { openHour }:00 to { closeHour }:00. Com visit us or order online</p> 
            <button className='btn'>Order</button>
        </div>


    );
};
