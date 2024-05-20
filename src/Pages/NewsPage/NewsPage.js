import React from 'react';
import MainNews from './components/MainNews';
import NewsList from './components/NewsList';
import "../../Assets/Styles/style.css";

function NewsPage() {
  return (
    <div>
      <MainNews />
      <NewsList />
    </div>
  );
}

export default NewsPage;
