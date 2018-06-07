import { placemarksCoords } from '../index.js';

export function getPlacemarks() {
    if (placemarksCoords.length) {
        let placemarks = new ymaps.Placemark(
            placemarksCoords[placemarksCoords.length - 1], {}, { preset: 'islands#darkOrangeIcon' }
        );

    return placemarks;
    }     
    return 
}   
