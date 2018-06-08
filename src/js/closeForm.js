export function closeForm() {
    document.addEventListener('click', function(e) {
        const reviewBlock = document.querySelector('#reviewBlock');
        let elem = e.target;

        if (elem.id == 'closeForm') {
            reviewBlock.classList.add('visually-hidden');           
        }
    })
}