'use strict';
var dbConn = require('./../../config/db.config');
//User object create
var User = function(user){
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.email = user.email;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
User.create = function (newUsr, result) {
dbConn.query("INSERT INTO users set ?", newUsr, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
User.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
User.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('users: ', res);
  result(null, res);
}
});
};
User.update = function(id, user, result){
dbConn.query("UPDATE users SET firstName=?,lastName=?, username =?, email=? WHERE id = ?", [user.firstName,user.lastName, user.username, user.email, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
User.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= User;