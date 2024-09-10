const oneSlider = new Swiper(".one-slider", {
	autoHeight: true,
    loop: true,
	spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.querySelectorAll('.one-slider-button')?.forEach((slider) => {
	new Swiper(slider.querySelector('.swiper'), {
		autoHeight: true,
		loop: true,
		spaceBetween: 10,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: slider.querySelector('.swiper-button-next'),
			prevEl: slider.querySelector('.swiper-button-prev'),
		},
	});
});