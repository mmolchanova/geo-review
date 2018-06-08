import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { myStorage } from '../index.js';
import { placemarksCoords } from '../index.js';
import { clusterer } from './getMap.js';
import { addPlacemark } from './addPlacemark.js';

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
    } else {
        alert('Заполните все поля, чтобы добавить отзыв')
    } 

    const htmlReview = makeFormTemplate(point);
    
    reviewBlock.innerHTML = htmlReview;  
    
    placemarksCoords.items.push(point.coords);
    console.log(point.coords);
    console.log(newReview);

    let placemark = addPlacemark(point, newReview);
    if (placemark) {
        clusterer.add(placemark); 
    }

    localStorage.data = JSON.stringify({
        items: myStorage.items
    });
}
