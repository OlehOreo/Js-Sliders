const slides = [
	{
		name: 'John Doe',
		job: 'Frontend developer',
		image: 'assets/profile-1.png',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias itaque pariatur numquam veritatis mollitia quisquam eveniet quidem. Quos animi praesentium voluptatibus? Provident cumque, commodi quidem animi enim placeat repudiandae!',
	},
	{
		name: 'Kate Smit',
		job: 'Backend developer',
		image: 'assets/profile-2.png',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias itaque pariatur numquam veritatis mollitia quisquam eveniet quidem. Quos animi praesentium voluptatibus? Provident cumque, commodi quidem animi enim placeat repudiandae!',
	},
];

const sliderContainer = document.querySelector('.slider');
const nexBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentSlideIndex = 0;
const totalSlides = slides.length;

const displaySlides = () => {
	if (sliderContainer && nexBtn && prevBtn) {
		sliderContainer.style.opacity = 0;

		setTimeout(() => {
			const { name, job, image, info } = slides[currentSlideIndex];
			sliderContainer.innerHTML = `
			<div class="profile">
			<img src="${image}" alt="" />
			<h3>${name}</h3>
			<p class='job'>${job}</p>
			</div>
			<p class='info'>${info}</p>
			`;
			sliderContainer.style.opacity = 1;
		}, 300);
	}
};

nexBtn.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
	displaySlides();
});

prevBtn.addEventListener('click', () => {
	currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
	displaySlides();
});

window.onload = displaySlides();
