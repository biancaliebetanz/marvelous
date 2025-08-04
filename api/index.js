import axios from 'axios'
import md5 from 'md5'
import 'dotenv/config'

const ts = new Date().getTime().toString();
const privateKey = process.env.private_key;
const apiKey = process.env.api_key;

const hash = md5(ts + privateKey + apiKey);

const connection = axios.create({
    baseURL: "https://gateway.marvel.com/",
    params: {
        ts: ts,
        apikey: apiKey,
        hash: hash,
    }
})

async function getCharacter(charName){
    const response = await connection.get("/v1/public/characters", {
        name: charName
    })
    console.log(response.data)
}

getCharacter("Spider Man")
