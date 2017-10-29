import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-details';

const App = props => (
  <div>
    <BookList />
    <BookDetail />
  </div>
);


export default App;
