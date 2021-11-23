const btn = document.querySelector('.j-btn-test');
const icon1 = document.querySelector('.btn_icon');
const icon2 = document.querySelector('.btn_icon2');

function swapIcon() {
	icon1.classList.toggle('none');
	icon2.classList.toggle('active');
}

btn.addEventListener('click', swapIcon);
