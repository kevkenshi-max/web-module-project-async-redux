import axios from 'axios'

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'

export const getCharacters = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: ERROR, payload: { err } });
        });
};

export const changePage = (url) => (dispatch) => {
    dispatch({type: LOADING})
    axios
        .get(`${url}`)
        .then((res) => {
            dispatch({type: SUCCESS, payload: res.data});
        })
        .catch((err) => {
            dispatch({ type: ERROR, payload: { err } });
        })
} 