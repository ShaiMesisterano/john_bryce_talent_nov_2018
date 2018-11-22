import React from 'react';
import propTypes from 'prop-types';

class NewGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newGist: {
                name: "",
                author: ""
            }
        };
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={(event) => this.props.addNew(event, this.state.newGist)}>
                    <input type="text" placeholder="Name..." onBlur={(event) => this.setData(event, "name")} />
                    <br /><br />
                    <input type="text" placeholder="Author..." onBlur={(event) => this.setData(event, "author")} />
                    <br /><br />
                    <input type="submit" value="Add" className="btn btn-primary" />
                </form>
            </div>
        );
    }
    setData = (event, param) => {
        const data = event.target.value;
        const _newGist = {...this.state.newGist};
        _newGist[param] = data;
        this.setState({
            newGist: _newGist
        })
    }
}

NewGist.propTypes = {
    title: propTypes.number,
    name: propTypes.string,
    author: propTypes.string
};

export default NewGist;