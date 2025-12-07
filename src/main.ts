interface MenuNode {
    title: string;
    action?: () => void;
    children?: MenuNode[];
}

function afficher(couleur:string):void{
  const app = document.querySelector('body') as HTMLBodyElement;

  app.style.backgroundColor = couleur
}

const graphMenu: MenuNode[] = [
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

function buildSubMenu(nodes: MenuNode[]): HTMLUListElement {
    const ul = document.createElement("ul");
    ul.className = "submenu";

    for (const node of nodes) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = node.title;
        a.href = "#";

        // Attacher action si présente
        if (node.action) {
            a.onclick = (e) => {
                e.preventDefault();
                node.action?.();
            };
        }

        li.appendChild(a);

        // Si l'élément a des enfants → récursion
        if (node.children && node.children.length > 0) {
            li.appendChild(buildSubMenu(node.children));
        }

        ul.appendChild(li);
    }

    return ul;
}

function buildMenu(): void {
    const root = document.getElementById("menuRoot");

    if (!root) {
        console.error("Impossible de trouver #menuRoot");
        return;
    }

    graphMenu.forEach(node => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = node.title;
        a.href = "#";

        if (node.action) {
            a.onclick = (e) => {
                e.preventDefault();
                node.action?.();
            };
        }

        li.appendChild(a);

        if (node.children) {
            li.appendChild(buildSubMenu(node.children));
        }

        root.appendChild(li);
    });
}

buildMenu();
