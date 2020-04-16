import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

export default function PagePost(props) {
    
    const [reload, setReload] = useState(1);

    return (
        <>
            <PostList
                reload={reload}
            />
            <PostForm
                onSaveSucess={() => {
                    setReload(reload + 1);
                }}
            />
        </>
    );
}