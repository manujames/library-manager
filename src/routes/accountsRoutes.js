const express = require('express');
const accountsRouter = express.Router();

router = (nav)=>{
    let users = [];
    accountsRouter.get('/login', (req,res)=>{
        let response = {};
        if(req.session.user){
            res.redirect('/');
        }
        else {
            response.title = 'Library Manager | Log in';
            response.nav = nav.guest;
            response.profileName = '';
            response.user = {fname: '', sname: '', email: '', password: ''};
            response.errorMsg = '';
            response.successMsg = '';
            res.render('login',response);
        }
    });

    accountsRouter.post('/login', (req,res)=>{
        // Fetch user inputs from form
        let user = req.body;
        // Flags
        let validLogin = false;
        let response = {};
        response.title = 'Library Manager | Log in';
        // Check login credentials
        for(let i=0; i<users.length; i++){
            if(user.email === users[i].email && user.password === users[i].password){
                user = users[i];
                validLogin = true;
                break;
            }
        }
        if(validLogin){
            // Set session information
            req.session.user = user;
            res.redirect('/');
        }
        else{
            response.nav = nav.guest;
            response.profileName = '';
            response.user = user;
            response.errorMsg = 'Wrong email or password';
            response.successMsg = '';
            // Render page with error/success message
            res.render('login',response);
        }
    })
    
    accountsRouter.get('/signup', (req,res)=>{
        let response = {};
        if(req.session.user){
            res.redirect('/');
        }
        else{
            response.title = 'Library Manager | Sign up';
            response.nav = nav.guest;
            response.profileName = '';
            response.user = {fname: '', sname: '', email: '', password: ''};
            response.errorMsg = '';
            response.successMsg = '';
            res.render('signup',response);
        }
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
        let response = {};
        response.title = 'Library Manager | Sign up';
        //Check whether email id already registered
        for(let i = 0; i<users.length; i++){
            if(newUser.email === users[i].email){
                userExist = true;
                break;
            }
        }
        if(userExist){
            response.nav = nav.guest;
            response.user = newUser;
            response.profileName = '';
            response.errorMsg = 'Email id alredy registered.';
            response.successMsg = '';
            // Render page with error/success message
            res.render('signup',response);
        }
        else{
            // Add new user to the users array
            // and set session information
            users.push(newUser);
            req.session.user = newUser;
            res.redirect('back');
        }
    });

    accountsRouter.get('/logout', (req, res)=>{
        req.session.destroy();
        res.redirect('/accounts/login');
    });
    return accountsRouter;
}

module.exports = router;