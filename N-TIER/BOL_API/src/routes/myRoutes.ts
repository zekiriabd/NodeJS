var express     = require('express');
var UserOrm     = require('dalorm/bin');

const User = new UserOrm();

const routes = (app) =>{
  app.route('/users')
    .get((req, res, next) =>{
        res.send(User.GetUser() + "00000");
    });
}

export default routes;

