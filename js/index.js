const mobileNumber = document.getElementById('mobile-number');
const pinNumber = document.getElementById('pin-number');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
	event.preventDefault();
	if (mobileNumber.value === '12345678901' && pinNumber.value === '1234') {
		window.location.href = 'home.html';
	} else {
		alert('Invalid Credentials');
		mobileNumber.value = '';
		pinNumber.value = '';
	}
});
