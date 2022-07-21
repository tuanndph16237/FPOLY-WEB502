import './game.css'
const Game = {
    render: () => {
        return /*html*/`
            <div class="container mx-auto grid grid-cols-4 gap-4">
                <div class="memory-card border rounded-md" data-name="1">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="2">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="3">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="4">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="5">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="6">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="7">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
                <div class="memory-card border rounded-md" data-name="8">
                    <img class="back-face" src="images/ball.png"/>
                    <img class="front-face" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"/>
                </div>
            </div>
        `
    },
    afterRender: function() {
        const cards = document.querySelectorAll('.memory-card')
        console.log(cards)
        if (cards) {
            cards.forEach(card => {
                card.addEventListener('click', function(c) {
                    console.log(card.dataset.name)
                    card.classList.toggle('flip');
                })
            })
        }
    }
}

export default Game