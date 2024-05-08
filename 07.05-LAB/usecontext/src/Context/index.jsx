import { useContext } from 'react';
import { MyContext } from '../MyContext';
import Table from '../Table';
function Context() {
    const { text, setText } = useContext(MyContext);
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                console.log(`Post ID: ${post.id}, Title: ${post.title}`);
            });
        })
        .catch(error => {
            console.error(error);
        })

    return (
        <Table />
    )
}

export default Context;