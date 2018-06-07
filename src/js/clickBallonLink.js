import { showForm } from './showForm.js';

export function clickBallonLink() {
    document.addEventListener('click', function(e) {
        let elem = e.target;

        if (elem.classList.contains('ballon_link')){
            e.preventDefault;
            
            let coords = elem.dataset.coord.split(',');
            let myReverseGeocoder = ymaps.geocode(coords);
            myReverseGeocoder.then(
                function (res) {
                    let nearest = res.geoObjects.get(0);                       
                    let point = {
                        address: `${nearest.properties.get('description')}, ${nearest.properties.get('name')}`,
                        coords: coords,
                        position: [(e.clientX - 50), (e.clientY + 180)]
                    };
                    console.log(point);

                    return point;
                }
            )
            .then(point => {
                showForm(point);
            })
        }
    })
}