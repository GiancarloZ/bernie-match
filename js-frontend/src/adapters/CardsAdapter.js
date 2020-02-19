class CardsAdapter{
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/cards'
    }

    getCards(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createUser(name){
        const user = {
            body: name
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ user }),
        }).then(res => res.json())
    }

}

