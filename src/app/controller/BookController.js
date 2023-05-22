const BookModel = require("../model/Book");
class BookController {

  CreateBook(req , res , next){
    const book = new BookModel(req.body)
    book.save()
    .then(() => res.send(book))
    .catch((err) => console.log(err.message));
  }  

  getHelloWorld(req , res , next){
    res.send('Hello World')
  }

  getAllBook(req, res, next) {
    BookModel.find()
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getBookById(req, res, next) {
    const bookId = req.params.id;
    const book = BookModel.find(bookId);
    if (!book) {
      return res.status(404).send("Không có cuốn sách nào có id trên");
    }
    return res.send(book);
  }

  EditBookById(req, res, next) {
    BookModel.updateOne({ _id: req.params.id }, req.body)
      .then((book) => res.json(book))
      .catch((err) => console.log(err.message));
  }

  //   Xóa mềm
  deleteBookById(req, res, next) {
    BookModel.delete({ _id: req.params.id })
      .then((book) => {
        console.log(book);
      })
      .catch((err) => {
        res.send(err.message);
      });
  }
    
    deleteBookByIdForever(req, res, next) {
        BookModel.deleteOne({ _id: req.params.id })
          .then((book) => {
            console.log(book);
          })
          .catch((err) => {
            res.send(err.message);
          });
      }
}

module.exports = new BookController();