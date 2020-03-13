class GamesAdapter{
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/games'
    }


    getGames(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

  
    startGame(value){
        const game = value
        console.log(game)
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ game }),
        }).then(res => res.json())
    }

    updateGame(value){
        const game = value
        console.log(game)
        return fetch(this.baseUrl, {
            method: 'PUT',
            mode: "cors",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ game }),
        }).then(res => res.json())
    }
}