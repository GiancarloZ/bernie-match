class Users {
    constructor(){
        console.log("did i make it here?")
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadUsers()
    }

    initBindingsAndEventListeners(){
        this.newUserName = document.getElementById("new-user-name")
        this.newUserForm = document.getElementById("new-user-form")
        this.newUserForm.addEventListener('submit', this.createUser.bind(this))
    }

    createUser(e){
        e.preventDefault()
        const value = this.newUserName.value
        // console.log(value)
        
        this.adapter.createUser(value).then(user => {

            console.log(user)
            this.newUserName.value = ""
            debugger
            this.users.push((user))
            this.render()
        })

        
    }
   
    fetchAndLoadUsers(){
        this.adapter
        .getUsers()
        .then(users => {
            users.forEach(user => this.users.push(user))
        })
    }

    render(){
        this.userAnswer = document.getElementById("answer") 
        this.userAnswer.textContent = `Welcome, ${this.name}! Press Start Game to begin.`
        this.games = new Games()
    }
   
}