var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
var mongoose = require('mongoose')
Task = require('./models/todoListModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://amills:pass1234@cluster-shard-00-00-6ezzw.azure.mongodb.net:27017,cluster-shard-00-01-6ezzw.azure.mongodb.net:27017,cluster-shard-00-02-6ezzw.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
