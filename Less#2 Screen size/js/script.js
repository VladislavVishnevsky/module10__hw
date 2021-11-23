const btn = document.querySelector('.j-btn-test');
const icon = document.querySelector('.btn_icon');

btn.addEventListener('click', () => {
	alert(`Ширина экрана - ${window.screen.width}px. Высота экрана - ${window.screen.height}px.`);
})

