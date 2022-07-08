import { useState } from 'react';
import Nav from "./Components/Nav";
import Post from './Components/Post';
import Footer from "./Components/Footer";

function App() {

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
    <div className="App">
      <Nav />
      <main className="home">
        { posts.map(post => (
          <Post key={post.id} post={post} />
        )) }
      </main>
      <Footer />
    </div>
  );
}

export default App;
