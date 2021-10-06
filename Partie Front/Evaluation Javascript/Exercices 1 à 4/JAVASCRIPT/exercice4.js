// Déclaration des variables //
var pu = window.parseInt(prompt("Veuillez saisir le prix unitaire :"));                  
var qtecom = window.parseInt(prompt("Veuillez saisir la quantité commandée :"));          
var tot = (pu*qtecom);
var rem=0;
var totrem=0;
var pap=0;
var port = 0;


// Pour le total //
function total (tot)
{
    var tot = (pu*qtecom);
    return tot
}
 
// Pour la remise //
function remise (rem)
{
    if (tot >= 100 && tot <= 200)
    {
    rem = (tot * 0.05);
    totrem = (tot-rem);
    }
    else if (tot > 200)
    {
        rem = (tot * 0.10); 
        totrem = (tot-rem);
    }
    else if (tot < 100) 
    {
        rem = 0;
        totrem = (tot-rem);
    }
return rem
}
 
// Pour les frais de port //
function FraisDePort (port)
{
    if ( totrem < 500)
{
        port = (totrem * 0.02);
    if (port < 6) port = 6;
        pap = (totrem + port);
}
else 
{
    port = 0;
    pap = (totrem+port);
}

return port
}


total (tot);
remise (totrem);
FraisDePort (port);
document.write("Le total de votre commande est de : €"+tot+ ". Avec la remise, vous en avez pour : €"+totrem+ ". En ajoutant les frais de port (ou pas) votre commande revient à : €"+pap);