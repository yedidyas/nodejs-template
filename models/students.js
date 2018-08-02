let express = require('express');
let app = express();
let sql = require("mssql");
let config = require('./config/dbConfig');


exports.getByQuery = function () {
    return new Promise((resolve, reject) => {
        new sql.ConnectionPool(config.dbConfig).connect().then(pool => {
            return pool.request().query('select * from Student')
        }).then(result => {
            resolve(result.recordset);
            sql.close();
        }).catch(err => {
            reject(err)
            sql.close();
        });
    });
};

exports.getByProc = async function () {
    try {
        let pool = await new sql.ConnectionPool(config.dbConfig).connect();
        let result = await pool.request().query('select * from Student');
        return (result.recordset);
    }
    catch (ex) {
        return ex;
    }
};

