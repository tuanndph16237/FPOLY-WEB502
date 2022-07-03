import Pokemon from './models/pokemon'
import {create, getAll} from './api/pokemons'
import '../style.css'


async function fetchPokemonData(){
  const data = await getAll()
  return data.data
}

document.addEventListener("DOMContentLoaded", () =>{
    let generateBtn = document.querySelector('#generate-pokemon');
    generateBtn?.addEventListener('click', async function() {
      const pokemons = await fetchPokemonData()
      console.log(pokemons)
      renderPokemon(pokemons)
    })
})


function renderPokemon(pokeData: Pokemon[]){
  const _content =  /*html*/`
    <div class="container mx-auto grid grid-cols-5 gap-3">
      ${pokeData.map(poke => /*html*/`
        <div>
          <img src="${poke.image}"/>
          <h3>${poke.name}</h3>
          <div class="flex">
            ${poke.type.map(t => /*html*/`
              <div class="${t.type.name}">
                ${t.type.name}
              </div>`).join('|')}
          </div>
        </div>
      `).join('')}
    </div>
    `
  if(document.getElementById('root')) {
    document.getElementById('root').innerHTML = _content;
  }
}
