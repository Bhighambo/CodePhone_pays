
const  countries = [
	{ name: "Afghanistan", code: "AF", phone: 93},
	{ name: "DR Cong", code: "CD", phone: 243},
	{ name: "Afghanistan", code: "AF", phone: 93},
	{ name: "Afghanistan", code: "AF", phone: 93},
	{ name: "Afghanistan", code: "AF", phone: 93}
],

for (country of countries){
	const option = `
		<li class="option">
			<div>
				<span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
				<span class="county-name">${country.name}</span>
			</div>
		    <strong>+${country.phone}</strong>
		</li>
	`;

	select_box.querySelector('ol').insertAdAcentHTML('beforeend', option);
}


	select_box = document.querySelector('.options'),
	  search_box = document.querySelector('.search-box'),
	  input_box = document.querySelector('input[type="tel"]'),
	  selected_option = document.querySelector('.selected-option div');

	  selected_option.addEventListener('click', () => {
	  	select_box.classList.toggle('active');
	  	selected_option.classList.toggle('active');
	  })