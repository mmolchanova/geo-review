import { placemarksCoords } from '../index.js';

import { showForm } from './showForm.js';

export function getPlacemarks(point, newReview) {
    if (placemarksCoords.length) {
        let placemark = new ymaps.Placemark(
            placemarksCoords[placemarksCoords.length - 1], {
                openBalloonOnClick: false,
                balloonContentHeader: newReview.place,
                balloonContentLink: point.address,
                balloonContentBody: newReview.textReview,
                balloonContentFooter: newReview.date,
                balloonContentCoords: point.coords,
            }, 
            { 
                preset: 'islands#darkOrangeIcon'
            }
        );

        placemark.events.add('click', function (e) {
            point = showForm(point);    
        })

    return placemark;
    }     
    return 
}   
