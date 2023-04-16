const router = require('express').Router();
const { Post, Comment , User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', async(req, res) => {

    try{
  
      res.render('dashboard');
  
    } catch(err){
      res.status(500).json(err);
    }
  });

  module.exports = router;