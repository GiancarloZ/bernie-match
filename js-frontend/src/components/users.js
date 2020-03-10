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
            this.users.push(new User(user))
            this.render()
        })

        
    }
   
    fetchAndLoadUsers(){
        this.adapter
        .getUsers()
        .then(users => {
            users.forEach(user => this.users.push(new User(user)))
        })
    }

    render(){
        this.userAnswer = document.querySelector("h2") 
        this.userAnswer.innerHTML = `Welcome, ${this.users.slice(-1)[0].name}! Press Start Game to begin.`
        this.games = new Games()
    }

    
   
}