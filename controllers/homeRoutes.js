const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth , async (req,res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: {exclude: ['password']}
            }]
        });
        
        const posts = postData.map((post)=>post.get({plain: true }))
        console.log(posts)

        res.render('homepage',{
        posts,
        logged_in: req.session.logged_in,
      })
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;