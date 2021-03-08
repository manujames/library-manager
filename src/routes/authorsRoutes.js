const express = require('express');
const authorsRouter = express.Router();

router = (nav)=>{
    const authors = [
        {
            name: 'Joseph Barbera',
            books: 'Tom and Jerry, My Life in Toons: From Flatbush to Bedrock in Under a Century',
            description: "Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.",
            img:'/images/authors/joseph-barbera.jpg'
        },
        {
            name:'J.K. Rowling',
            books: 'Harry Potter, The Casual Vacancy, The Tales of Beedle the Bard',
            description: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
            img:'/images/authors/jk-rowling.webp'
        },
        {
            name: 'Vaikom Muhammed Basheer',
            books: 'Pathummayude Aadu, Balyakala sakhi, Mathilukal, Premalekhanam',
            description: 'Vaikom Muhammad Basheer is regarded as one of the prominent literary figures ever existed in india. He was a legend in Kerala. He was one of those outspoken figures who revolutionized Malayalam Literature, and Thus the World Literature itself with his dauntless sarcasm, satire, and black humor. Often referred to as the Beypore Sultan (the king of Beypore) by the colleagues, he was one of the prominent figures behind the artistical, economical, and social reformation of the Kerala Culture.',
            img:'/images/authors/basheer.jpg'
        }
    ];

    authorsRouter.get('/', (req,res)=>{
        res.render('authors',
        {
            nav,
            authors,
            title: 'Library Manager | Authors'
        });
    });

    // authorsRouter.get('/:id', (req,res)=>{
    //     res.render('author',
    //     {
    //         nav,
    //         author: authors[req.params.id],
    //         name: `Library Manager | ${authors[req.params.id].name}`
    //     });
    // });
    return authorsRouter;
}

module.exports = router;