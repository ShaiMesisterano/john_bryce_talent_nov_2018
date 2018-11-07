// Promise constructor
const getGists = () => {
    return new Promise( (resolve, reject) => {
        fetch('https://api.github.com/gists/public').then( res => res.json() ).then( data => {
            resolve(data);
        });
    });
};

const getRepos = () => {
    return new Promise( (resolve, reject) => {
        fetch('https://api.github.com/users/christophebaume/repos').then( res => res.json() ).then( data => {
            resolve(data);
        });
    });
}


const getCommits = () => {
    return new Promise( (resolve, reject) => {
        fetch('https://api.github.com/gists/40a6c360172bdc1ded33a86ce9dd7a02/commits').then( res => res.json() ).then( data => {
            resolve(data);
        });
    });
}

getGists()
    .then( gistsData=> {
        console.log(`gistsData`)
        getRepos().then( reposData=> {
            console.log(`reposData`)
            getCommits().then( commitsData=> {
                console.log(`commitsData`)
            }
         );
        }
         );
    }
);

// Promise.all
Promise
    .all([ getGists(), getRepos() ])
    .then( values => {
        console.log(`values: ${JSON.stringify(values)}`);
        getCommits().then( commitsData => console.log(`commitsData: ${JSON.stringify(commitsData)}`) )
    }
)