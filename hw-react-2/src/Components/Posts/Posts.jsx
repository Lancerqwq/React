import React, { useEffect, useState } from 'react';
import './posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [users, setUsers] = useState([]);
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const urls = ['posts', 'users'];

  const getTotalList = () => {
    Promise.all(urls.map((url) => fetch(`${baseUrl}/${url}`)))
      .then((res) => Promise.all(res.map((item) => item.json())))
      .then(([postsData, usersData]) => {
        setTotalPage(postsData.length);
        setUsers(usersData);
      });
  };

  const amountPages = () => [...Array(Math.ceil(totalPage / limit)).keys()].map((i) => i + 1);
  const pages = amountPages();

  const getPostList = () => {
    fetch(`${baseUrl}/posts?_limit=${limit}&_page=${currentPage}`)
      .then((res) => res.json())
      .then((postsData) => {
        setPosts(postsData);
      });
  };

  useEffect(() => {
    getTotalList();
  }, []);

  useEffect(() => {
    amountPages();
    getPostList();
  }, [currentPage, limit]);

  const items = posts.map((post) => {
    const userList = users.find((user) => user.id === post.userId);

    if (!userList) {
      return;
    }

    return (
      <div key={post.id} className="postitem">
        <span>{post.id}</span>
        <div>{`Title: `}<span className="title">{post.title}</span></div>
        <div className="body">{post.body}</div>
        <div className='autor'>{`Autor`}<span className='autor-name'>{userList.name}</span></div>
      </div>
    );
  });

  if (posts.length === 0 && users.length === 0) {
    return (<div>Loading...</div>);
  }

  return (
    <>
      {items}
      <button onClick={() => setLimit((prevLimit) => prevLimit + 5)}>SHOW MORE</button>
      <div className="pages">
        {pages.map((page, index) => (
          <span
            key={index}
            className={currentPage === page ? 'current-page' : 'page'}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </>
  );
}
