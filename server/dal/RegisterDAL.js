let mysql = require('mysql2');
const bcrypt = require("bcrypt");
const conn = require('../database');

function PostUser(username, hash, callback) {
    var query = "INSERT INTO realtor.users (username, password, role) VALUES (?,?, 'user')";
    conn.query( query, [username, hash], function (err, result) {
            
            if (err) {
                return callback(err, null);
            }
            else {
                callback(null, result);
            }
        }
    );
}

  function getUser(username, password, callback){
    var query = 'select * from realtor.users where username = ?';
    conn.query(query, [username], function(err, rows){
        if (err){
            return callback(err, null)
        }

        // if username does not exist
        if (rows.length == 0){
            return callback(null, "Wrong username or password");
        }

        if (rows.length > 0){
            bcrypt.compare(password, rows[0].password, (err, result) => {
                if (result){
                    callback(null, rows[0]);
                }
                else{
                    callback(err, "Wrong username or password");
                }
            })
        }
        else{
            console.log("no user found");
        }
    })
  }

module.exports = {
    PostUser,
    getUser
}