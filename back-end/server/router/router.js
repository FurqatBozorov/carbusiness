const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('express').Router()
const controlleres = require('../controller/controller');

route.use(bodyParser.json());

route.get("/",controlleres.get_all_cars );
route.get('/soldcars',controlleres.get_sold_cars);
route.get('/getrecievables',controlleres.get_all_recievables)
route.get('/getcashflow', controlleres.get_cashflow)
route.post('/purchase',controlleres.buy_a_car)
route.post('/sellcar',controlleres.sell_a_car);
route.post('/investment',controlleres.make_an_investment )
route.post('/paidrecievable', controlleres.pay_for_recievables)

module.exports=route;