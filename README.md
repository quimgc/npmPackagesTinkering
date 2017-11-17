#NPM PACKAGES TINKERING


Com actualitzar node a la última versió:

    npm install npm@latest -g
 

La web de dependències npm és:

    www.npmjs.com

Per canviar els permisos dels de npm si algun cop s'ha executat amb sudo:

    sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
    


## Com funciona

NODE.JS->COMMON.JS

utilitza els require(./path);


## Servidor web que s'utilitza

Instal·lació:

    npm install -g live-server

Per executar-lo:

    live-server .

Executar node per terminal:

    node


## Mòduls

Si comença per una barra (/) o per punt barra (./) s'anomena mòdul local.

Tota la resta és modul npm


# Publicació de paquets npm

Per crear l'usuari:

    http://acacha.org/mediawiki/Node_Packaged_Modules#Publicar_paquets


# REQUIRE
    
Els require comencen amb / o ../ o ./ -> s'està important un mòdul, NO UN PAQUET.

Si es fa: require 'axios' (per exemple) -> s'està important un paquet.
   
# IMPORT


## SEMVER

**Semantic Versioning**

URL:

    https://docs.npmjs.com/getting-started/semantic-versioning
    http://semver.org/

Quan es crea una versió s'ha de seguir:

MAJOR.MINOR.PATCH

exemple:

    2.1.1

MAJOR: quan es fan canvis incompatibles a la API, o quan es canvia el que es retorna.

MINOR: quan s'afegeix noves funcionalitats, no afecta al funcionament de l'api.

PATCH: quan es corregeixen errors/bugs.


## Per provar un fitxer JS.

    node nomfitxer.js


# Per publicar una versió nova amb npm:

    npm version patch


Per pujar-lo:

    git push --tags
    npm publish
    
    
# WEBPACK

Instal·lació en global:

    npm isntall webpack -g
 

## Per esborrar del git i no del local:

    git rm -rf --cached node_modules/
    
# vue-cli
