import React from 'react';

class NewGist extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            error: ''
        }
    }
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input id="gist_name" type="text" placeholder="Name..." onChange={ event => this.setName(event) }
                ref={ el => this.gist_name = el } />
                <br /><br />
                <input id="gist_author" type="text" placeholder="Author..." onChange={ event => this.setAuthor(event) }  ref={ el => this.gist_author = el } />
                <br /><br />
                <input type="button" value="Add" onClick={ () => this.validate() } />
                <div>{this.state.error}</div>
            </div>
        );
    }
    setName(event) {
        this.setState({
            name: event.target.value
        });
    }
    setAuthor(event) {
        this.setState({
            author: event.target.value
        });
    }
    validate() {
        if (!this.state.name) {
            this.gist_name.focus();
            this.setState({ error: 'Please fill name' });
            return;
        }

        if (!this.state.author) {
            this.gist_author.focus();
            this.setState({ error: 'Please fill author' });
            return;
        }
    }
}

export default NewGist;