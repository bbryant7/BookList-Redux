
//select book is an action creator, it will need an action type
export function selectBook(book) {

  return {
    type: BOOK_SELECTED,
    payload:{
      pages: bookList.pages,
      author: bookList.author,
      price: bookList.price,
      published_date: bookList.published_date,
      category: bookList.category
    }
  };
}
