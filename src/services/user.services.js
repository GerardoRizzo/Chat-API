const Users = require('../models/user.model');

class UsersServices {
    static async create (newUser) {
        try {
            const userCreated = await Users.create(newUser)
            return userCreated;
        } catch (error) {
            throw error; 
        }
    }

    static async update (id, updateUserData) {
        try {
            const updatedUser = await Users.update(updateUserData, {
                where : { id }
            });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
          const result = await Users.findAll({
            attributes: { exclude: ["password"] },
            include: [
              {
                model: Users,
                as: "name",
                attributes: ["username"],
              },
            ],
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = UsersServices