import React from 'react';

const Gists = (props) => (
    <div>
        {
            props.gists.map( (gist, key) => (
                <div key={key}>
                    Name: {gist.id}, Author: {gist.url}
                </div>
            ))
        }
    </div>
);

export default Gists;