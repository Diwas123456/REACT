import React, { useState, useEffect } from 'react'

const useEffect1 = () => {
    const [resourceType, setResourceType] = useState('posts');
    console.log('render')

    useEffect(() => {
        console.log('resource type changed')
    }, [resourceType]);
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1></h1>
        </>
    )
}

export default useEffect1