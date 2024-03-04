
const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Afrique du Sud", code: "ZA", phone: 243 },
    { name: "Åland, Îles", code: "AX", phone: 263 },
    { name: "Albanie", code: "AL", phone: 260 },
    { name: "Algérie", code: "DZ", phone: 225 },
    { name: "Allemagne", code: "DE", phone: 967 },
    { name: "Allemagne de l'EST", code: "DD", phone: 967 },
    { name: "Andorre", code: "AD", phone: 967 },
    { name: "Angola", code: "AO", phone: 967 },
    { name: "Anguilla", code: "AI", phone: 967 },
    { name: "Antarctique", code: "AQ", phone: 967 },
    { name: "Antigua et Barbuda", code: "AG", phone: 967 },
    { name: "Antilles néerlandaises", code: "AN", phone: 967 },
    { name: "Arabie Saoudite", code: "SA", phone: 967 },
    { name: "Argentine", code: "AR", phone: 967 },
    { name: "Arménie", code: "AM", phone: 967 },
    { name: "Aruba", code: "AW", phone: 967 },
    { name: "Australie", code: "AU", phone: 967 },
    { name: "Autriche", code: "AT", phone: 967 },
    { name: "Azerbaïdjan", code: "AZ", phone: 967 },
    { name: "Bahamas", code: "BS", phone: 967 },
    { name: "Bahrein", code: "BH", phone: 967 },
    { name: "Bangladesh", code: "BD", phone: 967 },
    { name: "Barbade", code: "BB", phone: 967 },
    { name: "Bélarus", code: "BY", phone: 967 },
    { name: "Belgique", code: "BE", phone: 967 },
    { name: "Bélize", code: "BZ", phone: 967 },
    { name: "Bénin", code: "BJ", phone: 967 },
    { name: "Bermudes", code: "BM", phone: 967 },
    { name: "Bhoutan", code: "BT", phone: 967 },
    { name: "Bolivie (État plurinational de)", code: "BO", phone: 967 },
    { name: "Bonaire, Saint-Eustache et Saba", code: "BQ", phone: 967 },
    { name: "Bosnie-Herzégovine", code: "BA", phone: 967 },
    { name: "Botswana", code: "BW", phone: 967 },
    { name: "Bouvet, Ile", code: "BV", phone: 967 },
    { name: "Brésil", code: "BR", phone: 967 },
    { name: "Brunéi Darussalam", code: "BN", phone: 967 },
    { name: "Bulgarie", code: "BG", phone: 967 },
    { name: "Burkina Faso", code: "BF", phone: 967 },
    { name: "Burundi", code: "BI", phone: 967 },
    { name: "Cabo Verde", code: "CV", phone: 967 },
    { name: "Caïmans, Iles", code: "KY", phone: 967 },
    { name: "Cambodge", code: "KH", phone: 967 },
    { name: "Cameroun", code: "CM", phone: 967 },
    { name: "Canada", code: "CA", phone: 967 },
    { name: "Chili", code: "CL", phone: 967 },
    { name: "Chine", code: "CN", phone: 967 },
    { name: "Christmas, île", code: "CX", phone: 967 },
    { name: "Chypre", code: "CY", phone: 967 },
    { name: "Cocos/Keeling (Îles)", code: "CC", phone: 967 },
    { name: "Colombie", code: "CO", phone: 967 },
    { name: "Comores", code: "KM", phone: 967 },
    { name: "Congo", code: "CG", phone: 967 },
    { name: "Congo, République démocratique du", code: "CD", phone: 243 },
    { name: "Cook, Iles", code: "CK", phone: 967 },
    { name: "Corée, République de", code: "KR", phone: 967 },
    { name: "Corée, République populaire démocratique de", code: "KP", phone: 967 },
    { name: "Costa Rica", code: "CR", phone: 967 },
    { name: "Côte d'Ivoire", code: "CI", phone: 967 },
    { name: "Croatie", code: "HR", phone: 967 },
    { name: "Cuba", code: "CU", phone: 967 },
    { name: "Curaçao", code: "CW", phone: 967 },
    { name: "Danemark", code: "DK", phone: 967 },
    { name: "Djibouti", code: "DJ", phone: 967 },
    { name: "Dominicaine, République", code: "DO", phone: 967 },
    { name: "Dominique", code: "DM", phone: 967 },
    { name: "Egypte", code: "EG", phone: 967 },
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
    { name: "Haïti", code: "HT", phone: 967 }
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
