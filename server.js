
//zaimportowanie frameworka oraz potrzebnego modulu
import express from 'express';
import fetch from'node-fetch';

// ustawienie formatu wczytywania daty
const DATA = new Date().toLocaleDateString('pl-PL');

//funkcja pozyskujaca adres IP uzytkownika oraz jego lokalny czas przy uzyciu specjalnego API
function get_Ip(ip) {
    // wykorzystanie API do pobrania IP i ustalenia czasu lokalnego uzytkownika
    var time = fetch(`http://ipapi.co/$(ip)/timezone`);
    // ustawienie lokalnego czasu na podstawie IP uzytkownika
    var local_Date = new Date().toLocaleString('pl-PL', {time});
    // zrocenie aktualnego czasu
    return `${local_Date}`;
}
// Wykorzystanie frameworka express w aplikacji
const app = express();
// Ustawienie konkretnych, wymaganych logow 
console.log(`Data uruchomienia:${DATA}`);
console.log(`Uzytkownik: Weronika Mroz`);
console.log(`Uruchomiono na porcie TCP: 8080`);

app.set('trust proxy', true)
app.use((req, res) => {
  // pobranie lokalnego czasu na podstawie IP uzytkownika
  var local_Date = get_Ip(req.ip);
  // wyswietlenie informacji o IP oraz czasu lokalnego uytkownika na stronie
 res.send(`<b>Twoje IP to:</b>${req.ip}`+`<p></p>`+`<b> Twoja lokalna data : </b> ${local_Date}`);
});
//ustawienie nasluchiwania aplikacji na porcie 8080
app.listen(8080, '0.0.0.0');
