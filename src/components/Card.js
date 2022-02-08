import React from 'react'

export default function Card(props){
    return (
        <div className='container'>
            <div className='img-wrapper'>
                <img className='item-img' src={props.item.imageUrl} />
            </div>
            <div className='info-wrapper'>
                <div className='location-wrapper'>
                    <p className='country'><i className="fas fa-map-marker-alt"></i>{props.item.location}</p>
                    <a className='location-link' href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='location-title'>{props.item.title}</h1>
                <p className='travel-dates'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='travel-desc'>{props.item.description}</p>
            </div>
        </div>
    )
}