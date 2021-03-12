const express = require('express');
const accountsRouter = express.Router();

router = (nav)=>{
    let users = [];
    accountsRouter.get('/login', (req,res)=>{
        res.render('login',
        {
            nav,
            title: 'Library Manager | Log in'
        });
    });
    accountsRouter.post('/login', (req,res)=>{
        let user = req.body;
        console.log(user);
        console.log(users);
        let validLogin = false;
        for(let i=0; i<users.length; i++){
            if(user.email === users[i].email && user.password === users[i].password){
                validLogin = true;
                break;
            }
        }
        if(validLogin){
            res.redirect('/');
        }
        else{
            res.redirect('/accounts/login');
        }
    })
    accountsRouter.get('/signup', (req,res)=>{
        let errorMsg = '';
        res.render('signup',
        {
            nav,
            title: 'Library Manager | Sign up',
            errorMsg
        });
    });
    accountsRouter.post('/signup', (req,res)=>{
        let newUser = req.body;
        let userExist = false;
        let errorMsg = '';
        for(let i = 0; i<users.length; i++){
            if(newUser.email === users[i].email){
                userExist = true;
                break;
            }
        }
        if(userExist){
            errorMsg = 'Email id alredy registered.';
            res.render('signup',
            {
                nav,
                title: 'Library Manager | Sign up',
                errorMsg
            });
        }
        else{
            users.push(newUser);
            res.redirect('/accounts/login');
        }
    });
    return accountsRouter;
}

module.exports = router;