import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { getPoint } from './getPoint.js';
import { showForm } from './showForm.js';
import { getPlacemarks } from './getPlacemarks.js';

export let clusterer;

export function getMap() {
    ymaps.ready(init);
    let myMap;

    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 13
        });

        let customItemContentLayout = ymaps.templateLayoutFactory.createClass(
            // Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
            '<div class=ballon__content><h2 class=ballon__header>{{ properties.balloonContentHeader|raw }}</h2>' +
            '<a href="#" class=ballon__link data-coord="{{ properties.balloonContentCoords|raw }}">{{ properties.balloonContentLink|raw }}</a>' +
            '<div class=ballon__body>{{ properties.balloonContentBody|raw }}</div>' +
            '<div class=ballon__footer>{{ properties.balloonContentFooter|raw }}</div></div>'
        );

        clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedDarkOrangeClusterIcons',
            clusterDisableClickZoom: true,
            openBalloonOnClick: true,
            // Устанавливаем стандартный макет балуна кластера "Карусель".
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            // Устанавливаем собственный макет.
            clusterBalloonItemContentLayout: customItemContentLayout,
            // Устанавливаем режим открытия балуна. 
            // В данном примере балун никогда не будет открываться в режиме панели.
            clusterBalloonPanelMaxMapArea: 0,
            // Устанавливаем размеры макета контента балуна (в пикселях).
            clusterBalloonContentLayoutWidth: 200,
            clusterBalloonContentLayoutHeight: 160,
            // Устанавливаем максимальное количество элементов в нижней панели на одной странице
            clusterBalloonPagerSize: 10
        });

        myMap.geoObjects.add(clusterer);
        getPlacemarks();
        
        myMap.events.add('click', function (e) {
            (async () => {
                try {     
                    let point = await getPoint(e);
                    point = await showForm(point); 
                } catch (e) {
                    console.error(e);
                }
            })();   
        })        
    }
}
