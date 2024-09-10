const slideDown = elem => elem.style.height = `${elem.scrollHeight}px`;

document.querySelector('.accordion-all')?.addEventListener('click', (event) => {
	if(event.target.closest('.accordion-top')) {
		let accordionTop = event.target.closest('.accordion-top');
		const accordion = accordionTop.closest('.accordion');
		const accordionBody = accordion.querySelector('.accordion-body')
		const isVisibleAccordion = accordionBody.hasAttribute('style');

		document.querySelectorAll('.accordion')?.forEach((a) => {
			a.querySelector('.accordion-body').removeAttribute('style');
		});

		if(!isVisibleAccordion) {
			slideDown(accordionBody);
		}
	}
});