const db = require("./models");
const controller = require("./controllers/customer.controller");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.get('/', function (req, res) {
    res.send('Express REST API');
});

app.post('/api/v1/customers/add', jsonParser, async function (req, res) {

    const cus = await controller.createCustomer({
        name: req.body.name,
        address: req.body.address,
    });
    res.send(cus);
});

app.post('/api/v1/customers/accounts/add', jsonParser, async function (req, res) {

    const acc = await controller.createAccount(req.body.customerId,{
        number: req.body.account.number,
        name: req.body.account.name,
    });
    res.send(acc);
});

app.get('/api/v1/customers/customer', jsonParser, async function (req, res) {

    const cus = await controller.findCustomerById(req.body.customerId);

    res.send(cus);
});

app.get('/api/v1/customers/accounts/account', jsonParser, async function (req, res) {

    const acc = await controller.findAccountById(req.body.accountId);

    res.send(acc);
});

app.get('/api/v1/customers/all', jsonParser, async function (req, res) {

    const cus = await controller.findAll();

    res.send(cus);
});

app.delete('/api/v1/customers/customer', jsonParser, async function (req, res) {
   await controller.deleteCustomer(req.body.customerId);

   res.sendStatus(200);
});

app.delete('/api/v1/customers/accounts/account', jsonParser, async function (req, res) {
    await controller.deleteAccount(req.body.accountId);

    res.sendStatus(200);
});

app.listen(3000, async function () {});
