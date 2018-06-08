import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { myStorage } from '../index.js';
import { addDnd } from './addDnd.js';

export function showForm(point) {
    const reviewBlock = document.querySelector('#reviewBlock');

    addDnd(reviewBlock); 

    reviewBlock.setAttribute('data-coord', point.coords);
    reviewBlock.setAttribute('data-address', point.address);
    reviewBlock.setAttribute('data-position', point.position);
   
    let reviewsArr = [];

    for (const item of myStorage.items) {                       
        if (item.address == point.address) {
            reviewsArr.push(...item.reviews);
        }
    }

    point.reviews = reviewsArr;

    reviewBlock.style.left = point.position[0] + 'px';
    reviewBlock.style.top = point.position[1] + 'px';             
    reviewBlock.classList.remove('visually-hidden');

    const htmlReview = makeFormTemplate(point);
    
    reviewBlock.innerHTML = htmlReview;
    
    return point;
}
