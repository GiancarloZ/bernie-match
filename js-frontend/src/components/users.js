class Users {
    constructor(){
        console.log("did i make it here?")
        this.users = []
        this.adapter = new UsersAdapter()
        this.initBindingsAndEventListeners()
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
        // this.userAnswer = document.getElementById("answer") 
        this.adapter.createUser(value).then(user => {
            console.log(user)
        //     this.users.push(user)
        //     debugger
        //     this.userAnswer.innerText = `Welcome, ${user.name}!`
        //     // this.userAnswer.innerText = `Welcome, ${user.name}!`
        //     Cards.render()
        })

        
    }
   
    fetchAndLoadUser(){
        this.adapter
        .getUser()
        .then(users => {
            users.forEach(user => this.users.push(new User(user)))
        })
    }

   
}