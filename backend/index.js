const express = require('express');
const routes = require('./routes/routes.js');
const app = express();  //Creating an express app

app.listen(process.env.PORT | 5000); //App either listens to port provided in production or to 5000 if no port is provided
console.log(`Listening to express at port ${process.env.PORT | 5000}`);


app.use('/' , routes); //Displaying the respective routes on the browser.
