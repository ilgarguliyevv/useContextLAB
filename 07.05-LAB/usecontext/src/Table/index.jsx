import React, { useState, useEffect, useContext } from 'react';
function Table() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(post => ({
                    id: post.id,
                    title: post.title
                }));

                setTableData(formattedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
