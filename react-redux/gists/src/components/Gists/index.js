import React from 'react';

const Gists = (props) => (
    <div>
        {
            props.gists.map( (gist, key) => (
                <div key={key}>
                    Name: {gist.name}, Author: {gist.author}
                </div>
            ))
        }
    </div>
);

export default Gists;