import { get } from "../../api/pokemon";
import Pokemon from "../../models/pokemon";

const Detail = {
 render: async (params: any) => {
    const data = await get(params.data.id)  
    const poke: Pokemon = data.data
    console.log(poke)
    return /*html*/`
        <div class="container mx-auto flex justify-center items-center">
            <div class="w-[300px] border rounded-lg">
                <img class="w-full" src="${poke.image}">
                <div class="bg-gray-200"> 
                    <p>Height: ${poke.height}</p>
                    <p>Weight: ${poke.weight}</p>
                    <p>Abilities: ${poke.type.map(t => /*html*/`<span>${t?.type?.name}</span>`).join(';')}</p>
                </div>
            </div>
        </div>
    `
 }
}

export default Detail;