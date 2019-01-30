// // app/models/user.js
// // load the things we need
// var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

// // define the schema for our user model
// var userSchema = mongoose.Schema({

//     local            : {
//         email        : String,
//         password     : String,
//         siteAccess   : [{domain: String}]
//     },
//     facebook         : {
//         id           : String,
//         token        : String,
//         email        : String,
//         name         : String,
//         siteAccess   : [{domain: String}] 
//     },
//     twitter          : {
//         id           : String,
//         token        : String,
//         displayName  : String,
//         username     : String,
//         siteAccess   : [{domain: String}]        
//     },
//     google           : {
//         id           : String,
//         token        : String,
//         email        : String,
//         name         : String,
//         siteAccess   : [{domain: String}]        
//     }

// });

// // methods ======================
// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// // create the model for users and expose it to our app
// module.exports = mongoose.model('User', userSchema);


var User = function (data) {  
    this.username = data.username;
    this.password = data.password;

    this.authenticate = function(user){
        var ret = false;

        for(var i=0; i<users.length; i++){
            if(users[i].email === user.username && users[i].pwd === user.password){
                ret = true
            }
        }

        return ret;

    }

    this.get = function(user){
        var ret = {};
        for(var i=0; i<users.length; i++){
            if(users[i].email === user.username && users[i].pwd === user.password){
                ret = users[i];
            }
        }    

        return ret;    
    }

}
var users = [
    {
        id: "1",
        company: "Acme Products",
        fName: "Wiley",
        lName: "Coyote",
        email: "w.coyote@acmeproducts.com",
        enabled: true,
        pwd: "Dem0!@#$"
    }                                                         
]
module.exports = User;