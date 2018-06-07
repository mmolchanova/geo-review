import makeFormTemplate from '../templates/makeFormTemplate.hbs';

export function closeForm() {
    document.addEventListener('click', function(e) {
        let elem = e.target;

        if (elem.id == 'closeForm') {
            reviewBlock.classList.add('visually-hidden');           
        }
    })
};
