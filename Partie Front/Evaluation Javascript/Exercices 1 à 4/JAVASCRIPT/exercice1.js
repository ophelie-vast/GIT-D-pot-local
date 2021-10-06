// Déclaration des variables //
var jeunes=0;
var adultes=0;
var vieux=0;
var age;


// Fenêtre qui s'affiche pour entrer l'âge //
do 
{
age = window.prompt("Veuillez entrez un âge");

// Pour les jeunes //
if ( age <20) 
{
jeunes++;
console.log(jeunes);
}

// Pour les vieux //
else if (age >=40) {
vieux++;
console.log(vieux);
}

// Pour les adultes //
else if ((age >=20 && age <= 40 )) {
adultes++;
console.log(adultes);
}
}

// Centenaires //
while (age < 100);


// Affichage du résultat //
window.alert("Il y a " + "" + jeunes + "" + " jeune(s)\n "  + adultes + "" + " adulte(s)\n " + " dont " + "" + vieux + "" +" vieux\n " + " et "+ " 1 " + "" + " centenaire ");