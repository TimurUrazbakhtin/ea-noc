let fields = document.querySelectorAll('.file__input');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
	labelVal = label.querySelector('.file__text').innerText;
	
	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;
		
		if (countFiles)
			label.querySelector('.file__text').innerText = 'Выбрано файлов: ' + countFiles;
		else
			label.querySelector('.file__text').innerText = labelVal;
	});
});