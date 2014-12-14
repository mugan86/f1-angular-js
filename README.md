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