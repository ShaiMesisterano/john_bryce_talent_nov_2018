fetch('https://api.github.com/gists/public').then( res => res.json() ).then( data => {
        console.log(`gists. ${JSON.stringify(data)}`)
    });

fetch('https://api.github.com/users/christophebaume/repos').then( res => res.json() ).then( data => {
        console.log(`repos. ${JSON.stringify(data)}`)
    });

fetch('https://api.github.com/gists/40a6c360172bdc1ded33a86ce9dd7a02/commits').then( res => res.json() ).then( data => {
        console.log(`commits. ${JSON.stringify(data)}`)
    });