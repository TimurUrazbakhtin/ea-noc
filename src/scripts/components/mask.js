document.querySelectorAll('.phone')?.forEach((p) => 
	Inputmask({"mask": "+7 (999) 999-9999"}).mask(p));