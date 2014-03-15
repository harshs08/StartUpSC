/**
 * User: harshsingh
 * Date: 3/14/14
 * Time: 4:52 PM
 */

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    local            : {
        fname        : String,
        lname        : String,
        email        : String,
        password     : String
    },
    facebook         : {
        fname        : String,
        lname        : String,
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        fname        : String,
        lname        : String,
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// password check
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users
module.exports = mongoose.model('User', userSchema);