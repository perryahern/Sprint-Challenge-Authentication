const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const user = new User(req.user);
  user.save()
    .then(newUser => res.status(200).send(newUser))
    .catch(error => res.status(500).json({ error: 'Could not save user information.' }));
};

module.exports = {
  createUser
};
