import { WORDS } from "../constants/wordlist"

export const getDailySolution = (): string => {
    // January 1, 2022 Game Epoch
    const epochMs = new Date(2022, 0).valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const solution = WORDS[index]

    return solution
}