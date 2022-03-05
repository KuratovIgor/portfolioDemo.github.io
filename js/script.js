document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#arrow-down').addEventListener('click', () => {
		document.querySelector('.page-navigator').scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		});
	});

	document.querySelector('.page-navigator').addEventListener('click', event => {
		const navigateItem = event.target.closest('.page-navigator__item');
		if (navigateItem){
			if (navigateItem.innerText === 'HOME'){
				document.querySelector('.header').scrollIntoView({
					block: 'start',
					behavior: 'smooth',
				});
			}
			if (navigateItem.innerText === 'ABOUT US'){
				document.querySelector('.page-navigator').scrollIntoView({
					block: 'start',
					behavior: 'smooth',
				});
			}
			if (navigateItem.innerText === 'PORTFOLIO'){
				document.querySelector('.portfolio').scrollIntoView({
					block: 'start',
					behavior: 'smooth',
				});
			}
			if (navigateItem.innerText === 'CONTACT'){
				document.querySelector('.contact').scrollIntoView({
					block: 'start',
					behavior: 'smooth',
				});
			}
		}

		event.preventDefault();
	});
});

