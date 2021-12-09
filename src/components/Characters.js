import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../state/actions';
import CharacterCard from './CharacterCard';

function Characters(props) {
    console.log(props)
    useEffect(() => {
        props.getCharacters();
    }, []);

    return (
        <div>
            {props.characters.map((char) => (
                <CharacterCard key={char.id} characters={char} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      characters: state.results,
    };
  };

export default connect(mapStateToProps, { getCharacters })(Characters); 