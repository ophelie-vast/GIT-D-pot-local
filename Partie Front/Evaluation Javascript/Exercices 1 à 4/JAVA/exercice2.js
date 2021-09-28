// Déclaration de la fonction table_multiplication //
function table_multiplication(nombre)
		{
		var i;
		for (i=0; i<=10; i++) {
		    resultat=nombre*i;
			document.write(nombre+" x "+i+"="+nombre*i+"<br>");
			                  }
		}

// Affichage de la table de multplication choisie //		
nombre=window.prompt("Entrez le numéro de la table (un entier):");
			table_multiplication(nombre);