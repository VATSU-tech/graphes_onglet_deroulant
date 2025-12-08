import { etudiants } from "./donnees";

export function afficher(couleur:string):void{
  const app = document.querySelector('body') as HTMLBodyElement;

  app.style.backgroundColor = couleur
}

export function afficherEtudiant():void{
    const ul = document.createElement("ul");
    ul.className = "etudiants";

    for (const etudiant of etudiants) {
        const li = document.createElement("li");
        li.textContent = `${etudiant.nom} ${etudiant.post_nom} ${etudiant.prenom} ${etudiant.matricule}`;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}