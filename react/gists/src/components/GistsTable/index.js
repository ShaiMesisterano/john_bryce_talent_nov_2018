import React from 'react';

const GistsTable = props => {
    const data = props.gists.map( (gist, key) => {
        return (
            <tr key={key}>
                <td>{gist.name}</td>
                <td>{gist.author}</td>
            </tr>
        );      
    });
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                { data }
            </tbody>
        </table>
    );
};

export default GistsTable;