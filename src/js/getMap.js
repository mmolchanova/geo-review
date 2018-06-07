import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { getPoint } from './getPoint.js';
import { showForm } from './showForm.js';
import { getPlacemarks } from './getPlacemarks.js';

export default function() {
    ymaps.ready(init);
    let myMap;
    let clusterer;

    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 13
        });
        clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedDarkOrangeClusterIcons',
            clusterDisableClickZoom: true,
            openBalloonOnClick: false
        });

        myMap.geoObjects.add(clusterer);

        myMap.events.add('click', function (e) {
            (async () => {
                try {     
                    let point = await getPoint(e);
                    point = await showForm(point);  
                    let placemarks = await getPlacemarks();
                    if (placemarks) {
                        await clusterer.add(placemarks); 
                    }
                } catch (e) {
                    console.error(e);
                }
            })();   
        })        
    }
}
