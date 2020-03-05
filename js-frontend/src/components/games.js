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
        const btn = document.getElementById("start-game");
        const game = document.getElementById("cards-container")

        let timer = 59;
        let defaultDisplay = display.textContent = "00:00";
        
        
        var starter = setInterval(function () {

            let seconds = timer;
            display.textContent = "00:" + seconds;
            --timer
           
            btn.disabled = true
            
            if (timer === 57) {

                clearInterval(starter);
                display.textContent = defaultDisplay + " Time's up. GAME OVER!"
                btn.disabled = false;
                
            } else if (flippedCards.length === 16){
                clearInterval(starter);
                time.textContent = "Congratulations! You've matched all the Bernie's!!"
                btn.disabled = false;
            } 
            
        }, 1000);


    }
    
}