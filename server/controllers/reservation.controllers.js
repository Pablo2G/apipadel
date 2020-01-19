const Reservation = require('../models/reservation')

const reservationCtrl = {};

reservationCtrl.getUsers = async (req, res) =>{
    //Ultima forma de trabajar con las peticiones de busqueda
    const reservation = await Reservation.find();
    res.json(reservation);
};

reservationCtrl.createUsers = async (req, res) =>{
    const reservation = new eacher(req.body);
    await reservation.save();
    res.json({
        status: 'Users save'
    });
}

reservationCtrl.getUser =  async (req, res) =>{
    const reservation = await Reservation.findById(req.params.id);
    res.json(reservation);
};

reservationCtrl.editUsers = async (req, res) =>{
    const { id } = req.params;
    const reservation = {
        user: req.body.user,
        court: req.body.court,
        date: req.body.date,
    }
    await Reservation.findByIdAndUpdate(id, {$set:reservation}, {new:true});
    res.json({
        status: 'Users update'
    });
}

reservationCtrl.deleteUsers = async (req, res) =>{
    await Reservation.findOneAndDelete(req.params.id)
    res.json({
        status: 'Users Delete'
    });
}

module.exports = reservationCtrl;