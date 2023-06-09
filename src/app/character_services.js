import axios from "axios";

const url = 'https://api.disneyapi.dev/character';

export class CharacterServices {
    static async getAllCharacters() {
            const response = await axios.get(url);
            return response.data['data'];
    }

    static async getCharacterByName(name) {

    }
}