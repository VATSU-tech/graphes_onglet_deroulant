export interface MenuNode {
    title: string;
    action?: () => void;
    children?: MenuNode[];
}

export interface etudiant{
    nom:string;
    post_nom:string;
    prenom:string;
    matricule:string;
    
}
