import React, { useState } from 'react';
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import useFetch from "./helpers/useFetch";
import { Pagination } from "./components/Pagination/Pagination";
import './App.scss';

const App = () => {
  const [query, setQuery] = useState('reactjs');
  const [{isLoading, response}, doFetch] = useFetch(query);

  const {
    children = [],
    after = null,
    before = null
  } = response;

  const getPosts = (e) => {
    if (e.target.value) {
      doFetch({
        [e.target.value]: response[e.target.value]
      });
    } else {
      doFetch();
    }
  };

  return (
    <React.Fragment>
      <Header
        getPosts={getPosts}
        query={query}
        setQuery={setQuery}
      />
      <main>
        {!!children.length && !isLoading && (
          <div className="container">
            {children.map(post => (
              <Post
                key={post.data.id}
                {...post.data}
              />
            ))}
          </div>
        )}
        {isLoading && (
          <div className="empty">Загрузка</div>
        )}
        {!children.length && !isLoading && (
          <div className="empty">Нет данных</div>
        )}
      </main>
      <footer>
        <Pagination
          after={after}
          before={before}
          getPosts={getPosts}
        />
      </footer>
    </React.Fragment>
  );
};

export default App;
