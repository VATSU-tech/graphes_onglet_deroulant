import { afficher } from "./fonctions";

export interface MenuNode {
    title: string;
    action?: () => void;
    children?: MenuNode[];
}

interface etudiant{
    nom:string;
    post_nom:string;
    prenom:string;
    matricule:string;
    
}

export const graphMenu: MenuNode[] = [
    {
        title: "CATEGORIES",
        children: [
            { title: "Work 1", action: () => alert("Work 1 executed!") },
            { title: "Work 2", action: () => alert("Work 2 executed!") },
            {
                title: "Work 3",
                children: [
                    { title: "Work 31", action: () => alert("Work 31!") },
                    { title: "Work 32", action: () => alert("Work 32!") },
                    {
                        title: "Work 33",
                        children: [
                            { title: "rouge", action: () => afficher('red') },
                            { title: "bleu", action: () => afficher('blue') },
                            { title: "jaune", action: () => afficher('yellow') },
                        ]
                    }
                ]
            }
        ]
    },

    {
        title: "WORK",
        children: [
            { title: "Design", action: () => alert("Design clicked!") },
            { title: "Photos", action: () => alert("Photos clicked!") },
        ]
    },

    { title: "ABOUT", action: () => alert("ABOUT page") },
    { title: "CONTACT", action: () => alert("CONTACT page") }
];

export const etudiants:etudiant[] = [
    {
        nom:"katsuva",
        post_nom:"malambo",
        prenom:"eric",
        matricule:"4643"
    },
    {
        nom:"kasereka",
        post_nom:"tsongo",
        prenom:"jacques",
        matricule:"4612"
    },
    {
        nom:"kasereka",
        post_nom:"bahwere",
        prenom:"jospin",
        matricule:"4611"
    },
    {
        nom:"kanyere",
        post_nom:"nice",
        prenom:"faraja",
        matricule:"4620"
    }
];