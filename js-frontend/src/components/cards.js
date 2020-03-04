class Cards {
    constructor(){
        this.cards = []
        this.adapter = new CardsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCards()
    }

    initBindingsAndEventListeners(){
        this.cardsContainer = document.getElementById("cards-container")
    }

    fetchAndLoadCards(){
        this.adapter
        .getCards()
        .then(cards => {
            cards.forEach(card => this.cards.push(card))
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const game = document.getElementById('cards-container')
        let gameGrid = this.cards.concat(this.cards)
        shuffle(gameGrid)
        gameGrid.forEach(item => {

            const card = document.createElement('div')
            card.classList.add('card')
            card.dataset.framework = item.name
            

            const image1 = document.createElement('img')
            image1.classList.add('front-face')
            image1.src = item.front 
            image1.alt = item.name
  
            const image2 = document.createElement('img')
            image2.classList.add('back-face')
            image2.src = item.back
            image2.alt = "back"
           
            card.append(image1, image2)
            game.appendChild(card)
        })
        
        let firstCard = ''
        let secondCard = ''
        let count = 0;
     
        let grid = game.addEventListener('click', function(event) {
            const time = document.getElementById('time')
            const cards = game.children
            let clicked = event.target
            let previousTarget = null;
            // Do not allow the grid section itself to be selected; only select divs inside the grid
            if (clicked.nodeName === 'DIV' || previousTarget === clicked || clicked.classList.value === "front-face") {
                return 
            }

            if (count < 2) {
                count++
                
                if (count === 1) {
                  firstCard = clicked.parentNode
                  clicked.parentNode.classList.add('flip')
                  previousTarget = clicked;
                } else {
                  secondCard = clicked.parentNode
                  clicked.parentNode.classList.add('flip')
                }
                if (firstCard !== '' && secondCard !== '') {
                    checkForMatch();
                }
               
            }

        })

        function checkForMatch() {
            console.log("Checking before cards")
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            console.log("Checking after cards")
            isMatch ? disableCards() : unflipCards();
        }
    
        function disableCards() {
            firstCard.removeEventListener('click', grid);
            secondCard.removeEventListener('click', grid);
    
            resetBoard();
        }
    
        function unflipCards() {
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
            }, 1000);
        }
    
        function resetBoard() {
            [firstCard, secondCard] = [null, null];
            count = 0
        }
        
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
        }

        function timesUp(){
            
            if (time.textContent === "00:00 Time's up. GAME OVER!"){
                for (let i = 0; i < cards.length; i++) {
                    cards[i].removeEventListener('click', grid)
                }
            }

        }

    }

}