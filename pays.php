<?php 
$url = 'https://restcountries.com/v3.1/all';
$data = file_get_contents($url);
$countries = json_decode($data, true);

foreach ($countries as $country) {
    $name = $country['name']['common'];
    $isoCode = $country['cca2'];
    $phoneCode = $country['callingCodes'][0];

    // Faites quelque chose avec les informations récupérées
    echo "Pays: $name, Code ISO: $isoCode, Code Téléphonique: +$phoneCode<br>";
}