const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryData', {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    img: String
});
const BookData = mongoose.model('book', BookSchema);

const AuthorSchema = new Schema({
    name: String,
    books: String,
    description: String,
    img: String
});
const AuthorData = mongoose.model('author', AuthorSchema);

const UserSchema = new Schema({
    fname: String,
    sname: String,
    email: String,
    password: String
});
const UserData = mongoose.model('user', UserSchema);

module.exports.BookData = BookData;
module.exports.AuthorData = AuthorData;
module.exports.UserData = UserData;
