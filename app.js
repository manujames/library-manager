const express = require('express');
const app = express();

const nav = [
    {link:'/books', name:'Books'},
    {link:'/authors', name:'Authors'},
    {link:'/books/add-book', name:'Add New Book'},
    {link:'/authors/add-author', name:'Add New Author'},
    {link:'/signin', name:'Sign in'},
    {link:'/signup', name:'Sign up'}
]

const booksRouter = require('./src/routes/booksRoutes')(nav);
const authorsRouter = require('./src/routes/authorsRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', './src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.get('/', (req,res)=>{
    res.render('index',
    {
        nav,
        title: 'Library Manager'
    });
});

app.listen(5000,()=>{
    console.log('Server started on port 5000');
});