import { Handler } from "@netlify/functions";
import { WORDS } from "../constants/wordlist";

const handler: Handler = async (event, context) => {
    // January 1, 2022 Game Epoch
    const epochMs = new Date(2022, 0).valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const solution = WORDS[index]

    return {
        statusCode: 200,
        body: JSON.stringify({ solution })
    }
};


export { handler };