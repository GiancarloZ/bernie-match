class Cards {
    constructor(){
        this.cards = []
        this.adapter = new CardsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCards()
    }

    initBindingsAndEventListeners(){
        this.cardsContainer = document.getElementById("cards-container")
        this.newUserName = document.getElementById("new-user-name")
        this.newUserForm = document.getElementById("new-user-form")
        const cards = document.querySelectorAll('.card');
        const start = document.getElementById("start-game")
        this.newUserForm.addEventListener('submit', this.createUser.bind(this))
        cards.forEach(card => card.addEventListener('click', this.flipCard));
        start.addEventListener('click', this.startGame);
    }

    fetchAndLoadCards(){
        this.adapter
        .getCards()
        .then(cards => {
            cards.forEach(card => this.cards.push(card))
            console.log(this.cards)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const cardsContainer = document.getElementById("cards-container")
        // cardsContainer.innerHTML = this.cards.map(card => `<li>${card.state}</li>`).join("")
    }

    createUser(u){
        u.preventDefault()
        const value = this.newUserName.value

        this.adapter.createUser(value).then(user => {
            this.users.push(new User(user))
        })
    }

    flipCard() {
        this.classList.toggle('flip');
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
    
    // window.onload = function () {
    //     var oneMinute = 60,
    //         display = document.querySelector('#time');
    //     startGame(oneMinute, display);
    // };
}