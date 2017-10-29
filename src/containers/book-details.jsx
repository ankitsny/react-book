import React, { Component } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';


const BookDetails = ({ book }) => (

  <div>
    {
      !book ?
        <div>Please Select a book from the book list</div>
        :
        <div>
          Title: {book.title}<br />
          Page: {book.page}
        </div>
    }
  </div>
);

BookDetails.propTypes = {
  book: PropType.shape(
    {
      title: PropType.string,
      page: PropType.number,
    },
  ),
};

BookDetails.defaultProps = {
  book: null,
};


function mapStateTOProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateTOProps)(BookDetails);
