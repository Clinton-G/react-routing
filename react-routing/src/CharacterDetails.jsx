import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = (characterId, publicKey, hash) =>
    `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`;

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    const PUBLIC_KEY = 'b9057d7e6fa0341e4244c30148cbdb25';
    const HASH = '215e07d4090545867ddfa3d69f36dc58';

    useEffect(() => {
        axios
            .get(API_URL(id, PUBLIC_KEY, HASH))
            .then((response) => setCharacter(response.data.data.results[0]))
            .catch((error) => console.error(error));
    }, [id, PUBLIC_KEY, HASH]);

    const { name, description, comics } = character;

    return (
        <div className='character-detail'>
            <h2>{name}</h2>
            <p>{description || 'No description available.'}</p>
            <h3>List of Associated Comics:</h3>
            <ul>
                {comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;
