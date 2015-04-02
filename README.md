# Formula 1 API #

Angular JS Yeoman erabiliz ikasteko datuak API desberdinetatik datuak ekarriz eta tratatuz bistetan erakusteko.

### Erabilitako API-a###

* Ergast F1 API: [http://ergast.com/mrd/](http://ergast.com/mrd/)

### Erabiltzeko argibideak ###

Kode hau erabili ahal izateko klonatu "git clone git@bitbucket.org:amugika/countries-angular-js.git" bidez edo deskargatu.

Kodea martxan jartzeko Node JS instalaturik izan behar da ([http://nodejs.org](http://nodejs.org)) npm funtzionatu ahal izateko.

Jeitsitakoan terminalean:

* npm install
* npm install grunt-contrib-imagemin@0.1.4 (Running "imagemin:dist" (imagemin) task exekutatzen dugunean "grunt build" egitean errorea ekiditeko)
* bower install
* grunt serve

###Proiektua zerbitzari batean###

* grunt build

Eta jarraian kopiatu hor sortu den "dist" direktorioa zure zerbitzari batera, berdin da Apache, nginx edo dena delakoa erabiltzea, ez du osagai dinamikorik, guztia HTML, CSS eta JavaScript kodea da.

Instalaturik dauden angularjs-eko plugin-ak hauek dira:

* **Webgune eleanitza egiteko:** http://pascalprecht.github.io/slides/i18n-with-angular-translate/#/12/2
* **Google Maps mapak gehitzeko**: https://ngmap.github.io/

Gehituko diren JS fitxategiak (badaezpada, agian ez ditu hartuko...)

<script src="bower_components/angular-translate/angular-translate.js"></script>
<script src="http://maps.google.com/maps/api/js"></script>
<script src="https://rawgit.com/angular-ui/angular-google-maps/2.0.19/dist/angular-google-maps.min.js"></script>
 <script src="bower_components/ngmap/build/scripts/ng-map.js"></script>