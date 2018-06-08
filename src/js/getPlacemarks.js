import { myStorage } from '../index.js';
import { placemarksCoords } from '../index.js';
import { clusterer } from './getMap.js';
import { addPlacemark } from './addPlacemark.js';

export function getPlacemarks() {
    for (const item of myStorage.items) {
        for (const review of item.reviews) {
            placemarksCoords.items.push(item.coords);
            let placemark = addPlacemark(item, review);
            if (placemark) {
                clusterer.add(placemark); 
            }
        }
    }
}
