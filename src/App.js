import React from 'react';
import BlogList from './components/BlogList'; // Ensure the path is correct
import blogData from './blogData.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Blog Display</h1>
      <BlogList posts={blogData} />
    </div>
  );
}

export default App;
