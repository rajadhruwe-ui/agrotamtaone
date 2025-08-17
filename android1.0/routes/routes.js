const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multer = require('multer');
const fs = require('fs');

// image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads');
    },
    filename: function(req, file, cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

var upload = multer({
    storage: storage,
}).single('image');

// insert an user into database route 
router.post('/add', upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.file.filename,
        });

        await user.save();
        req.session.message = {
            type: 'success',
            message: 'User added successfully!',
        };
        res.redirect('/');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});



//Get all users route
router.get("/", async (req, res) => {
    try {
        const users = await User.find().exec();
        res.render('index', {
            title: 'Home Page',
            users: users,
        });
    } catch (err) {
        res.json({ message: err.message });
    }
});

// add 
router.get("/add", (req, res)=>{
    res.render("add_user.ejs" , {title:"Add User"});
});


// edit an user route
router.get('/edit/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const user = await User.findById(id).exec();

        if (!user) {
            return res.redirect('/');
        }

        res.render('edit_users.ejs', {
            title: "Edit User",
            user: user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



// update user route
router.post('/update/:id', upload, async (req, res) => {
    try {
        let id = req.params.id;
        let new_image = '';
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                image: new_image,
            },
            { new: true } // To get the updated document as a result
        );

        if (!updatedUser) {
            return res.json({ message: "User not found", type: "danger" });
        }else{
        req.session.message = {
            type: "success",
            message: "User Updated successfully",
        };
        res.redirect("/");
    }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});




// Delete user route

router.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the user by ID and remove it
        const removedUser = await User.findByIdAndRemove(id);

        if (!removedUser) {
            return res.json({ message: "User not found", type: "danger" });
        }

        // Remove the associated image from the uploads directory
        try {
            fs.unlinkSync('./uploads/' + removedUser.image);
        } catch (err) {
            console.error(err);
        }

        req.session.message = {
            type: "success",
            message: "User deleted successfully",
        };

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Adjust the route based on your application's needs






module.exports = router;