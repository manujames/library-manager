const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:false}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const nav = [
    {link:'/books', name:'Books'},
    {link:'/authors', name:'Authors'},
    {link:'/books/add-book', name:'Add New Book'},
    {link:'/authors/add-author', name:'Add New Author'},
    {link:'/accounts/login', name:'Log in'},
    {link:'/accounts/signup', name:'Sign up'}
]

const booksRouter = require('./src/routes/booksRoutes')(nav);
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const accountsRouter = require('./src/routes/accountsRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', './src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/accounts',accountsRouter);

app.get('/', (req,res)=>{
    res.render('index',
    {
        nav,
        title: 'Library Manager'
    });
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}.`);
});