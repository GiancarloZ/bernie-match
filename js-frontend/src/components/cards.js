class Cards{
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
        this.newUserForm.addEventListener('submit', this.createUser.bind(this))
    }

    createUser(u){
        u.preventDefault()
        const value = this.newUserName.value
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
        cardsContainer.innerHTML = this.cards.map(card => `<li>${card.state}</li>`).join("")
    }
}