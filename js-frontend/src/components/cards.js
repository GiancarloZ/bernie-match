class Cards {
    constructor(){
        this.cards = []
        this.adapter = new CardsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCards()
        this.shuffle()
    }

    initBindingsAndEventListeners(){
        this.cardsContainer = document.getElementById("cards-container")
        this.newUserName = document.getElementById("new-user-name")
        this.newUserForm = document.getElementById("new-user-form")

        // const card = document.querySelectorAll('.card');
        const game = document.getElementById('cards-container')
        const start = document.getElementById("start-game")
        
        this.newUserForm.addEventListener('submit', this.createUser.bind(this))
        // cards.forEach(card => card.addEventListener('click', this.flipCard.bind(event)))
        start.addEventListener('click', this.startGame);
        // game.addEventListener('click', this.flipCard);
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
        console.log("rendered block")
        let gameGrid = this.cards.concat(this.cards)
        gameGrid.sort(() => 0.5 - Math.random())
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
            console.log(card)
            game.appendChild(card)
        })

        let firstCard = ''
        let secondCard = ''
        let count = 0;
        let cards = document.querySelector(".card");
        let grid = game.addEventListener('click', function(event) {
            // The event target is our clicked item
            let clicked = event.target
            console.log(clicked)
            // Do not allow the grid section itself to be selected; only select divs inside the grid
            if (clicked.nodeName === 'back-card') {
              return
            }

            if (count < 2) {
                count++
                if (count === 1) {
                  // Assign first guess
                  firstCard = clicked.parentNode
                  clicked.parentNode.classList.add('flip')
                  console.log(firstCard)
                  console.log(clicked)
                } else {
                  // Assign second guess
                  secondCard = clicked.parentNode
                  clicked.parentNode.classList.add('flip')
                  console.log(secondCard)
                  console.log(clicked)
                }
                // If both guesses are not empty...
                if (firstCard !== '' && secondCard !== '') {
                  // and the first guess matches the second match...
                    // if (firstCard === secondCard) {
                    // run the match function
                    console.log(firstCard)
                    console.log(secondCard)
                    checkForMatch();
                    // }
                }
            }

        })

        function checkForMatch() {
            console.log("Checking before cards")
            console.log(firstCard)
            console.log(secondCard)
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            console.log("Checking after cards")
            console.log(firstCard)
            console.log(secondCard)
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
            }, 1500);
        }
    
        function resetBoard() {
            // [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
            count = 0
        }
        
    }
        
    shuffle() {
        this.cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16);
        card.style.order = ramdomPos;
        })
    }

    startGame() {
        console.log("clicked")
        let timer = 59;
        const display = document.querySelector('#time');
        let defaultDisplay = display.textContent = "00:00";
        let btn = document.getElementById("start-game");
        var starter = setInterval(function () {
            let seconds = timer;
            display.textContent = "00:" + seconds;
            --timer
            
            btn.disabled = true
            if (timer === 54) {
                console.log("55")
                clearInterval(starter);
                display.textContent = defaultDisplay
                btn.disabled = false;
            } 
        }, 1000);
    }
    
    createUser(u){
        u.preventDefault()
        const value = this.newUserName.value

        this.adapter.createUser(value).then(user => {
            this.users.push(new User(user))
        })
    }
   
    flipCard() { 
        // let hasFlippedCard = false;
        // let lockBoard = false;
        let clicked = this;
        console.log(clicked)
        let firstCard;
        let secondCard;
        let count = 0; 
        count++
        if (clicked.nodeName === "card"){
            return
        }
        clicked.classList.add('flip');
        // if (lockBoard) return;

        // this.classList.add('flip');
    
        console.log("after first flip")
        console.log(this)
        console.log(firstCard)

        if (count < 2) {
            
            if (count === 1) {
                // hasFlippedCard = true;
                firstCard = this;
                console.log(firstCard)
                console.log(count)
            } else {
                secondCard = this;
                // hasFlippedCard = false;
                console.log(secondCard)
                console.log(count)
            }

        }

        console.log(firstCard)
        console.log(secondCard)
        // if (!hasFlippedCard) {
        //     hasFlippedCard = true;
        //     firstCard = this;
        //     console.log("if block")
        //     console.log(this)
        //     console.log(firstCard)
        //     console.log(secondCard)
        //     return;
        // } else if (firstCard === this){
        //     console.log("else block")
            
        //     secondCard = this;
        //     hasFlippedCard = false;

        //     console.log("after second flip")
        //     console.log(firstCard)
        //     console.log(secondCard)
        // }

       
        // secondCard === this;
        // if (firstCard) return;
        // console.log("secondrstcard?")
        // // console.log(firstCard)
        // // console.log(secondCard)
        // this.classList.add('flip');
        // if (!hasFlippedCard) {
        //     hasFlippedCard = true;
        //     secondCard = this;
        //     console.log(secondCard)
        //     return;
        // }
        checkForMatch();
        

        // this.classList.add('flip');

        // if (!hasFlippedCard) {
        //     hasFlippedCard = true;
        //     secondCard = this;
        //     return;
        // }
        function checkForMatch() {
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            console.log("Checking these cards")
            console.log(firstCard)
            console.log(secondCard)
            isMatch ? disableCards() : unflipCards();
        }
    
        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
    
            resetBoard();
        }
    
        function unflipCards() {
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
            }, 1500);
        }
    
        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

    }

   
}