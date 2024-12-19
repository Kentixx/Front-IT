document.getElementById('enter_button').addEventListener('click', function() {
    alert('Эта функция пока что не работает :((');
});

/*document.querySelector('article:first-child button').addEventListener('click', function() {
    alert('Вы нажали кнопку "Записаться"');

});


document.querySelector('article#form form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма отправлена');

});

async function loadCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;

    const characterCardsContainer = document.getElementById('character-cards');
    characterCardsContainer.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        const name = document.createElement('h3');
        name.textContent = character.name;

        const species = document.createElement('p');
        species.textContent = `Species: ${character.species}`;

        const status = document.createElement('p');
        status.textContent = `Status: ${character.status}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(species);
        card.appendChild(status);

        characterCardsContainer.appendChild(card);
    });
}

const buttonAPI = document.getElementById("buttonForApi");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

buttonAPI.addEventListener("click", function() {
    loadCharacters();
    modal.style.display = "block";
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});*/