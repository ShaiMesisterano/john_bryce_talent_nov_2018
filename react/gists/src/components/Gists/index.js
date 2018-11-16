import React from 'react';
import NewGist from '../NewGist';
import GistsTable from '../GistsTable';

class Gists extends React.Component {
    constructor() {
        super();
        this.state = {
            gists: [{
                name: "Name1",
                author: "Author1"
            },
            {
                name: "Name2",
                author: "Author2"
            },
            {
                name: "Name3",
                author: "Author3"
            }]
        };
    }
    render() {
        return (
            <div>
                <NewGist title="Add New" addNew={this.addNew} />
                <GistsTable gists={this.state.gists} />
            </div>
        );
    }
    addNew = (event, newGist) => {
        // Using element's ID
        // console.log(event.target.gist_name.value);
        // const _gists = JSON.parse(JSON.stringify(this.state.gists));
        const _gists = this.state.gists.concat();
        console.log(_gists);
        _gists.push(newGist);
        this.setState({
            gists: _gists
        });
        event.preventDefault();
        
    }
}

export default Gists;