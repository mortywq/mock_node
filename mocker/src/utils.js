'use strict';

let fetch = require('node-fetch');
var _  = require('lodash');

exports.appendInitData = function*(html, ctx, data){
    if(data){
        data = JSON.stringify(data);
    }
    if(ctx.headers.source){
        data = yield fetch(ctx.headers.source, {
            headers: ctx.headers,
        }).then(function(res){
            return res.text();
        });
        data = this.getSubString(data, 'var InitData = ', ';</script>');
    }
    if(data) html = html.replace('{}', data);
    return html;
};

exports.getSubString = function(string, before, after){
    let start = string.indexOf(before);
    let end   = string.indexOf(after);
    if(start === -1 || end === -1) return '';
    start += before.length;
    return string.substring(start, end);
};

exports.orderBy = function (data, sort) {
    if(sort) {
        let sorts = sort.split(',');
        let sortArr = [];
        let orderArr = [];
        for (var sortItem of sorts) {
            sortArr.push(sortItem.split(' ')[0]);
            orderArr.push(sortItem.split(' ')[1]);
        }
        return _.orderBy(data, sortArr, orderArr);
    }
    return data;
}

exports.guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};

exports.page = function (table, req) {
    const total = table.length;
    const pageNum = req.pageNum ? parseInt(req.pageNum) : 1;
    const pageSize = req.pageSize ? parseInt(req.pageSize) : 25;
    return  {
        result: true,
        data: {
            "page": {
                pageNum: pageNum >= 0 ? (pageSize && (Math.ceil(total / pageSize) < pageNum) ? Math.ceil(total / pageSize) : pageNum) : 1,
                "total": total
            },
            "data": table.slice(0).splice((pageNum - 1) * pageSize, pageSize)
        }
    }
};


exports.tenant = 'wfm40@reg';
exports.personId = "v2";

exports.processInstanceId = "test";

exports.machines = [{
    "id": "7a202eb9-aaa2-4c12-a18a-5e562dbd127f",
    "code": "001",
    "type": "1",
    "address": "1132"
}, {
    "id": "APP_BHT",
    "code": "APP_BHT",
    "type": "3",
    "address": "中国江苏省苏州市虎丘区珠江路"
}, {
    "id": "APP_GPS",
    "code": "APP_GPS",
    "type": "9",
    "address": "中国江苏省苏州市虎丘区珠江路"
}, {
    "id": "APP_QR",
    "code": "APP_QR",
    "type": "5",
    "address": "234567890"
}, {
    "id": "562f8e87-e43a-4efe-b198-a74fdc976656",
    "code": "B001",
    "type": "3",
    "address": ""
}, {
    "id": "fa8d13ee-dbc6-4d7d-be02-22364fb4e1b6",
    "code": "BHT01",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "dfd6909c-9e16-40ed-9f23-73494df8f388",
    "code": "BHT02",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "cef803cd-a562-4fdb-95b7-8b60941a192f",
    "code": "BHT03",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "4093f182-f2c9-44d0-9c8d-efdfd19d4d9f",
    "code": "BHT04",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "0f8c8e46-2a5d-4dd8-8718-11386ae4048b",
    "code": "BHT05",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "73dad0c7-4262-440a-b97b-b60e949a1cbd",
    "code": "BHT06",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "19f9e847-5162-4cd3-955f-6dae4f370b02",
    "code": "BHT07",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "789d2214-baa7-48d4-b8bd-60e5f480efb0",
    "code": "BHT08",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "581711b3-02c5-41b7-b14d-95c714a47faa",
    "code": "BHT09",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "5b67662b-252d-4e0c-82bc-ecae05464fb0",
    "code": "BHT10",
    "type": "3",
    "address": "昆山首创置业"
}, {
    "id": "6f3a3016-f8ed-4618-8119-a4677304475d",
    "code": "BHT_11",
    "type": "3",
    "address": ""
}, {
    "id": "98708dfb-b2a3-48b1-a2a1-77fe2894d09b",
    "code": "BHT_12",
    "type": "3",
    "address": ""
}, {
    "id": "cdaddec5-f8d9-4e94-a343-94751ac86551",
    "code": "elsaGPS",
    "type": "9",
    "address": "中国上海市杨浦区长白新村"
}, {
    "id": "INN",
    "code": "INN",
    "type": "1",
    "address": ""
}, {
    "id": "INN2",
    "code": "INN2",
    "type": "1",
    "address": ""
}, {
    "id": "OUT",
    "code": "OUT",
    "type": "1",
    "address": null
}, {
    "id": "OUT2",
    "code": "OUT2",
    "type": "1",
    "address": ""
}];
exports.organization = [{
    "unitId": "020",
    "unitName": "业务发展中心",
    "punitId": "000000",
    "isChecked": false,
    "unitCode": '223'
}, {
    "unitId": "020060030",
    "unitName": "市场营销部",
    "punitId": "020",
    "isChecked": false,
    "unitCode": '23434'
}, {
    "unitId": "020060031",
    "unitName": "客户发展部",
    "punitId": "020",
    "isChecked": false,
    "unitCode": '234223'
}, {
    "unitId": "020060032",
    "unitName": "联盟伙伴部",
    "punitId": "020",
    "isChecked": false,
    "unitCode": '11223'
}, {
    "unitId": "021",
    "unitName": "财务部",
    "punitId": "000000",
    "isChecked": false,
    "unitCode": '789'
}, {
    "unitId": "022",
    "unitName": "产品发展中心",
    "punitId": "000000",
    "isChecked": false,
    "unitCode": '098'
}, {
    "unitId": "022060030",
    "unitName": "测试部",
    "punitId": "022",
    "isChecked": false,
    "unitCode": '456'
}, {
    "unitId": "022060030001",
    "unitName": "brook",
    "punitId": "022060030",
    "isChecked": false,
    "unitCode": 'frf'
}, {
    "unitId": "022060030002",
    "unitName": "vick",
    "punitId": "022060030",
    "isChecked": false,
    "unitCode": 'efrf'
}, {
    "unitId": "022060031",
    "unitName": "WFM4.0",
    "punitId": "022",
    "isChecked": false,
    "unitCode": 'ertrt'
}, {
    "unitId": "022060031001",
    "unitName": "nina",
    "punitId": "022060031",
    "isChecked": false,
    "unitCode": 'xcv'
}, {
    "unitId": "022060031002",
    "unitName": "amy",
    "punitId": "022060031",
    "isChecked": false,
    "unitCode": 'koki'
}]