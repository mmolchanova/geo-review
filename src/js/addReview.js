import { makeReview } from './makeReview.js';

export function addReview() {
    document.addEventListener('click', function(e) {
        let elem = e.target;

        if (elem.id == 'save') {
            e.preventDefault;
            
            const reviewBlock = document.querySelector('#reviewBlock');

            let point = {
                address: reviewBlock.dataset.address,
                coords: reviewBlock.dataset.coord.split(','),
                position: reviewBlock.dataset.position.split(',')
            }; 
            
            makeReview(point);
        }
    })
}