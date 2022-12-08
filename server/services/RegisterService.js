const bcrypt = require("bcrypt");
const RegisterDAL = require('../dal/RegisterDAL');
const saltRounds = 10;

function RegisterAccountService(username, password, callback) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        } else {
            console.log(err)
        }
        RegisterDAL.PostUser(username, hash, function (err, result) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                callback(null, result);
            }
        })
    })

}

function LoginAccountService(username, password, callback){
    RegisterDAL.getUser(username, password, function(err, rows){
        if (err){
            callback(err, null);
        }
        else{
            callback(null, rows);        
        }
    })
}
module.exports = {
    RegisterAccountService,
    LoginAccountService
}