import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
        role="button"
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4" >
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  selectBook: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [{}],
};

function mapStateToProps(state) {
  // Whatever is returned from this function will be treated as props for this container/component
  return {
    books: state.books,
  };
}


// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers 
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container, it needs to know 
// about this new dispatch method, selectBook. Make is available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
