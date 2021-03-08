const express = require('express');
const app = express();

const nav = [
    {link:'/books', name:'Books'},
    {link:'/authors', name:'Authors'}
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