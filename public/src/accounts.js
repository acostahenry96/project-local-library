const findAccountById = (accounts, id) => accounts.find((user) => user.id === id);

function sortAccountsByLastName(accounts) {
  const sortedNames = accounts.map((account) => account.name.last).sort();
  let sortedAccounts = [];
  for (let lastName in sortedNames) {
    sortedAccounts.push(
      accounts.find((account) => account.name.last === sortedNames[lastName])
    );
  }
  return sortedAccounts;
}

function numberOfBorrows(account, books) {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        sum += 1;
      }
    }
  }
  return sum;
}

const findById = (array, id) => array.find((object) => object.id === id);

const getBooksPossessedByAccount = (account, books, authors) =>
  books.filter((book) => {
    if (!book.borrows[0].returned && account.id === book.borrows[0].id) 
      return book["author"] = findById(authors, book.authorId);
    
  });
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};