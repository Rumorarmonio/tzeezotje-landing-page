const slider_reviews = document.querySelector('.swiper-container_reviews');
const slider_photos = document.querySelector('.swiper-container_photos');

let swiper_reviews = new Swiper(slider_reviews, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	effect: 'flip',
	speed: 600,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

let swiper_photos = new Swiper(slider_photos, {
	slidesPerView: 3,
	spaceBetween: 951,
	loop: true,
	speed: 600,
	navigation: {
		nextEl: '.swiper-button-next_photo',
		prevEl: '.swiper-button-prev_photo',
	},
})
