"------------exercice 16-----------"
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  
}
  var x = getRandomInt(20);
  console.log(x)
  if(x < 7) {
      console.log("Petit")
  }
  else if(x > 7, x < 15) {
    console.log("Moyen")
}
if(x > 15) {
  console.log("Grand")
}
"-----------------exercice 17-------------"

var readlineSync = require('readline-sync');
var mytest = parseInt(readlineSync.question('Saisir le chiffre 13 : '));

while (mytest != 13) {
  
  console.log("Vous n'avez pas saisi le bon chiffre ");
  mytest = parseInt(readlineSync.question('Saisir le chiffre 13 : '));
  
}
console.log("Bravo vous avez saisi un " + mytest);
"-------------exercice 18-------------------"

for (let y = 1; y < 11; y++) {
  for (let z = 1; z < 11; z++) {
  var calcul = y + z; 
  console.log("etape " + y + " : " + z + " " + calcul);
}
 
}
/*
for (let z = 1; z < 11; z++) {
  var y = 0;
  var calcul = y + z; 
  console.log("etape " + y + " : " + calcul);
  
}
*/



