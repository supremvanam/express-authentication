// File: users.js
// Name: Suprem Vanam
// Student ID: 301177430
// Date: 20-JUNE-2021

const express = require('express');
const router = express.Router();

// Connect to our User model.
const User = require('../models/users');

//Include Controller
const userController = require('../controllers/user');

// 1d. If a user attempts to access the secure area of your site, they should be redirected back to the Login View 
function requireAuth(req,res,next)
{
	if(!req.isAuthenticated())
	{
		return res.redirect('/login');
	}
	next();
}

// GET route for the user list page
router.get('/', requireAuth, userController.displayList);

//Retrieve updated data
router.get('/edit/:id', requireAuth, userController.updateGetList);

// Update data
router.post('/edit/:id', requireAuth, userController.updateList);


// Delete
router.get('/delete/:id', requireAuth, userController.deleteList);

module.exports = router;
