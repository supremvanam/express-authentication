const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');

module.exports.displayList = (req, res, next) =>{
    User.find((err,data) =>{
        if(!err){
            res.render('userdata/userlist.ejs',{
                title : "Business Contact List",
                user : data,
            });
        }
        else
        {
            console.error.bind("Error in Retrieving Data " + err);
        }
    }).sort({contactname:1});
};

// Fetch Data
module.exports.updateGetList = (req, res, next) =>{
    let id = req.params.id;

    User.findById(id, (err,data) =>{
        if(!err){
            res.render('userdata/useredit', {title : "Edit Contact List", user : data,});
        }
        else
        {
            console.log(err);
            res.end(err);
        }
    });

};

// Update
module.exports.updateList = (req, res, next) =>{
    
    let id = req.params.id;

    let updateUser = User({
        "_id" : id,
        "contactname" : req.body.contactname,
        "email" : req.body.email,
        "phone" : req.body.phone,
        "city" : req.body.city,
    });
    console.log(updateUser);

    User.updateOne({_id:id}, updateUser, (err) =>{
        if(!err)
        {
            res.redirect('/list');
        }
        else
        {
            console.log(err);
            res.end(err);
        }
    });
};

//Delete Data.
module.exports.deleteList = (req, res, next) =>{
    let id = req.params.id;
    User.remove({_id:id}, (err) =>{
        if(!err){
            res.redirect('/list');
        }
        else
        {
            console.log(err);
            res.send(err);
        }
    });
};

