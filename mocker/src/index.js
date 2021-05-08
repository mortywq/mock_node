'use strict';

const path = require('path');

const koa = require('koa');
const cors = require('koa-cors');
const sleep = require('koa-sleep');
const serve = require('koa-static');
const logger = require('koa-logger');
const bodify = require('koa-body');
const router = require('koa-router-decors');

const chalk = require('chalk');

const port = 7384;

const app = new koa();
app.use(sleep(1));

//支持跨域访问
app.use(cors());
app.use(logger());
//使用非严格模式，解析HTTP DELETE请求的请求体Body
app.use(bodify({strict: false}));


app.use(router.load('/api/v1', `${__dirname}/mocker`).routes());

app.use(serve(`${__dirname}${path.sep}public`))

app.listen(port);
console.log(`HRONE static server started: http://localhost:${chalk.red(port)}`);