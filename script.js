const boton = document.getElementById("boton-loco");

if (boton) {
  boton.addEventListener("click", () => {
    const color = `hsl(${Math.random() * 360}, 80%, 55%)`;
    boton.style.backgroundColor = color;
  });
}

const heroes = [
    {
        name: "Spiderman",
        realName: "Peter Parker",
        avatar: "🕷️",
        powers: ["Agilidad sobrehumana", "Sentido arácnido", "Lanza telarañas"],
        description: "Joven vengador que protege Nueva York balanceándose entre los edificios."
    },
    {
        name: "Hulk",
        realName: "Bruce Banner",
        avatar: "💪",
        powers: ["Fuerza descomunal", "Regeneración", "Resistencia extrema"],
        description: "Científico que se transforma en un gigante verde cuando se enfurece."
    },
    {
        name: "Capitán América",
        realName: "Steve Rogers",
        avatar: "🛡️",
        powers: ["Fuerza y resistencia mejoradas", "Estratega militar", "Escudo indestructible"],
        description: "Súper soldado de la Segunda Guerra Mundial y líder de los Vengadores."
    },
    {
        name: "Iron Man",
        realName: "Tony Stark",
        avatar: "🤖",
        powers: ["Traje de armadura tecnológica", "Genio inventor", "Vuelo y repulsores"],
        description: "Millonario e ingeniero que combate el crimen con su armadura de alta tecnología."
    },
    {
        name: "Caballero Luna",
        realName: "Marc Spector",
        avatar: "🌙",
        powers: ["Fuerza variable según la luna", "Múltiples identidades", "Experto en combate"],
        description: "Avatar del dios egipcio Khonshu, protector de los que viajan de noche."
    }
];

function createCard(hero) {
    const card = document.createElement("div");
    card.className = "card";

    const avatar = document.createElement("div");
    avatar.className = "card-avatar";
    avatar.textContent = hero.avatar;

    const name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = hero.name;

    const realName = document.createElement("p");
    realName.className = "card-realname";
    realName.textContent = hero.realName;

    const powers = document.createElement("ul");
    powers.className = "card-powers";
    hero.powers.forEach(power => {
        const li = document.createElement("li");
        li.textContent = power;
        powers.appendChild(li);
    });

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = hero.description;

    const button = document.createElement("button");
    button.className = "card-button";
    button.textContent = "Ver más";
    button.addEventListener("click", () => {
        description.classList.toggle("visible");
        button.textContent = description.classList.contains("visible") ? "Ver menos" : "Ver más";
    });

    card.append(avatar, name, realName, powers, description, button);
    return card;
}

function renderHeroes() {
    const container = document.getElementById("cards-container");
    heroes.forEach(hero => {
        container.appendChild(createCard(hero));
    });
}

if (document.getElementById("cards-container")) {
    renderHeroes();
}

const botonAgregarHeroe = document.getElementById("botonAgregarHeroe");

const nuevosHeroes = [
    {
        name: "Mujer Maravilla",
        realName: "Diana Prince",
        avatar: "⚔️",
        powers: [
            "Fuerza sobrehumana",
            "Vuelo",
            "Habilidad con espada"
        ],
        description: "Heroína amazona que protege al mundo."
    },
    {
        name: "Thor",
        realName: "Thor Odinson",
        avatar: "⚡",
        powers: [
            "Control del trueno",
            "Fuerza sobrehumana",
            "Mjolnir"
        ],
        description: "Dios del trueno y poderoso guerrero de Asgard."
    },
    {
        name: "Flash",
        realName: "Barry Allen",
        avatar: "⚡",
        powers: [
            "Supervelocidad",
            "Reflejos sobrehumanos",
            "Viajes en el tiempo"
        ],
        description: "Héroe capaz de moverse a velocidades increíbles y proteger Central City."
    },
    {
        name: "Wolverine",
        realName: "Logan",
        avatar: "🐺",
        powers: [
            "Regeneración",
            "Garras de adamantium",
            "Sentidos mejorados"
        ],
        description: "Mutante con habilidades regenerativas y poderosas garras de adamantium."
    },
    {
        name: "Pantera Negra",
        realName: "T'Challa",
        avatar: "🐈‍⬛",
        powers: [
            "Fuerza mejorada",
            "Agilidad",
            "Traje de vibranium"
        ],
        description: "Rey de Wakanda y héroe que protege su nación con tecnología avanzada."
    }
];

let indiceHeroe = 0;

if (botonAgregarHeroe) {
    botonAgregarHeroe.addEventListener("click", () => {

        if (indiceHeroe < nuevosHeroes.length) {

            const nuevoHeroe = nuevosHeroes[indiceHeroe];

            const container = document.getElementById("cards-container");

            const nuevaCard = createCard(nuevoHeroe);

            container.appendChild(nuevaCard);

            indiceHeroe++;

            if (indiceHeroe === nuevosHeroes.length) {
                botonAgregarHeroe.disabled = true;
                botonAgregarHeroe.textContent = "No hay más héroes";
            }
        }
    });
}