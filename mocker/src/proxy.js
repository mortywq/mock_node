'use strict';

const httpProxy = require('http-proxy');
const config = {
    dev: "http://localhost:7384",
};
const target = config['dev'];
httpProxy.createProxyServer({target}).listen(5009);
console.log(`HRONE proxy server: http://localhost:7384 => ${target}`);