import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = (characterId, publicKey, hash) =>
    `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`;

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    const PUBLIC_KEY = 'b9057d7e6fa0341e4244c30148cbdb25';
    const HASH = '215e07d4090545867ddfa3d69f36dc58';

    useEffect(() => {
        axios
            .get(API_URL('', PUBLIC_KEY, HASH))
            .then((response) => setCharacters(response.data.data.results))
            .catch((error) => console.error(error));
    }, [PUBLIC_KEY, HASH]);

    const fetchCharacterDetails = (characterId) => {
        navigate(`/character/${characterId}`);
    };

    return (
        <div>
            <div className='image-grid'>
                {characters.map(({ id, name, thumbnail }) => (
                    <div key={id} className='grid-item' onClick={() => fetchCharacterDetails(id)}>
                        <img
                            src={`${thumbnail.path}.${thumbnail.extension}`}
                            className='image'
                        />
                        <h3>{name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
