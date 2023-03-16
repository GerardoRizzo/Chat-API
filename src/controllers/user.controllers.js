const UsersServices = require('../services/user.services')

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const UpdateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const UpdateUserData = req.body;
        await UsersServices.update(id, updateUserData);
        res.status(204).send();
    } catch (error) {
        next(error)
    }
};

const getAllUsers = async (req, res, next) => {
    try {
      const users = await UsersServices.getAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    createUser,
    UpdateUser,
    getAllUsers,
}