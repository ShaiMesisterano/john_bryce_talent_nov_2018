export function getGists(gists){
    return {
        type: 'GET_GISTS',
        gists
    }
}

export function fetchGists() {
    return async dispatch => {
        const response = await fetch(`https://api.github.com/gists/public`);
        const data = await response.json();
        dispatch(getGists(data));
    }
}