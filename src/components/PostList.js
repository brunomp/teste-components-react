import React, { useEffect, useState } from 'react';

export default function PostForm(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, [props.reload]);

    function loadPosts() {
        console.log('requisição dos posts.');
        let data = [...posts, 'Post 1', 'Post 2', 'Post 3'];
        setPosts(data);
    }

    return (
        <>
            <h2>PostList.js</h2>
            <ul>
                {(posts || []).map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </>
    );
}