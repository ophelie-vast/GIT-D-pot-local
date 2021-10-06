var check = document.getElementById('envoie');
check.addEventListener("click", function verif(event)
{

    var Identité = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    var cp = /(^[0-9]{5}$)/;
    var adr = /^[0-9]+[a-zA-Z-\s]+$/;
    var Localisation = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;


    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var sexe1 = document.getElementById("inlineRadio1").checked;
    var sexe2 = document.getElementById("inlineRadio2").checked;
    var sexe3 = document.getElementById("inlineRadio3").checked;
    var date = document.getElementById("date").value;
    var codepostal = document.getElementById("codepostal").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var accept = document.getElementById("accept").checked;
    var question = document.getElementById("question").value;
    

    
    
    // Pour le nom //
    if (document.getElementById("nom").value == "") 
    {
       alert ("Veuillez saisir votre nom !") ;
       event.preventDefault() ;
       
    }
    else if (!Identité.test(nom))
    {
        document.getElementById("erreurName").textContent = "Veuillez remplir cette case avec des caractères spécifiques !";
        document.getElementById("erreurName").style.color = 'red';
        event.preventDefault();  
    }
    else
    {
        document.getElementById("erreurName").textContent = "Ce champ est valide.";
        document.getElementById("erreurName").style.color = 'blue';
    }


    
    // Pour le prénom //
    if (document.getElementById("prenom").value == "") 
    {
       alert ("Veuillez saisir votre prénom !") ;
       event.preventDefault() ;
       
    }
    else if (!Identité.test(prenom))
    {
        document.getElementById("erreurPrenom").textContent = "Veuillez remplir cette case avec des caractères spécifiques !";
        document.getElementById("erreurPrenom").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurPrenom").textContent = "Ce champ est valide.";
        document.getElementById("erreurPrenom").style.color = 'blue';
    }



    // Pour le sexe //
    if (sexe1 == false && sexe2 == false && sexe3 == false)
    {
        document.getElementById("erreurSexe").textContent = "Veuillez sélectionner un de ces 3 choix ci-dessus !";
        document.getElementById("erreurSexe").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurSexe").textContent = "Ce champ est valide.";
        document.getElementById("erreurSexe").style.color = 'blue';
    }



    // Pour la date de naissance //
    if (document.getElementById("date").value == "") 
    {
       alert ("Veuillez saisir votre date de naissance !") ;
       event.preventDefault() ;
       
    }
    else if (!birth.test(date))
    {
        document.getElementById("erreurDate").textContent = "Veuillez saisir une date de naissance valide !";
        document.getElementById("erreurDate").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurDate").textContent = "Ce champ est valide.";
        document.getElementById("erreurDate").style.color = 'blue';
    }



    // Pour le code postal //
    if (document.getElementById("codepostal").value == "") 
    {
       alert ("Veuillez saisir votre code postal !") ;
       event.preventDefault() ;
       
    }
    else if (!cp.test(codepostal))
    {
        document.getElementById("erreurCP").textContent = "Veuillez saisir un code postal valide !";
        document.getElementById("erreurCP").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurCP").textContent = "Ce champ est valide.";
        document.getElementById("erreurCP").style.color = 'blue';
    }



    // Pour l'adresse //
    if (document.getElementById("adresse").value == "") 
    {
       alert ("Veuillez saisir votre adresse !") ;
       event.preventDefault() ;
       
    }
    else if (!adr.test(adresse)) 
    {
        document.getElementById("erreurAdresse").textContent = "Veuillez saisir une adresse valide !";
        document.getElementById("erreurAdresse").style.color = 'red';
        event.preventDefault();
    }
    else 
    {
        document.getElementById("erreurAdresse").textContent = "Ce champ est valide.";
        document.getElementById("erreurAdresse").style.color = 'blue';
    }



    // Pour la ville //
    if (document.getElementById("ville").value == "") 
    {
       alert ("Veuillez saisir votre ville !") ;
       event.preventDefault() ;
       
    }
    else if (!Localisation.test(ville)) 
    {
        document.getElementById("erreurVille").textContent = "Veuillez saisir une ville valide !";
        document.getElementById("erreurVille").style.color = 'red';
        event.preventDefault();
    }
    else 
    {
        document.getElementById("erreurVille").textContent = "Ce champ est valide.";
        document.getElementById("erreurVille").style.color = 'blue';
    }



    // Pour le mail //
    if (document.getElementById("mail").value == "") 
    {
       alert ("Veuillez saisir votre adresse e-mail !") ;
       event.preventDefault() ;
       
    }
    else if (!mail.test(email)) 
    {
        document.getElementById("erreurMail").textContent = "L'adresse e-mail saisie n'est pas valide !";
        document.getElementById("erreurMail").style.color = 'red';
        event.preventDefault();
    }
    else 
    {
        document.getElementById("erreurMail").textContent = "Ce champ est valide.";
        document.getElementById("erreurMail").style.color = 'blue';
    }



    // Pour choix du sujet //
    if (sujet == 1)
    {
        document.getElementById("erreurSujet").textContent = "Veuillez selectionner le sujet de votre demande !";
        document.getElementById("erreurSujet").style.color = 'red';
        event.preventDefault();
    }
    else 
    {
        document.getElementById("erreurSujet").textContent = "Ce champ est valide.";
        document.getElementById("erreurSujet").style.color = 'blue';
    }



    //Pour le traitement informatique (case à cocher) //
    if (accept != true) 
    {
        document.getElementById("erreurAccept").textContent = "Veuillez accepter le traitement informatique !";
        document.getElementById("erreurAccept").style.color = 'red';
        event.preventDefault();
    }
    else 
    {
        document.getElementById("erreurAccept").textContent = "Ce champ est valide.";
        document.getElementById("erreurAccept").style.color = 'blue';
    }


    
    // Pour la question //
    if (document.getElementById("question").value == "") 
    {
       alert ("Veuillez saisir votre question !") ;
       event.preventDefault() ;
    }
    else 
    {
        document.getElementById("erreurQuest").textContent = "Ce champ est valide.";
        document.getElementById("erreurQuest").style.color = 'blue';
    }
});