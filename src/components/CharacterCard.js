import React from 'react';

export default function CharacterCard(props) {
    const { name, species, status, gender, location, image } = props;
    return (
        <div>
            <h3>{name}</h3>
            <div>
                 <img src={image} alt={name} />
            </div>
            <p>Location: {location}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
        </div>
    );
}