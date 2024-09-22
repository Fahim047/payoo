const logoutBtn = document.getElementById('logout-btn');
const article = document.getElementById('article');
const actions = document.getElementById('actions');
const addMoney = document.getElementById('add-money');
const transactions = document.getElementById('transactions');
const cashout = document.getElementById('cashout');
const paybill = document.getElementById('pay-bill');
logoutBtn.addEventListener('click', () => {
	window.location.href = 'index.html';
});

actions.addEventListener('click', (event) => {
	// console.log(event.target.closest('button').id);
	const btnId = event.target.closest('button').id;
	const sectionId = btnId.split('-btn')[0];
	showSection(sectionId);
	// if (event.target.closest('#add-money-btn')) {
	// 	addMoney.classList.remove('hidden');
	// 	transactions.classList.add('hidden');
	// 	cashout.classList.add('hidden');
	// 	paybill.classList.add('hidden');
	// }
	// if (event.target.closest('#cashout-btn')) {
	// 	cashout.classList.remove('hidden');
	// 	addMoney.classList.add('hidden');
	// 	transactions.classList.add('hidden');
	// 	paybill.classList.add('hidden');
	// }
	// if (event.target.closest('#pay-bill-btn')) {
	// 	paybill.classList.remove('hidden');
	// }
	// if (event.target.closest('#transactions-btn')) {
	// 	transactions.classList.remove('hidden');
	// 	addMoney.classList.add('hidden');
	// 	cashout.classList.add('hidden');
	// }
});

function showSection(id) {
	Array.from(article.children).forEach((section) => {
		section.classList.add('hidden');
		if (section.id == id) {
			section.classList.remove('hidden');
		}
	});
}
