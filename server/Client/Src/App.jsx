import { useEffect, useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lilian's Agri-Blog</h1>
      {posts.map(post => (
        <div key={post.title} className="border p-4 mb-4 rounded-lg">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
