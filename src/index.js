import 'normalize.css';
import './style/base.scss';
import './style/index.scss';

import { getMap } from './js/getMap.js';
import { closeForm } from './js/formFilling.js';
import { addReview } from './js/addReview.js';

export let myStorage = {
    items:[]
};
export let placemarksCoords = [];


getMap();
closeForm();
addReview();



