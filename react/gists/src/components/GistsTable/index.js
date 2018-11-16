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
        <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                </tr>
                { data }
            </tbody>
        </table>
    </div>
    );
};

export default GistsTable;