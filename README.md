# NPM PACKAGES TINKERING


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
    
 

# TODO

Crear un paquet npmTinkering i utilitar el paquet que s'ha creat a npmjs.org amb el nom de quimg-hello-nd.

Instal·lar:

    npm install quimgc-hello-ng

Provar que puc imprimeix un hello + nomFactory.

Al fitxer.js s'ha d'afegir:

    var nomVar =  require('quimgc-hello-ng')
    
