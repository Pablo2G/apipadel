const Users = require('../models/users')

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const users = await Users.find();
    res.json(users);
};

usersCtrl.createUsers = async (req, res) =>{
    const users = new Users({
        name: req.body.name,
        street: req.body.street,
        phone: req.body.phone,
        email: req.body.email,
        user: req.body.user,
        pass: req.body.pass,
        admin: req.body.admin,
    });
    await users.save();
    res.json({
        status: 'Users save'
    });
}

usersCtrl.getUser =  async (req, res) =>{
    const users = await Users.findById(req.params.id);
    res.json(users);
};

usersCtrl.editUsers = async (req, res) =>{
    const { id } = req.params;
    const users = {
        name: req.body.name,
        street: req.body.street,
        phone: req.body.phone,
        email: req.body.email,
        user: req.body.user,
        pass: req.body.pass,
        admin: req.body.admin,
    }
    await Users.findByIdAndUpdate(id, {$set:users}, {new:true});
    res.json({
        status: 'Users update'
    });
}

usersCtrl.deleteUsers = async (req, res) =>{
    await Users.findOneAndDelete(req.params.id)
    res.json({
        status: 'Users Delete'
    });
}

module.exports = usersCtrl;