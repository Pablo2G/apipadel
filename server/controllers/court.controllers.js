const Court = require('../models/court')

const courtCtrl = {};

courtCtrl.getUsers = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const court = await Court.find();
    res.json(court);
};

courtCtrl.createUsers = async (req, res) =>{
    const court = new eacher(req.body);
    await court.save();
    res.json({
        status: 'Users save'
    });
}

courtCtrl.getUser =  async (req, res) =>{
    const court = await Court.findById(req.params.id);
    res.json(court);
};

courtCtrl.editUsers = async (req, res) =>{
    const { id } = req.params;
    const court = {
        name: req.body.name,
        state: req.body.state,
    }
    await Court.findByIdAndUpdate(id, {$set:court}, {new:true});
    res.json({
        status: 'Users update'
    });
}

courtCtrl.deleteUsers = async (req, res) =>{
    await Court.findOneAndDelete(req.params.id)
    res.json({
        status: 'Users Delete'
    });
}

module.exports = courtCtrl;