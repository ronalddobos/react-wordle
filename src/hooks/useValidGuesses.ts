import { useEffect, useState } from "react"

export const useValidGuesses = () => {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<string[]>([]);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/valid`);
                const json = await response.json();
                setResults(json.valid);

            } catch (e) {
                console.error(e);
                setResults([]);
            }

            setLoading(false);
        };

        fetchData();
    }, []);


    return [loading, results] as const;
}