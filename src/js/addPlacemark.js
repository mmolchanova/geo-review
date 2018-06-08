import { placemarksCoords } from '../index.js';

import { showForm } from './showForm.js';

export function addPlacemark(point, newReview) {
    if (placemarksCoords.items.length) {
        let placemark = new ymaps.Placemark(
            placemarksCoords.items[placemarksCoords.items.length - 1], {
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

        placemark.events.add('click', function () {
            point = showForm(point);    
        })

        return placemark;
    }
    
    return 
}   
