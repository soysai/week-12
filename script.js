var container = document.querySelector ('.pokemon');

//metadata
const version = document.getElementById("version");
const level = document.getElementById("level");
const description = document.querySelector('.description');


fetch("https://pokeapi.co/api/v2/pokemon/charmander")
.then(response => response.json())
.then(data => {
  var charmander = data;
  
  console.log(charmander);
  
  charmander.abilities.forEach(ability => {
    var abilityElement = document.createElement('button');
    abilityElement.className = 'charmander-qualities';
    abilityElement.textContent = ability.ability.name;
    container.appendChild(abilityElement);
    
  });

  charmander.moves.forEach(move => {
    var moveElement = document.createElement('button');
    moveElement.className = 'charmander-qualities';
    moveElement.textContent = move.move.name;
    container.appendChild(moveElement);
    moveElement.addEventListener("click", () => {
      showDetails(move);
    });

  });

  var buttonstyle = document.querySelectorAll('.charmander-qualities');
  buttonstyle.forEach(button => {
    button.style.margin = '10px';
  });

  //only display gif when charmander is clicked 

  var gif = document.getElementById('gif');
  var header = document.getElementById('point');

  header.addEventListener('click', function(){
    gif.style.display = "block";
  });
});

function showDetails(move) {
  version.textContent = `Version: ${move.version_group_details[0].version_group.name}`;
  level.textContent = `Level Learned At: ${move.version_group_details[0].level_learned_at}`;
  description.style.display = "block";
}