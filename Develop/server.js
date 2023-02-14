const express = require('expres');
const { json } = require('express');
const apiRoutes = require('./routes/api-Routes');
const htmlRoutes = require('./routes/html-Routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express,json());
app.use(express.urlencoded({extended: true}));
app.use(',/routes/api-Routes', apiRoutes);
app.use('./routes.html-Routes', htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});