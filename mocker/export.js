'use strict';

exports.path = '/:module/export';
exports.post = function *(){
    this.body = {
        result: true,
        data: {}
    }
};
