class App{
    constructor(){
        this.users = new Users()
        // this.games = new Games()
        // this.cards = new Cards()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        const sort = document.getElementById("sort")
        sort.addEventListener('click', this.sortName)
    }


    sortName(){
        fetch("http://localhost:3000/api/v1/users").then(res => res.json())
        .then(users => {
            let sorted = users.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              });

            const sort = document.getElementById("sorter");
            const u = document.createElement("ul")
            debugger
            u.innerHTML = sorted.map(user => `<li> User: ${user.name} </li>`).join('')
                 
            sort.appendChild(u)
        })
    }

    
}