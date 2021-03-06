const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/padel/users', require('./routers/users.routes'));
app.use('/api/padel/reservation', require('./routers/reservation.routes'));
app.use('/api/padel/court', require('./routers/court.routes'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port '+app.get('port'));
});
