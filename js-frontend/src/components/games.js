class Games {
    constructor(){
        console.log("Game Start")
        this.games = []
        this.adapter = new GamesAdapter()
        this.initBindingsAndEventListeners()
    }
    
    initBindingsAndEventListeners(){
        const start = document.getElementById("start-game")
        start.addEventListener('click', this.startGame);
    }

    startGame() {
        console.log("clicked")
        this.cards = new Cards()
       
        const flippedCards = document.getElementsByClassName("card flip")
        const display = document.querySelector('#time');
        const time = document.getElementById('time')
        const btn = document.getElementById("start-game");
        const game = document.getElementById("cards-container")
        const cards = game.children
        let timer = 59;
        let defaultDisplay = display.textContent = "00:00";
        
        
        var starter = setInterval(function () {
            let seconds = timer;
            display.textContent = "00:" + seconds;
            --timer
            
            btn.disabled = true
            if (timer === 57) {

                console.log("0")
                clearInterval(starter);
                display.textContent = defaultDisplay + " Time's up. GAME OVER!"
                btn.disabled = false;
                // isItOver()
            }          
            
        }, 1000);

        
        
        function gameWon(){
            // let cards = game.children;
            // const allEqual = arr => arr.every( v => v.classList.value === 'card flip')
            // if (allEqual(cards)){
            //     cards.forEach(card => card.removeEventListener('click', grid))
            // }
            if (flippedCards.length === 16){
                display.textContent = "Congratulations! You've matched all the Bernie's!!"
            }

        }

        

        function isItOver(){

            if (timesUp() === true || gameWon() === true){
                return true
            }

        }

    }
    
}