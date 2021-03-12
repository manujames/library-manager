const express = require('express');
const booksRouter = express.Router();

router = (nav)=>{
    const books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            description: "For over 65 years, Tom and Jerry have entertained generations of cartoon viewers with their crazy game of cat and mouse. For this odd pair the natural order is never as simple as predator and prey, and anyone who's seen this mischevious duo knows that the chase goes both ways. With some fo the most elaborate and explosive prusuits imaginable, Tom and Jerry have invented invisible paint, traveled back in time, and defied amost every law of physics.",
            img:'/images/books/Tom-and-Jerry-L.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            description: 'The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.',
            img:'/images/books/harry-potter.webp'
        },
        {
            title: 'Pathummayude Aadu',
            author: 'Vaikom Muhammed Basheer',
            genre: 'Drama',
            description: 'Pathummayude Aadu is one of the most popular works by Vaikom Muhammad Basheer. It has a long foreword by the novelist himself and a longer afterword by P K Balakrishnan. This special edition also has illustrations by Sherif and photographs of the real characters including Pathumma and goats.',
            img:'/images/books/pathummayude-aadu.png'
        }
    ];

    booksRouter.get('/', (req,res)=>{
        let response = {};
        response.title = 'Library Manager | Books';
        response.books = books;
        if(req.session.user){
            response.nav = nav.user;
            response.profileName = req.session.user.fname + ' ' + req.session.user.sname;
        }
        else{
            response.nav = nav.guest;
            response.profileName = '';
        }
        res.render('books',response);
    });

    booksRouter.get('/add-book', (req,res)=>{
        let response = {};
        response.title = 'Library Manager | Add New Book';
        if(req.session.user){
            response.nav = nav.user;
            response.profileName = req.session.user.fname + ' ' + req.session.user.sname;
            res.render('addBook',response);
        }
        else{
            response.nav = nav.guest;
            response.profileName = '';
            res.render('accessDenied',response);
        }
    });

    booksRouter.post('/add-book', (req,res)=>{
        let newBook = req.body;
        if(req.session.user){
            books.push(newBook);
            res.redirect('/books');
        }
        else{
            // If not logged in, do not add book.
            // Redirect to same page. It will be handled in get route.
            res.redirect('/books/add-book');
        }
    });
    return booksRouter;
}

module.exports = router;