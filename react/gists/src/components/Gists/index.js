import React from 'react';
import NewGist from '../NewGist';
import GistsTable from '../GistsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        const myStyle = {
            fontSize: '12px',
            textDecoration: 'underline'
        }
        return (
            <div>
                <header>
                    <div className="navbar navbar-dark bg-dark box-shadow">
                        <div className="container-fluid navbar-brand d-flex align-items-center">
                            Gists
                        </div>
                    </div>
                </header>
                <NewGist title="Add New" addNew={this.addNew} />
                <GistsTable gists={this.state.gists} />
            </div>
        );
    }
    addNew = (event, newGist) => {
        // Using element's ID
        // console.log(event.target.gist_name.value);
        // const _gists = JSON.parse(JSON.stringify(this.state.gists));
        // const _gists = this.state.gists.concat();
        // console.log(_gists);
        // _gists.push(newGist);
        // this.setState({
        //     gists: _gists
        // });
        this.props.history.push('/about-us');
        event.preventDefault();
        
    }
}

export default Gists;