'use strict';
let path = require('path');

module.exports = {
    'server': {
        'root': 'http://localhost:7301'
    },
    'upload': {
        'folder': path.normalize('./src/public/temp/'),
        'prefix': 'http://localhost:7301/temp/'
    }
};