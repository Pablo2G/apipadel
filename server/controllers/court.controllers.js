const Court = require('../models/court')

const courtCtrl = {};

courtCtrl.getCourts = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const court = await Court.find();
    res.json(court);
};

courtCtrl.createCourts = async (req, res) =>{
    console.log(req.body);
    const court = new Court({
        name: req.body.name,
        state: req.body.state, 
    });
    await court.save();
    res.json({
        status: 'Court save'
    });
}

courtCtrl.getCourt =  async (req, res) =>{
    const court = await Court.findById(req.params.id);
    res.json(court);
};

courtCtrl.editCourts = async (req, res) =>{
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

courtCtrl.deleteCourts = async (req, res) =>{
    await Court.findOneAndDelete(req.params.id)
    res.json({
        status: 'Users Delete'
    });
}

module.exports = courtCtrl;