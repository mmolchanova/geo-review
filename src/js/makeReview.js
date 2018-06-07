import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { myStorage } from '../index.js';
import { placemarksCoords } from '../index.js';
import { clusterer } from './getMap.js';
import { getPlacemarks } from './getPlacemarks.js';

export function makeReview(point) {
    const name = document.querySelector('#name');
    const place = document.querySelector('#place');
    const textReview = document.querySelector('#textReview');

    let date = new Date();
    let dateStr = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    let newReview = {
        name : name.value,
        place : place.value,
        date : dateStr,
        textReview : textReview.value
    }

    if (name.value && place.value && textReview.value) {                     
        let flag = false;

        for (const item of myStorage.items) {                       
            if (item.address == point.address) {
                item.reviews.push(newReview);
                point.reviews = item.reviews;
                flag = true;
                break;
            }            
        };
            
        if (flag == false) {
            point.reviews = [];
            point.reviews.push(newReview);
            myStorage.items.push(point);
        }                            
    }     

    const htmlReview = makeFormTemplate(point);
    
    reviewBlock.innerHTML = htmlReview;  
    
    placemarksCoords.push(point.coords);

    let placemark = getPlacemarks(point, newReview);
    if (placemark) {
        clusterer.add(placemark); 
    }
}
