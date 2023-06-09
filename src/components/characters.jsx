import { CharacterServices } from "@/app/character_services";
import { useEffect, useState } from "react"

function Characters() {    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CharacterServices.getAllCharacters();
                setData(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading characters...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
            <div className="w-screen grid grid-cols-4 gap-2 p-4">
            {
            data.map((character) => (
                <h2>{character["name"]}</h2>
            ))
            } 
        </div>)
}

export default Characters