import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../state/actions';

function Header(props) {
    const { info , changePage } = props

    const handlePageChange = (url) => {
        changePage(url)
    };

    return (
        <div>
            <h1>Rick and Morty</h1>
            {info.prev && (
                <button onClick={() => handlePageChange(info.prev)}>Prev</button>
            )}
            {info.next && (
                <button onClick={() => handlePageChange(info.next)}>Next</button>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        info: state.info,
    }
}

export default connect(mapStateToProps, { changePage })(Header);