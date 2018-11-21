export function getGists(gists = []){
    return {
        type: 'GET_GISTS',
        gists
    }
}