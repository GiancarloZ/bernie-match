class Game {
    constructor(gameJSON) {
     
        this.id = gameJSON.id
        this.played = gameJSON.played
        this.timer = gameJSON.timer
        this.user_id = gameJSON.user_id
        
    }
}