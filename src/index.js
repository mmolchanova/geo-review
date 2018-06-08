import 'normalize.css';
import './style/base.scss';
import './style/index.scss';

import { getMap } from './js/getMap.js';
import { closeForm } from './js/closeForm.js';
import { addReview } from './js/addReview.js';
import { clickBallonLink } from './js/clickBallonLink.js';

export let myStorage = {
    items: []
};
if (localStorage.data) {
    myStorage = JSON.parse(localStorage.data);
}

export let placemarksCoords = {
    items: []
};
     
getMap();
closeForm();
addReview();
clickBallonLink();

