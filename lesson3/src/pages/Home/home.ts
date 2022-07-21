import { getAll } from "../../api/pokemon"
import Pokemon from "../../models/pokemon"

const HomePage = {
    render: async () => {
        const data = await getAll()
        const pokemon: Pokemon[] = data.data
        console.log(data)
        return /*html*/`
        <div class="container mx-auto grid grid-cols-5 gap-3">
        ${pokemon.map(poke => /*html*/`
          <a href="/pokemon/${poke.id}">
            <img src="${poke.image}"/>
            <h3>${poke.name}</h3>
            <div class="flex">
              ${poke.type.map(t => /*html*/`
                <div class="${t.type.name}">
                  ${t.type.name}
                </div>`).join('|')}
            </div>
          </a>
        `).join('')}
      </div>
        `
    }
}

export default HomePage;