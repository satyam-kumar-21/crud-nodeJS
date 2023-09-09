require('dotenv').config();
const express = require('express');
const cors = require("cors"); //used for cross plateform like front end backend for more search on google
// const User = require('./models/userModels')

const connectToDb = require('./config/db.js');

const app = express();

//express middleleware  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//init connection to db
connectToDb();


// Set the views directory
// app.set('views', path.join(__dirname, 'app', 'views'));

// app.set('views', './views');

// // Set EJS as the default view engine
// app.set('view engine', 'ejs');


const userRoutes = require('./routes/userRoutes.js');

app.use('/', userRoutes);

// export default app;
// or 
module.exports = app; //we dont need to import in another file