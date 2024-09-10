document.querySelector('.header__burger')?.addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('.main').classList.toggle('full');
});

if(window.matchMedia('(max-width: 992px)').matches) {
	window.addEventListener('click', e => {
		const target = e.target
		if (!target.closest('.header__sidebar') && !target.closest('.header__burger')) { 
			document.querySelector('.header')?.classList.remove('active');
			document.querySelector('.main')?.classList.remove('full');
		}
	});
}