
// Select book is an action, do it should return type of action and
// Data iteslf
export const selectBook = book => ({
  type: 'BOOK_SELECT',
  book,
});

