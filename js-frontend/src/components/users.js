class Users {
    constructor(){
        console.log("did i make it here?")
        this.user = 
        this.adapter = new UsersAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.newUserName = document.getElementById("new-user-name")
        this.newUserForm = document.getElementById("new-user-form")
        this.newUserForm.addEventListener('submit', this.createUser.bind(this))
    }

    // fetchAndLoadUser(){
    //     this.adapter
    //     .getUser()
    //     .then(user => {this.user.push(user)
    //         console.log(this.user)
    //     })
    // }

   
}