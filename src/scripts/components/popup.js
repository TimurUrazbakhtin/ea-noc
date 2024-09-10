document.querySelectorAll('.popup-close')?.forEach((button) => {
    button.addEventListener('click', (el) => {
        document.querySelectorAll('.popup').forEach((p) => p.classList.remove('active'));
        document.querySelector('body')?.classList.remove('lock');
    });
});

document.querySelectorAll('.popup-open')?.forEach((button) => {
    button.addEventListener('click', (el) => {
        document.querySelector('.popup#' + button.id)?.classList.add('active');
        document.querySelector('body')?.classList.add('lock');
    });
});

if(document.querySelector('.popup__content')) {
    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.popup__content') && !target.closest('.popup-open')) { 
            document.querySelector('.popup')?.classList.remove('active');
            document.querySelector('body')?.classList.remove('lock');
        }
    });
}