const Product = require("../models/product");
let User = require("../models/user");
const { Op } = require("sequelize");

class UserController {
  async index(req, res) {
    let q = req.query.q;
    let users;
    if (q) {
      users = await User.findAll({
        attributes: ["id", "firstname", "lastname", "email"],
        where: {
          [Op.or]: [
            { firstname: { [Op.like]: `%${q}%` } },
            { lastname: { [Op.like]: `%${q}%` } },
            { email: { [Op.like]: `%${q}%` } },
          ],
        },
      });
    } else {
      users = await User.findAll({
        attributes: ["id", "firstname", "lastname", "email"],
      });
      console.log(users);
      q = "";
    }

    // res.render("users/index", { users, q });
    res.status(200).json({ message: "Get du lieu thanh cong", datas: users });
  }

  async show(req, res) {
    let user_id = req.params.id;
    let user = await User.findByPk(user_id);
    let products = await user.getProducts();
    console.log(products[0]);
    res.status(200).json({ message: "Get dữ liệu thành công", data: user });
  }

  async delete(req, res) {
    let id = req.params.id;

    let user = await User.findByPk(id);
    if (user) {
      let result = await User.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Xoa thanh cong", datas: user });
    } else {
      res.status(404).json({ message: "Khong tim thay user" });
    }
  }

  async create(req, res) {
    let person = req.body;
    let result = await User.create(person);
    console.log(result);
    // res.redirect("/user");
    res.status(201).json({ message: "Tao thanh cong", datas: result });
  }

  async indexServer(req, res) {
    let q = req.query.q;
    let users;
    if (q) {
      users = await User.findAll({
        attributes: ["id", "firstname", "lastname", "email"],
        where: {
          [Op.or]: [
            { firstname: { [Op.like]: `%${q}%` } },
            { lastname: { [Op.like]: `%${q}%` } },
            { email: { [Op.like]: `%${q}%` } },
          ],
        },
      });
    } else {
      users = await User.findAll({
        attributes: ["id", "firstname", "lastname", "email"],
      });
      console.log(users);
      q = "";
    }

    res.render("users/index", { users, q });
  }
}

module.exports = new UserController();
