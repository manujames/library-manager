const express = require('express');
const accountsRouter = express.Router();

router = (nav)=>{
    let users = [];
    accountsRouter.get('/login', (req,res)=>{
        let errorMsg = '';
        let successMsg = '';
        res.render('login',
        {
            nav,
            title: 'Library Manager | Log in',
            user: {email: '', password: ''},
            errorMsg,
            successMsg
        });
    });

    accountsRouter.post('/login', (req,res)=>{
        // Fetch user inputs from form
        let user = req.body;
        // Flags
        let validLogin = false;
        let errorMsg = '';
        let successMsg = '';
        // Check login credentials
        for(let i=0; i<users.length; i++){
            if(user.email === users[i].email && user.password === users[i].password){
                validLogin = true;
                break;
            }
        }
        if(validLogin){
            successMsg = 'Success. Redirecting to home page.'
        }
        else{
            errorMsg = 'Wrong email or password'
        }
        // Render page with error/success message
        res.render('login',
        {
            nav,
            title: 'Library Manager | Log in',
            user,
            errorMsg,
            successMsg
        });
    })
    
    accountsRouter.get('/signup', (req,res)=>{
        let errorMsg = '';
        let successMsg = '';
        res.render('signup',
        {
            nav,
            title: 'Library Manager | Sign up',
            user: {fname: '', sname: '', email: '', password: ''},
            errorMsg,
            successMsg
        });
    });
    
    accountsRouter.post('/signup', (req,res)=>{
        // Fetch user inputs from form
        let newUser = {
            fname: req.body.fname,
            sname: req.body.sname,
            email: req.body.email,
            password: req.body.password
        };
        // Flags
        let userExist = false;
        let errorMsg = '';
        let successMsg = '';
        //Check whether email id already registered
        for(let i = 0; i<users.length; i++){
            if(newUser.email === users[i].email){
                userExist = true;
                break;
            }
        }
        if(userExist){
            // Set error message
            errorMsg = 'Email id alredy registered.';
        }
        else{
            // Add new user to the users array and set success message
            users.push(newUser);
            successMsg = 'Success. Redirecting to log in page.';
        }
        // Render page with error/success message
        res.render('signup',
        {
            nav,
            title: 'Library Manager | Sign up',
            user: newUser,
            errorMsg,
            successMsg
        });
    });
    return accountsRouter;
}

module.exports = router;