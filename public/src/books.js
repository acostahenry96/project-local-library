const findById = (array, id) => array.find((object) => object.id === id)

const findAuthorById = (authors, id) => findById(authors, id)

const findBookById = (books, id) => findById(books, id)

const partitionBooksByBorrowedStatus = books => [books.filter((book) => !book.borrows[0].returned), books.filter((book) => book.borrows[0].returned)]

const getBorrowersForBook = (book, accounts) => {
  let results = []
      book.borrows.forEach(record => {
      let account = findById(accounts, record.id)
      account["returned"] = record.returned
      results.push(account)
      
  });
  return results.slice(0, 10)
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
