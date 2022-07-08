import { useState } from "react";
import Post from './Post';

const Home = () => {

    const [posts, setPosts] = useState([
        {
          id: 1,
          datetime: 13,
          title: 'Title 1',
          body: 'Body 1'
        },
        {
          id: 2,
          datetime: 14,
          title: 'Title 2',
          body: 'Body 2'
        }
    ]);

    return (
        <main className="home">
        { posts.map(post => (
          <Post key={post.id} post={post} />
        )) }
      </main>
    )
}

export default Home;