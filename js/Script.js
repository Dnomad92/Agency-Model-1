const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const icon = document.querySelector('.fas')

toggle.addEventListener('click', () => {
	toggle.classList.toggle('active')
	navigation.classList.toggle('active')
});

icon.addEventListener('click', () => {
	icon.classList.toggle('fa-times')
	icon.classList.toggle('fa-bars')
});