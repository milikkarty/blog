import { useState } from 'react';

const Compose = () => {

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    return (
        <main className="compose">
            <h1>New post</h1>
            <form className="composeForm">
                <label htmlFor="postTitle"></label>
                <input
                    autoComplete="off"
                    autoFocus
                    id="postTitle"
                    required
                    type="text"
                    value={postTitle}
                    onChange={e => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody"></label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={e => setPostBody(e.target.value)}
                ></textarea>
                <button type="submit"></button>
            </form>
        </main>
    )
}

export default Compose;