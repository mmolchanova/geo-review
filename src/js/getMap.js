import makeFormTemplate from '../templates/makeFormTemplate.hbs';
import { getPoint } from './getPoint.js';
import { showForm } from './showForm.js';

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
            '<h2 class=ballon_header>{{ properties.balloonContentHeader|raw }}</h2>' +
            '<a href="#" class=ballon_link data-coord="{{ properties.balloonContentCoords|raw }}">{{ properties.balloonContentLink|raw }}</a>' +
            '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
            '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
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
