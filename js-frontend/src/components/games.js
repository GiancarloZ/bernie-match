class Games {
    constructor(){
        console.log("Game Start")
        this.games = []
        this.adapter = new GamesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadGames()
        
        
    }
    
    initBindingsAndEventListeners(){
        this.fastest = document.getElementById("fastest")
        this.counter = 0;
        const start = document.getElementById("start-game")
        start.addEventListener('click', this.startGame.bind(this));
    }

    fetchAndLoadGames(){
        this.adapter
        .getGames()
        .then(games => {
            games.forEach(game => this.games.push(new Game(game)))
        }).then(() => {
            this.updateHighScore()
        })
    }

    startGame() {
        console.log(this.games[this.games.length - 1])
        console.log(this.games)
        this.cards = new Cards()
        const game = document.getElementById("cards-container")

        game.classList = ""
       
        if (game.children){
            game.innerHTML = ""
        }

        if (this.fastest.children){
            this.fastest.innerHTML = ""
        } 
        
        if (starter === 10 && this.counter === 1){
            console.log("97")
            this.updateGame()
            this.counter = 0;
        }

        let timer = 59;
        

        const value = {
            played: true,
            timer: null,
            user_id: null,
        }

        console.log(value)
           
        this.adapter.startGame(value).then(game => {
               
            this.games.push(new Game(game))
            
        })
        if (starter){
            console.log("68")
            this.updateGame()
        }

        
        var _this = this
        var starter = setInterval(function () {
            
            const flippedCards = document.getElementsByClassName("card flip")
            const display = document.querySelector('#time');
            const btn = document.getElementById("start-game");
            const game = document.getElementById("cards-container")
            let seconds = timer;
            display.innerHTML = "00:" + seconds;
            --timer
            console.log(starter)
            btn.disabled = true
            
            if (timer === -1) {
                this.counter = 1;
                clearInterval(starter);
                const result = document.createElement("h3")
                result.innerHTML = "Time's up. GAME OVER!"
                display.append(result)
                btn.disabled = false;
                game.classList.add("done")
                console.log(this.counter)
                _this.updateGame()

            } else if (flippedCards.length === 16){

                clearInterval(starter);
                const result = document.createElement("h3")
                result.innerHTML = "Congratulations! You've matched all the Bernie's!!"
                display.append(result)
                btn.disabled = false;
                game.classList.add("done")
                _this.updateGame()
            } 
            
        }, 1000);
        }

    updateHighScore(){
        if (this.fastest.children){
            this.fastest.innerHTML = ""
        }
        const topGames = document.createElement("ol")
       
        const topTen = this.games.sort(function(a,b){return b.timer-a.timer}).slice(0,10)
        
        topGames.innerHTML = topTen.map(game => `<li> User: ${game.user_id} Time: ${game.timer}</li>`).join('')
        
        this.fastest.appendChild(topGames)
    }

    updateGame(){
        const display = document.getElementById("time");
        let currentGame = this.games[this.games.length - 1]
        console.log(parseInt(display.textContent.split("").slice(3,5).join("")))
        currentGame.timer = parseInt(document.getElementById("time").textContent.split("").slice(3,5).join(""))
        console.log(currentGame.timer)
        console.log(currentGame)
        this.adapter.updateGame(currentGame).then(() =>{
            this.updateHighScore()
        })
    } 
    
    
}