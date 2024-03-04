
const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "DR Cong", code: "CD", phone: 243 },
    { name: "Zimbabwe", code: "ZW", phone: 263 },
    { name: "Zambi", code: "ZM", phone: 260 },
    { name: "Uganda", code: "UG", phone: 225 },
    { name: "Yemen", code: "YE", phone: 967 }
];

// Assurez-vous que select_box est correctement défini
const select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

// Utilisez forEach avec le tableau countries
countries.forEach(country => {
    const option = `
        <li class="option">
            <div>
                <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
                <span class="county-name">${country.name}</span>
            </div>
            <strong>+${country.phone}</strong>
        </li>
    `;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
});

selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
});