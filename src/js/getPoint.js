import { formPosition } from './formPosition.js';

export function getPoint(e) {
    const reviewBlock = document.querySelector('#reviewBlock');
    let coords = e.get('coords');
    let myReverseGeocoder = ymaps.geocode(coords);

    reviewBlock.setAttribute('data-coord', '');
    reviewBlock.setAttribute('data-address', '');
    reviewBlock.setAttribute('data-position', '');

    return (
        myReverseGeocoder.then(
            function (res) {
                let position = e.get('domEvent').get('position');
                let nearest = res.geoObjects.get(0);  
                                     
                let point = {
                    address: `${nearest.properties.get('description')}, ${nearest.properties.get('name')}`,
                    coords: coords,
                    position: formPosition(position)
                };

                return point;
            }
        )
    )
}
