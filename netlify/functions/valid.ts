import { Handler } from "@netlify/functions";
import { VALID_GUESSES } from "../constants/validGuesses";
import { WORDS } from "../constants/wordlist";

const handler: Handler = async (event, context) => ({
    statusCode: 200,
    body: JSON.stringify({ valid: WORDS.concat(VALID_GUESSES) }),
});


export { handler };