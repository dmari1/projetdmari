function exercice1() {
    var a = 1;
    var b = 5;
     console.log(a, b);
    a = 5;
    b = 1;
     console.log(a, b);
}
exercice1();


function exercice2() {
    var nom = "Toto";
    var age = 30;
    var homme = true;
    
    nom = "toto";
    age = 30;
    homme = "homme";
    
    console.log(nom, age, homme);
}
exercice2();


 function exercice3() {
    var readlineSync = require('readline-sync');

    var answer = readlineSync.question('Puissance voulue ? ');
    console.log(2 + ' à la puissance ' + answer + ' = ' + Math.pow(2, answer));
 }
 exercice3();


  function exercice4() {
    var readlineSync = require('readline-sync');

 
    var first = readlineSync.question('Quel est votre nom ?');
    var second = readlineSync.question('Quel est votre prenom ?');
    var third = readlineSync.question('Quel est votre age ?');
   
   console.log("------------------------------------------------");
   console.log("----------------BIENVENUE-----------------------");
   console.log("------------------------------------------------");
   
    console.log("Votre Nom est :" + first);
    console.log("Votre prenom est : " + second);
    console.log("Vous etes agé de " + third + " années");
  }
  exercice4();


function exercice5() {
    var readlineSync = require('readline-sync');

    var x = readlineSync.question('Quelle table de multiplication voulez vous afficher ? ');
    
    for (let y = 0; y < 11; y++) {
      var total = x * 3;
      console.log(x + " * " + 3 + " = " + total);
    }
} 
exercice5();  


function exercice6() {
    var readlineSync = require('readline-sync');
    var first1 = parseInt(readlineSync.question('Quel nombre voulez vous saisir '));
    
    
    while (!first1) {
        console.log("Veuillez recommencer la saisie , vous devez saisir un nombre ");
        first1 = parseInt(readlineSync.question('Quel nombre voulez vous saisir '));
    
    } 
    console.log("Le chiffre saisi est : " + first1);
}
exercice6();


function exercice7() {
  var readlineSync = require('readline-sync');
  
  var a = parseInt(readlineSync.question('Choisir un nombre divisible par 3 '));
  var division = a / 3; 

  if (a%3 == 0) {
    console.log("Le résultat de " + a + " / " +  3  + " = " + division);
  } else {
    console.log("Le chiffre " +  a  + " n'est pas divisible par 3 ");
  }
}
exercice7();


function exercice8() {
  var readlineSync = require('readline-sync');
  var lettre = readlineSync.question('Verifie ton mot : ')
  if (lettre.length > 8) {
    console.log("Le mot fait plus de 8 caractere")
  } else {
    console.log("Le mot contient : " + lettre.length + " caractere");
  }
     
}
exercice8()



function exercice9() {
  var voiture = {
    immatriculation : "AB1234CD",
    marque : "yotota",
    annee : 2002
  }
  console.log("La voiture d'immatriculation" + " " + voiture["immatriculation"] + "," + " " + "de marque" + " " +voiture["marque"]  + "," + " " +"date de"+ " " +voiture["annee"]);   
}
exercice9()



function exercice10() {
  var personnage = {};
  var readlineSync = require('readline-sync');
  personnage.nom = readlineSync.question('Quel est le nom ? ');
  personnage.age = parseInt(readlineSync.question('Quel age ? '));
  
  console.log(personnage);
}
exercice10()






  













 

