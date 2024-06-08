const getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
  };
  
  const createUser = (req, res) => {
    res.json({ message: 'Create a user' });
  };
  
  module.exports = {
    getUsers,
    createUser
  };
  