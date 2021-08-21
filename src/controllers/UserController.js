const { findByPk } = require('../models/User');
const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const { name, age, city, email, password } = req.body;

    const user = await User.create({ name, age, city, email, password });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async findById(req, res) {
    const { id } = req.params;
    const user = await User.findAll({
      where: {
        id: id
      }
   } );

    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id: id
      }
   } );

    return res.json(user);
  },
};
