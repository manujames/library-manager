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
        res.render('books',
        {
            nav,
            books,
            title: 'Library Manager | Books'
        });
    });

    // booksRouter.get('/:id', (req,res)=>{
    //     res.render('book',
    //     {
    //         nav,
    //         book: books[req.params.id],
    //         title: `Library Manager | ${books[req.params.id].title}`
    //     });
    // });
    booksRouter.get('/add-book', (req,res)=>{
        res.render('addBook',
        {
            nav,
            title: 'Library Manager | Add New Book'
        });
    });
    return booksRouter;
}

module.exports = router;