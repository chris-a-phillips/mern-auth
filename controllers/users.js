const express = require('express');
const User = require('../models/User');

const router = express.Router();

// SIGN UP
// POST /api/signup

// Using async/await
// Add the async keyword
router.post('/signup', async (req, res, next) => {
  // wrap it in a try/catch to handle errors
  try {
    // store the results of any asynchronous calls in variables
    // and use the await keyword before them
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ email: req.body.email, password });
    res.status(201).json(user);
  } catch (error) {
    // return the next callback and pass it the error from catch
    return next(error);
  }
});

// //Using promise chain
// router.post('/signup', (req, res, next) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     // return a new object with the email and hashed password
//     .then(hash =>
//       // when returning an object with fat arrow syntax, we
//       // need to wrap the object in parentheses so JS doesn't
//       // read the object curly braces as the function block
//       ({
//         email: req.body.email,
//         password: hash
//       })
//     )
//     // create user with provided email and hashed password
//     .then(user => User.create(user))
//     // send the new user object back with status 201, but `hashedPassword`
//     // won't be send because of the `transform` in the User model
//     .then(user => res.status(201).json(user))
//     // pass any errors along to the error handler
//     .catch(next);
// });

// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {});

module.exports = router;
