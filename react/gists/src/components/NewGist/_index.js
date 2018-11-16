import React from 'react';

const NewGist = props => (
    <div>
        <h1>{props.title}</h1>
        <form onSubmit={props.addNew}>
            <input id="gist_name" type="text" placeholder="Name..." />
            <br /><br />
            <input id="gist_author" type="text" placeholder="Author..." />
            <br /><br />
            <input type="submit" value="Add" />
        </form>
    </div>
);

export default NewGist;