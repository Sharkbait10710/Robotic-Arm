const arrowSlide = () => {
    const arrow = document.getElementById('arrow');
    const options = document.querySelector('.keywords');

    arrow.addEventListener('click', () => {
        options.classList.toggle('show');
    });

}

arrowSlide();