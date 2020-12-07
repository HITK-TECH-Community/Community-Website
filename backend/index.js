/*
* This server is created using node v14+
* Consider upgrading your node to the lts version (14.15.1) at least if the import statement does not work.
* After downloading or cloning, type npm install inside the backend folder in the terminal to install all the packages used.
* Then type npm run start to start the node server, or type npm run devstart to start the server using nodemon.
*/

import express from  'express';
import routes from './routes/routes.js';
const app = express();  //Creating an express app

app.listen(process.env.PORT | 5000); //App either listens to port provided in production or to 5000 if no port is provided
console.log(`Listening to express at port ${process.env.PORT | 5000}`);


app.use('/' , routes); //Displaying the respective routes on the browser.
