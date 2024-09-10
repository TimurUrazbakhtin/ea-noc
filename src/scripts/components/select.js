document.querySelectorAll('.select-choices')?.forEach((s) => {
	new Choices(s, {
		searchEnabled: false,
		removeItemButton: true,
		noChoicesText: 'Нет вариантов на выбор',
	});

	let ariaLabel = s.getAttribute('aria-label');
	let choices = s.closest('.choices');
	choices.setAttribute('aria-label', ariaLabel);
});