import axios from "axios";

const url = 'https://api.disneyapi.dev/character';

export class CharacterServices {
    static async getAllCharacters() {
        try {
            const response = await axios.get(url);
            console.log(response.data);
        }
        catch (e) {
            console.error(e);
        }
    }

    static async getCharacterByName(name) {

    }
}