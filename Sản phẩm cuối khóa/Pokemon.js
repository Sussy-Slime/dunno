const myNickName = document.getElementById('inputName');
    h3 = document.querySelector("h3");
    h3.innerHTML = localStorage.getItem('myNickName');

function display() {
    localStorage.setItem('myNickName', myNickName.value);
    localStorage.setItem('value', myEmail.value);
    h3.innerHTML = localStorage.getItem('value');
    h3.innerHTML = localStorage.getItem('myNickName');
}

PikachuWish = "Find happiness in the little things in life, and you will notice that happiness will never leave your side.";
ArcanineWish = "Start your day with a smile on your face and let happiness bloom in your heart!";
BlastoiseWish = "Count the good things in your life and give yourself reasons to be happy.";
CharizardWish = "Your happiness is the most precious!";
AlakazamWish = "Be happy and make everyone around you happy!";
RapidasWish = "May you keep finding reasons to be happy every day!";
MarowakWish = "If you are happy then you don't need anything else but if you are sad then even the best of things cannot bring you happiness in life.";
EeveeWish = "Your gentle smile has the power to spread joy in the world! So be joyful!";
GyaradosWish = "Happiness is not doing fun things. Happiness is doing meaningful things.";
KangaskhanWish = "A happy family raises a happier kid!";

let but1 = document.getElementById('Pikachu');
let but2 = document.getElementById('Arcanine');
let but3 = document.getElementById('Blastoise');
let but4 = document.getElementById('Charizard');
let but5 = document.getElementById('Alakazam');
let but6 = document.getElementById('Rapidas');
let but7 = document.getElementById('Marowak');
let but8 = document.getElementById('Eevee');
let but9 = document.getElementById('Gyarados');
let but10 = document.getElementById('Kangaskhan');

but1.addEventListener("click",PikaWish)
but2.addEventListener("click",ArcanWish)
but3.addEventListener("click",BlasWish)
but4.addEventListener("click",ChaWish)
but5.addEventListener("click",AlaWish)
but6.addEventListener("click",RapiWish)
but7.addEventListener("click",MaroWish)
but8.addEventListener("click",EveWish)
but9.addEventListener("click",GyaWish)
but10.addEventListener("click",KangaWish)

function PikaWish() {
    
    var alert1 = function(){

        var pokemonContainer = document.getElementById('pokemon-container');
        document.getElementById("PokemonsWish").innerHTML = PikachuWish;
        fetch('https://pokeapi.co/api/v2/pokemon/25')
        //Pikachu
            .then(response => response.json())
            .then(data => {
                console.log(data);

                var pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                var pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert1, 2000);
}

function ArcanWish () {
    var alert2 = function(){
        document.getElementById("PokemonsWish").innerHTML = ArcanineWish;
        fetch('https://pokeapi.co/api/v2/pokemon/59')
        //Arcanine
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert2, 2000);
}

function BlasWish () {
    var alert3 = function(){
        document.getElementById("PokemonsWish").innerHTML = BlastoiseWish;
        fetch('https://pokeapi.co/api/v2/pokemon/9')
        //Blastoise
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert3,2000);
}

function ChaWish () {
    var alert4 = function(){
        document.getElementById("PokemonsWish").innerHTML = CharizardWish;
        fetch('https://pokeapi.co/api/v2/pokemon/6')
        //Charizard
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert4,2000);
}

function AlaWish () {
    var alert5 = function(){
        document.getElementById("PokemonsWish").innerHTML = AlakazamWish;
        fetch('https://pokeapi.co/api/v2/pokemon/65')
        //Alakazam
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert5, 2000);
}

function RapiWish () {
    var alert6 = function(){
        document.getElementById("PokemonsWish").innerHTML = RapidasWish
        fetch('https://pokeapi.co/api/v2/pokemon/78')
        //Rapidas
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert6, 2000);
}

function MaroWish () {
    var alert7 = function(){
        document.getElementById("PokemonsWish").innerHTML = MarowakWish
        fetch('https://pokeapi.co/api/v2/pokemon/105')
        //Marowak
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert7, 2000);
}

function EveWish () {
    var alert8 = function(){
        document.getElementById("PokemonsWish").innerHTML = EeveeWish;
        fetch('https://pokeapi.co/api/v2/pokemon/133')
        //Eevee
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert8, 2000);
}

function GyaWish () {
    var alert9 = function() {
        document.getElementById("PokemonsWish").innerHTML = GyaradosWish;
        fetch('https://pokeapi.co/api/v2/pokemon/130')
        //Gyarados
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert9, 2000);
}

function KangaWish () {
    var alert10 = function() {
        document.getElementById("PokemonsWish").innerHTML = KangaskhanWish;
        fetch('https://pokeapi.co/api/v2/pokemon/115')
        //Kangaskhan
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const pokemonImage = document.createElement('img');
                pokemonImage.src = data.sprites.front_default;

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = data.name;

                pokemonContainer.appendChild(pokemonImage);
                pokemonContainer.appendChild(pokemonName);
        })
        .catch(error => console.error(error));
    };
    setTimeout(alert10, 2000);
}