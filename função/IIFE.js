//IIFE-> Immediately Function Expression

//coloque a função entre parênteses para executá-la 

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
}) ()

//nada que está na função
//chega ao escopo global do arquivo