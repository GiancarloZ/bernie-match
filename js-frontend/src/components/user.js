class User {
    constructor(userJSON) {
        this.id = userJSON.id
        this.name = userJSON.name
        this.game_id = userJSON.game_id
    }
}