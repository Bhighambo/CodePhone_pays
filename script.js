
const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Afrique du Sud", code: "ZA", phone: 27 },
    { name: "Albanie", code: "AL", phone: 355 },
    { name: "Algérie", code: "DZ", phone: 213 },
    { name: "Allemagne", code: "DE", phone: 49 },
    { name: "Andorre", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1 264 },
    { name: "Arabie Saoudite", code: "SA", phone: 966 },
    { name: "Argentine", code: "AR", phone: 54 },
    { name: "Arménie", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australie", code: "AU", phone: 61 },
    { name: "Autriche", code: "AT", phone: 43 },
    { name: "Azerbaïdjan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1 242 },
    { name: "Bahrein", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbade", code: "BB", phone: 1 246 },
    { name: "Belgique", code: "BE", phone: 32 },
    { name: "Bélize", code: "BZ", phone: 501 },
    { name: "Bénin", code: "BJ", phone: 229 },
    { name: "Bermudes", code: "BM", phone: 1 441 },
    { name: "Bhoutan", code: "BT", phone: 975 },
    { name: "Bolivie", code: "BO", phone: 591 },
    { name: "Bosnie-Herzégovine", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Brésil", code: "BR", phone: 55 },
    { name: "Brunéi", code: "BN", phone: 673 },
    { name: "Bulgarie", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodge", code: "KH", phone: 855 },
    { name: "Cameroun", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Chili", code: "CL", phone: 56 },
    { name: "Chine", code: "CN", phone: 86 },
    { name: "Chypre", code: "CY", phone: 357 },
    { name: "Colombie", code: "CO", phone: 57 },
    { name: "Comores", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, République démocratique du", code: "CD", phone: 243 },
    { name: "Cook, Iles", code: "CK", phone: 682 },
    { name: "Corée du Sud", code: "KR", phone: 82 },
    { name: "Corée du Nord", code: "KP", phone: 850 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Côte d'Ivoire", code: "CI", phone: 225 },
    { name: "Croatie", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curaçao", code: "CW", phone: 599 },
    { name: "Danemark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominicaine, République", code: "DO", phone: 1 },
    { name: "Dominique", code: "DM", phone: 1 767 },
    { name: "Egypte", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 967 },
    { name: "Emirats arabes unis", code: "AE", phone: 967 },
    { name: "Equateur", code: "EC", phone: 967 },
    { name: "Erythrée", code: "ER", phone: 967 },
    { name: "Espagne", code: "ES", phone: 967 },
    { name: "Estonie", code: "EE", phone: 967 },
    { name: "Etats-Unis d'Amérique", code: "EU", phone: 967 },
    { name: "Ethiopie", code: "ET", phone: 967 },
    { name: "Falkland/Malouines (Îles)", code: "FK", phone: 967 },
    { name: "Féroé, îles", code: "FO", phone: 967 },
    { name: "Fidji", code: "FJ", phone: 967 },
    { name: "Finlande", code: "FI", phone: 967 },
    { name: "France", code: "FR", phone: 967 },
    { name: "Gabon", code: "GA", phone: 967 },
    { name: "Gambie", code: "GM", phone: 967 },
    { name: "Géorgie", code: "GE", phone: 967 },
    { name: "Géorgie du sud et les îles Sandwich du sud", code: "GS", phone: 967 },
    { name: "Ghana", code: "GH", phone: 967 },
    { name: "Grèce", code: "GR", phone: 967 },
    { name: "Grenade", code: "GD", phone: 967 },
    { name: "Groenland", code: "GL", phone: 967 },
    { name: "Guadeloupe", code: "GP", phone: 967 },
    { name: "Guam", code: "GU", phone: 967 },
    { name: "Guatemala", code: "GT", phone: 967 },
    { name: "Guernesey", code: "GG", phone: 967 },
    { name: "Guinée", code: "GN", phone: 967 },
    { name: "Guinée-Bissau", code: "GW", phone: 967 },
    { name: "Guinée équatoriale", code: "GQ", phone: 967 },
    { name: "Guyana", code: "GY", phone: 967 },
    { name: "Guyane française", code: "GF", phone: 967 },
    { name: "Haïti", code: "HT", phone: 967 },
    { name: "Heard, Ile et MacDonald, îles", code: "HM", phone: 967 },
    { name: "Honduras", code: "HN", phone: 967 },
    { name: "Hong Kong", code: "HK", phone: 967 },
    { name: "Hongrie", code: "HU", phone: 967 },
    { name: "Île de Man", code: "IM", phone: 967 },
    { name: "Îles mineures éloignées des Etats-Unis", code: "UM", phone: 967 },
    { name: "Îles vierges britanniques", code: "VG", phone: 967 },
    { name: "Îles vierges des Etats-Unis", code: "VI", phone: 967 },
    { name: "Inde", code: "IN", phone: 967 },
    { name: "Indien (Territoire britannique de l'océan)", code: "IO", phone: 967 },
    { name: "Indonésie", code: "ID", phone: 967 },
    { name: "Iran, République islamique d'", code: "IR", phone: 967 },
    { name: "Iraq", code: "IQ", phone: 967 },
    { name: "Irlande", code: "ER", phone: 967 },
    { name: "Islande", code: "IS", phone: 967 },
    { name: "Israël", code: "IL", phone: 967 },
    { name: "Italie", code: "IT", phone: 967 },
    { name: "Jamaïque", code: "JM", phone: 967 },
    { name: "Japon", code: "JP", phone: 967 },
    { name: "Jersey", code: "JE", phone: 967 },
    { name: "Jordanie", code: "JO", phone: 967 },
    { name: "Kazakhstan", code: "KZ", phone: 967 },
    { name: "Kenya", code: "KE", phone: 967 },
    { name: "Kirghizistan", code: "KG", phone: 967 },
    { name: "Kiribati", code: "KI", phone: 967 },
    { name: "Koweït", code: "KW", phone: 967 },
    { name: "Lao, République démocratique populaire", code: "LA", phone: 967 },
    { name: "Lesotho", code: "LS", phone: 967 },
    { name: "Lettonie", code: "LV", phone: 967 },
    { name: "Liban", code: "LB", phone: 967 },
    { name: "Libéria", code: "LR", phone: 967 },
    { name: "Libye", code: "LY", phone: 967 },
    { name: "Liechtenstein", code: "LI", phone: 967 },
    { name: "Lituanie", code: "LT", phone: 967 },
    { name: "Luxembourg", code: "LU", phone: 967 },
    { name: "Macao", code: "MO", phone: 967 },
    { name: "Macédoine, l'ex-République yougoslave de", code: "MK", phone: 967 },
    { name: "Madagascar", code: "MG", phone: 967 },
    { name: "Malaisie", code: "MY", phone: 967 },
    { name: "Malawi", code: "MW", phone: 967 },
    { name: "Maldives", code: "MV", phone: 967 },
    { name: "Mali", code: "ML", phone: 967 },
    { name: "Malte", code: "MT", phone: 967 },
    { name: "Mariannes du nord, Iles", code: "MP", phone: 967 },
    { name: "Maroc", code: "MA", phone: 967 },
    { name: "Marshall, Iles", code: "MH", phone: 967 },
    { name: "Martinique", code: "MQ", phone: 967 },
    { name: "Maurice", code: "MU", phone: 967 },
    { name: "Mauritanie", code: "MR", phone: 967 },
    { name: "Mayotte", code: "YT", phone: 967 },
    { name: "Mexique", code: "MX", phone: 967 },
    { name: "Micronésie, Etats Fédérés de", code: "FM", phone: 967 },
    { name: "Moldova, République de", code: "MD", phone: 967 },
    { name: "Monaco", code: "MC", phone: 967 },
    { name: "Mongolie", code: "MN", phone: 967 },
    { name: "Monténégro", code: "ME", phone: 967 },
    { name: "Montserrat", code: "MS", phone: 967 },
    { name: "Mozambique", code: "MZ", phone: 967 },
    { name: "Myanmar", code: "MM", phone: 967 },
    { name: "Namibie", code: "NA", phone: 967 },
    { name: "Nauru", code: "NR", phone: 967 },
    { name: "Népal", code: "NP", phone: 967 },
    { name: "Nicaragua", code: "NI", phone: 967 },
    { name: "Niger", code: "NE", phone: 967 },
    { name: "Nigéria", code: "NG", phone: 967 },
    { name: "Niue", code: "NU", phone: 967 },
    { name: "Norfolk, Ile", code: "NF", phone: 967 },
    { name: "Norvège", code: "NO", phone: 967 },
    { name: "Nouvelle-Calédonie", code: "NC", phone: 967 },
    { name: "Nouvelle-Zélande", code: "NZ", phone: 967 },
    { name: "Oman", code: "OM", phone: 967 },
    { name: "Ouganda", code: "UG", phone: 967 },
    { name: "Ouzbékistan", code: "UZ", phone: 967 },
    { name: "Pakistan", code: "PK", phone: 967 },
    { name: "Palaos", code: "PW", phone: 967 },
    { name: "Palestine, Etat de", code: "PS", phone: 967 },
    { name: "Panama", code: "PA", phone: 967 },
    { name: "Papouasie-Nouvelle-Guinée", code: "PG", phone: 967 },
    { name: "Paraguay", code: "PY", phone: 967 },
    { name: "Pays-Bas", code: "NL", phone: 967 },
    { name: "Pays inconnu", code: "XX", phone: 967 },
    { name: "Pays multiples", code: "ZZ", phone: 967 },
    { name: "Pérou", code: "PE", phone: 967 },
    { name: "Philippines", code: "PH", phone: 967 },
    { name: "Pitcairn", code: "PN", phone: 967 },
    { name: "Pologne", code: "PL", phone: 967 },
    { name: "Polynésie française", code: "PF", phone: 967 },
    { name: "Porto Rico", code: "PR", phone: 967 },
    { name: "Portugal", code: "PT", phone: 967 },
    { name: "Qatar", code: "QA", phone: 967 },
    { name: "République arabe syrienne", code: "SY", phone: 967 },
    { name: "République centrafricaine", code: "CF", phone: 967 },
    { name: "Réunion", code: "RE", phone: 967 },
    { name: "Roumanie", code: "RO", phone: 967 },
    { name: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord", code: "GB", phone: 967 },
    { name: "Russie, Fédération de", code: "RU", phone: 967 },
    { name: "Rwanda", code: "RW", phone: 967 },
    { name: "Sahara occidental", code: "EH", phone: 967 },
    { name: "Saint-Barthélemy", code: "BL", phone: 967 },
    { name: "Saint-Kitts-et-Nevis", code: "KN", phone: 967 },
    { name: "Saint-Marin", code: "SM", phone: 967 },
    { name: "Saint-Martin (partie française)", code: "MF", phone: 967 },
    { name: "Saint-Martin (partie néerlandaise)", code: "SX", phone: 967 },
    { name: "Saint-Pierre-et-Miquelon", code: "PM", phone: 967 },
    { name: "Saint-Siège", code: "VA", phone: 967 },
    { name: "Saint-Vincent-et-les-Grenadines", code: "VC", phone: 967 },
    { name: "Sainte-Hélène, Ascension et Tristan da Cunha", code: "SH", phone: 967 },
    { name: "Sainte-Lucie", code: "LC", phone: 967 },
    { name: "Salomon, Iles", code: "SB", phone: 967 },
    { name: "Samoa", code: "WS", phone: 967 },
    { name: "Samoa américaines", code: "AS", phone: 967 },
    { name: "Sao Tomé-et-Principe", code: "ST", phone: 967 },
    { name: "Sénégal", code: "SN", phone: 967 },
    { name: "Serbie", code: "RS", phone: 967 },
    { name: "Seychelles", code: "SC", phone: 967 },
    { name: "Sierra Leone", code: "SL", phone: 967 },
    { name: "Singapour", code: "SG", phone: 967 },
    { name: "Slovaquie", code: "SK", phone: 967 },
    { name: "Slovénie", code: "SI", phone: 967 },
    { name: "Somalie", code: "SO", phone: 967 },
    { name: "Soudan", code: "SD", phone: 967 },
    { name: "Soudan du Sud", code: "SS", phone: 967 },
    { name: "Sri Lanka", code: "LK", phone: 967 },
    { name: "Suède", code: "SE", phone: 967 },
    { name: "Suisse", code: "CH", phone: 967 },
    { name: "Suriname", code: "SR", phone: 967 },
    { name: "Svalbard et île Jan Mayen", code: "SJ", phone: 967 },
    { name: "Swaziland", code: "SZ", phone: 967 },
    { name: "Tadjikistan", code: "TJ", phone: 967 },
    { name: "Taïwan, Province de Chine", code: "TW", phone: 967 },
    { name: "Tanzanie", code: "TZ", phone: 967 },
    { name: "Tchad", code: "TD", phone: 967 },
    { name: "Tchécoslovaquie", code: "CS", phone: 967 },
    { name: "Tchèque, République", code: "SZ", phone: 967 },
    { name: "Terres australes françaises", code: "TF", phone: 967 },
    { name: "Thaïlande", code: "TH", phone: 967 },
    { name: "Timor-Leste", code: "TL", phone: 967 },
    { name: "Togo", code: "TG", phone: 967 },
    { name: "Tokelau", code: "TK", phone: 967 },
    { name: "Tonga", code: "TO", phone: 967 },
    { name: "Trinité-et-Tobago", code: "TT", phone: 967 },
    { name: "Tunisie", code: "TN", phone: 967 },
    { name: "Turkménistan", code: "TM", phone: 967 },
    { name: "Turks-et-Caïcos (Îles)", code: "TC", phone: 967 },
    { name: "Turquie", code: "TR", phone: 967 },
    { name: "Tuvalu", code: "TV", phone: 967 },
    { name: "Ukraine", code: "UA", phone: 967 },
    { name: "URSS", code: "SU", phone: 967 },
    { name: "Uruguay", code: "UY", phone: 967 },
    { name: "Vanuatu", code: "VU", phone: 967 },
    { name: "Vatican", code: "VA", phone: 379 },
    { name: "Venezuela", code: "VE", phone: 967 },
    { name: "Viet Nam", code: "VN", phone: 967 },
    { name: "Viet Nam (Sud)", code: "VD", phone: 967 },
    { name: "Wallis et Futuna", code: "WF", phone: 967 },
    { name: "Yémen", code: "YE", phone: 967 },
    { name: "Yougoslavie", code: "YU", phone: 967 },
    { name: "Zambie", code: "ZM", phone: 967 },
    { name: "Zimbabwe", code: "ZW", phone: 967 }

];

// Assurez-vous que select_box est correctement défini
const select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');


 let options = null;

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
    options = document.querySelectorAll('.option');
});

function selectOption(){
	console.log(this);
	const icon = this.querySelector('.iconify').cloneNode(true),
		phone_code = this.querySelector('strong').cloneNode(true);

	selected_option.innerHTML = '';
	selected_option.append(icon, phone_code);

	//mettre le code du pays dans le champs de saisi
	input_box.value = phone_code.innerText;
	//desactiver l'affichage des pays après avoir selectionner votre pays
	select_box.classList.remove('active');
    selected_option.classList.remove('active');
}

selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
});

options.forEach(option=>option.addEventListener('click', selectOption));
