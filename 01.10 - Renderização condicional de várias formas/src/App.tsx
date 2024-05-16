import { useState } from "react";
import "./App.css";
import Post, { PostObject } from "./components/Post";
import Card from "./components/Card";

function App() {
  const [post, setPost] = useState<PostObject | undefined>({
    title: "Título maneiro",
    content: "Lorem Ipsum dolor sit ament",
  });

  return (
    <div className="App">
      <header className="App-header">
        {!!post && (
          <Card align="left" title="Card">
            <Post post={post} totalComments={12} />
          </Card>
        )}

        {!!post ? (
          <Card align="left" title="Card">
            <Post post={post} totalComments={12} />
          </Card>
        ) : (
          <h1>404 - Post não encontrado</h1>
        )}
        <button onClick={() => setPost(undefined)}>Remover Post</button>
      </header>
    </div>
  );
}

export default App;
