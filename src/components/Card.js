import React from 'react';
import pin from "../images/pin.svg"

export default ((props) => {
    return (
        <div className='card'>
            <img src={props.imageUrl} alt="card-img" />
            <div className = "card-info">
                <div className='location'>
                    <img src={pin} alt="pin-icon" />
                    <span>{props.location}</span><a href = {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className='title'>
                    {props.title}
                </div>
                <div className='duration'>
                    {props.startDate} - {props.endDate}
                </div>
                <div className='card-about'>
                    {props.description}
                </div>
            </div>
        </div>
    )
})