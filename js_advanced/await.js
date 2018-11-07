class GitAPI {
    constructor() {
        this.url = "https://api.github.com"
    }

    async getRepos(repo) {
        const response = await fetch(`${this.url}/${repo}`);
        const json = await response.json();
        return json;
    }
}

const init = async () => {
    const gitAPI = new GitAPI();
    const repos = await gitAPI.getRepos("gists/40a6c360172bdc1ded33a86ce9dd7a02/commits");
    console.log(`repos: ${JSON.stringify(repos)}`);   
}

init();