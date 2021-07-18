'use strict';
var dbConn = require('./../../config/db.config');
//User object create
var User = function(user){
  this.first_name     = user.first_name;
  this.last_name      = user.last_name;
  this.email          = user.email;
  this.phone          = user.phone;
  this.organization   = user.organization;
  this.designation    = user.designation;
  this.salary         = user.salary;
  this.status         = user.status ? user.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
User.create = function (newEmp, result) {
dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
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
dbConn.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [user.first_name,user.last_name,user.email,user.phone,user.organization,user.designation,user.salary, id], function (err, res) {
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