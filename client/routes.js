const express = require('express');
const path = require('path');

const router = express.Router();
module.exports = router;

router.get('/', (request, response) => { 
  response.render('pages/home'); 
});

router.get('/about', (request, response) => { 
  response.render('pages/about'); 
});

router.get('/contact', (request, response) => { 
  response.render('pages/contact'); 
});

router.post('/contact', (request, response) => { 
  response.send(`Thanks for contacting us. ${request.body.name}! We will respond shortly.`);
});
